import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import First from "@/app/features/First";
import Two from "@/app/features/Two";
import Third from "@/app/features/Third";
import Four from "@/app/features/Four"
import Footer from "@/app/features/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <First />
      <Two />
      <Third />
      <Four/>
      <Footer />
    </main>
  );
}
