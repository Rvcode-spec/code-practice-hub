import { SchemaTypeDefinition } from 'sanity';

const blog: SchemaTypeDefinition = {
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'thumbnail',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required(),
        Rule.max(65).warning('Too long: Title should be less than 65 characters'),
        Rule.custom((title: string, context: any) => {
          if (!title) return true;
          if (!context.document.keyphrase) return true;
          if (title.toLowerCase().includes(context.document.keyphrase.toLowerCase())) return true;
          return `Title should contain keyphrase "${context.document.keyphrase}"`;
        }).warning(),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => [
        Rule.required(),
        Rule.max(160).warning('Too long: Description should be less than 160 characters'),
      ],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keyphrase',
      title: 'Keyphrase',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
            },
          ],
        },
      ],
      validation: (Rule) => [
        Rule.required(),
        // check Readibility
        Rule.custom(async (content: any, context: any) => {
          if (!content) return 'Content is required';

          const plainText = content
            ?.map((block: any) => block.children)
            ?.filter(Boolean)
            ?.flat()
            ?.filter((child: any) => child._type === 'span')
            ?.map((span: any) => span.text)
            ?.join(' ');

          const words = plainText.split(/\s+/);
          const sentences = plainText.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/);
          const keyphraseDensity =
            plainText.match(new RegExp(context.document.keyphrase, 'gi'))?.length || 0;
          const { subheadings, paragraphs } = content.reduce(
            (acc: any, block: any) => {
              if (block._type === 'block') {
                if (block.style === 'normal') acc.paragraphs++;
                else if (block.style.startsWith('h')) acc.subheadings++;
              }
              return acc;
            },
            { subheadings: 0, paragraphs: 0 },
          );

          const warnings = [];

          if (words.length < 300)
            warnings.push(
              `Content should be at least 300 words long. Currently ${words.length} words`,
            );
          if (sentences.length < 10)
            warnings.push(
              `Content should have at least 10 sentences. Currently ${sentences.length} sentences`,
            );
          if (paragraphs < 3)
            warnings.push(
              `Content should have at least 3 paragraphs. Currently ${paragraphs} paragraphs`,
            );
          if (subheadings < 3)
            warnings.push(
              `Content should have at least 3 subheadings. Currently ${subheadings} subheadings`,
            );
          if (keyphraseDensity < 3)
            warnings.push(
              `Keyphrase should appear at least 3 times in the content. Currently ${keyphraseDensity} times`,
            );

          return warnings.length ? warnings.join(' | ') : true;
        }).warning(),
      ],
    },
  ],
};

export default blog;
