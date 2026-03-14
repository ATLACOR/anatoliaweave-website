import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <Compliance />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
