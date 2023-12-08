import Image from "next/image";
import Navbar from "@/app/features/Navbar";
import Zero from "@/app/products/Zero"
import First from "@/app/products/First";
import Two from "@/app/products/Two";
import Three from "@/app/products/Three";
import Footer from "@/app/products/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Zero/>
      <First />
      <Two />
      <Three />
      <Footer />
    </main>
  );
}
