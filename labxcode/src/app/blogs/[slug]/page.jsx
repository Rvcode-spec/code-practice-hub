export default function BlogPost({ params }) {
  const { slug } = params;
  // Real app: yahan fetch karke content lao using slug
  return (
    <main className="min-h-screen pt-28">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{slug.replace("-", " ")}</h1>
        <p>Yahan tumhara blog content ayega (slug: {slug}).</p>
      </div>
    </main>
  );
}
