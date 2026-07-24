import Header from "@/components/Header/header";
import Structure from "@/components/structure/structure";
import Ubicacion from "@/components/Location/ubicacion";
import Contacto from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer"
import Hero from "@/components/Hero/hero";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white/95">
      <Header/>
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
        <Hero/>
        <Structure/>
        <Ubicacion/>
        <Contacto/>
      </main>
      <Footer/>
    </div>
  );
}
