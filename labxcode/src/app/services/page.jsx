export const dynamic = "force-dynamic"; // agar har request par naye data chahiye
export default async function ServerPage() {
  const now = new Date().toLocaleString();
  return (
    <main className="min-h-screen pt-28">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Server Page</h1>
        <p>Yeh page server component hai. Server time (server-side): {now}</p>
        <p>Agar tum external API se data lana chahte ho, yahan `await fetch()` use kar sakte ho.</p>
      </div>
    </main>
  );
}
