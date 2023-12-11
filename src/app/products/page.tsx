import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Zero from "@/app/products/Zero"
import First from "@/app/products/First";
import Two from "@/app/products/Two";
import Three from "@/app/products/Three";
import Footer from "@/app/products/Footer";
import ProductThree from "@/app/products/ProductThree"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Zero/>
      <Three />
      <First />
      <Two />
      <ProductThree/>
      <Footer />
    </main>
  );
}
