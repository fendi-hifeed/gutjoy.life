import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
        <Features />
        <Partnership />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
