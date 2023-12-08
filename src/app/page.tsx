import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Trusted from "@/app/components/Trusted";
import Middle from "@/app/components/Middle";
import Third from "@/app/components/Third";
import Four from "@/app/components/Four";
import Five from "@/app/components/Five";
import Six from "@/app/components/Six";
import Seven from "@/app/components/Seven";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Footer />
    </main>
  );
}
