import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World" },
  { slug: "nextjs-tips", title: "Next.js Tips" },
];


export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-28">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Blogs</h1>
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blogs/${p.slug}`} className="text-cyan-500 hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
