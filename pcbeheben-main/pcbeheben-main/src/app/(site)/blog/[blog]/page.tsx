import portableTextComponents from '@/lib/portable-text-components';
import { getBlog, getBlogs } from '@/lib/sanity/utils';
import { PortableText } from 'next-sanity';
import { format } from 'date-fns';
// import PageReader from "@/components/page-reader"
import Link from '@/components/layout/custom-link';
import Routes from '@/lib/routes';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogForm } from '@/components/blog/contact-form';

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const { blog } = params;
  const blogPost = await getBlog(blog);
  if (!blogPost) return notFound();
  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      url: `${Routes.blog_post(blog)}`,
      images: {
        url: blogPost.thumbnail,
        alt: blogPost.title,
      },
    },
    twitter: {
      title: blogPost.title,
      description: blogPost.description,
      images: {
        url: blogPost.thumbnail,
        alt: blogPost.title,
      },
    },
    alternates: {
      canonical: `${Routes.blog_post(blog)}`,
    },
  };
}

export default async function Page({ params }: { params: { blog: string } }) {
  const { blog } = params;
  const blogPost = await getBlog(blog);
  const blogs = await getBlogs();
  if (!blogPost) return notFound();
  return (
    <div className="bg-secondary pt-20">
      <div className="justify-center gap-5 p-5 lg:flex">
        <div id="content" className="word bg-white p-4 leading-7 tracking-wide md:w-[768px]">
          <img
            src={blogPost.thumbnail}
            alt={blogPost.title}
            className="mx-auto aspect-video w-full object-cover sm:mx-0"
          />
          <div className="my-3 flex items-center justify-between font-serif">
            <div>
              <div className="inline whitespace-nowrap">
                {format(new Date(blogPost._createdAt), 'LLL dd, yyyy ')}|
              </div>
              <div className="inline whitespace-nowrap">
                {/* @ts-ignore */}
                {` ${Math.ceil(blogPost.content.reduce((totalWords, block) => totalWords + (block._type === 'block' && block.children ? block.children.map(child => child.text).join(' ').split(/\s+/).filter(word => word).length : 0), 0) / 200)} min read`}
              </div>
            </div>
            {/* <PageReader /> */}
          </div>
          <h1 className="my-5 text-4xl font-semibold">{blogPost.title}</h1>
          <PortableText value={blogPost.content} components={portableTextComponents} />
        </div>
        <div>
          <div className="flex flex-col items-center gap-3 lg:sticky lg:top-24">
            <BlogForm />
            <h2 className="text-2xl font-semibold">Related Posts</h2>

            {blogs
              .filter((b) => b.slug != blogPost.slug)
              .slice(0, 5)
              .map((blog, index) => (
                <Link
                  href={Routes.blog_post(blog.slug)}
                  key={index}
                  className="w-80 bg-white text-center"
                >
                  <img
                    src={blog.thumbnail}
                    alt={`Related blog ${index}`}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="line-clamp-2 text-ellipsis font-semibold">{blog.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
