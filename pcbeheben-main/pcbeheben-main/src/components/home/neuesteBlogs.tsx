import Routes from '@/lib/routes';
import { getBlogs } from '@/lib/sanity/utils';
import { format } from 'date-fns';
import Link from '../layout/custom-link';

const NeuesteBlogs= async() => {
  const blogs = await getBlogs()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-center text-4xl font-bold text-gray-800">Neueste Blogs</h1>
      <p className="mb-8 text-center text-gray-500">
        Entdecken Sie frische Einblicke in unseren neuesten Blogs.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {blogs.slice(0,3).map((blog, index) => (
          <Link href={Routes.blog_post(blog.slug)} key={index} className="overflow-hidden rounded-lg bg-white shadow-md">
            <img src={blog.thumbnail} alt={blog.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              {/* <span
                className={`text-sm font-bold ${blog.category === 'TECHNOLOGY' ? 'text-red-500' : 'text-green-500'}`}
              >
                {blog.category}
              </span> */}
              <h2 className="mt-2 text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="mt-2 text-gray-500">{blog.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-400">
                {/* <span>By {blog.author}</span> */}
                <span className="mx-2">|</span>
                <span>{format(blog._createdAt,'dd LLL,yyyy')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NeuesteBlogs;
