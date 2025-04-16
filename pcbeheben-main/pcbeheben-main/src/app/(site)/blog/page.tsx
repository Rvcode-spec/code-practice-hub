import Link from '@/components/layout/custom-link';
import Routes from '@/lib/routes';
import { getBlogs } from '@/lib/sanity/utils';
import { format } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PC Beheben Blog',
};

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <div className="mx-auto mt-14 p-3 pt-14 text-center xl:w-[1280px]">
      <h1 className="mb-5 text-3xl font-medium sm:text-4xl">Blogs</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Link
            href={Routes.blog_post(blog.slug)}
            key={index}
            className="bg-white p-5 text-start tracking-wider shadow-lg"
          >
            <img src={blog.thumbnail} className="aspect-video w-full object-cover" />
            <p className="my-5 text-start text-sm text-amber-900">BLOG</p>
            <h2 className="my-3 line-clamp-2 text-ellipsis text-xl font-semibold">{blog.title}</h2>
            <p className="my-3 font-serif text-sm">
              {format(new Date(blog._createdAt), 'LLL dd, yyyy')}
            </p>
            <p className="my-3 line-clamp-3 text-ellipsis text-sm">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
