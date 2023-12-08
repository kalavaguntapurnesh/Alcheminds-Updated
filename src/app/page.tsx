import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import One from "@/app/components/One";
import Third from "@/app/components/Third";
import Four from "@/app/components/Four";
import Five from "@/app/components/Five";
import Six from "@/app/components/Six";
import Seven from "@/app/components/Seven";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <One />
      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Footer />
    </main>
  );
}
