import { createClient, groq } from 'next-sanity';
import { Blog } from '@/lib/types';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: false,
});

export async function getBlogs(): Promise<Blog[]> {
  return client.fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      description,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`,
  );
}

export async function getBlog(slug: string): Promise<Blog> {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      description,
      keywords,
      "thumbnail": thumbnail.asset->url,
      content
    }`,
    { slug },
  );
}
