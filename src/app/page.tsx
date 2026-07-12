import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductStory from "@/components/ProductStory";
import Features from "@/components/Features";
import Partnership from "@/components/Partnership";
import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductStory />
        <Features />
        <Partnership />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
