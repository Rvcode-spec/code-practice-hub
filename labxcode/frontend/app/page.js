import Cards from "./_components/Cards";
export default function Home() {
  return (
   <>
    <main>
      <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/project-1.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-green-500 text-lg mb-2">Best IT Solutions</p>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">An Innovative IT Solutions Agency</h1>
          <p className="text-gray-200 max-w-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </header>

      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>Yahan about content likho.</p>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
         <Cards />
          <p>Yahan services ka description.</p>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Email: example@labxcode.com</p>
        </div>
      </section>
    </main>
   </>);
}
