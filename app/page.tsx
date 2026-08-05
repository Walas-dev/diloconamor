import Header from "@/components/Header/header";
import Structure from "@/components/structure/structure";
import Ubicacion from "@/components/Location/location";
import Contacto from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer"
import Hero from "@/components/Hero/hero";
import Services from "@/components/services/service";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Header/>
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
        <Hero/>
        <Services/>
        <Structure/>
        <Ubicacion/>
        <Contacto/>
      </main>
      <Footer/>
    </div>
  );
}
