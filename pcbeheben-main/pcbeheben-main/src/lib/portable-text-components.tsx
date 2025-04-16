import { createClient, PortableTextComponents } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: false
})

const builder = imageUrlBuilder(client)

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ node, children }: any) => <h1 className="text-4xl font-semibold my-5">{children}</h1>,
    h2: ({ node, children }: any) => <h2 className="text-3xl font-medium my-5">{children}</h2>,
    h3: ({ node, children }: any) => <h3 className="text-2xl font-medium my-3">{children}</h3>,
    h4: ({ node, children }: any) => <h4 className="text-xl font-medium my-3">{children}</h4>,
    h5: ({ node, children }: any) => <h5 className="text-lg font-normal my-3">{children}</h5>,
    h6: ({ node, children }: any) => <h6 className="font-normal my-3">{children}</h6>,
    normal: ({ node, children }: any) => <p className="text-md my-3">{children}</p>,
    blockquote: ({ node, children }: any) => <blockquote className="my-5 p-2 border-l-2 border-primary italic bg-secondary">{children}</blockquote>,
  },
  types: {
    image: ({ value }: any) => <img src={builder.image(value).url()} alt="blog-image" />,
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    em: ({ children }: any) => <em className="italic">{children}</em>,
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    underline: ({ children }: any) => <u className="underline">{children}</u>,
    del: ({ children }: any) => <del className="line-through">{children}</del>,
    code: ({ children }: any) => <code className="">{children}</code>,
    link: ({ children, value }: any) => {
      const rel = !value.href?.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-primary underline hover:text-black">
          {children}
        </a>
      )
    },
  },

  list: {
    number: ({ children }: any) => <ol className="list-decimal my-3">{children}</ol>,
    bullet: ({ children }: any) => <ul className="list-disc my-3">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="my-2 list-inside">{children}</li>,
  },
}

export default portableTextComponents;