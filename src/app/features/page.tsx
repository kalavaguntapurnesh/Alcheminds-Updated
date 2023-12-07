import Image from 'next/image'
import First from "@/app/features/First"
import Two from "@/app/features/Two"
import Third from "@/app/features/Third"
import Footer from "@/app/features/Footer"


export default function Home() {
  return (
    <main>
    <First/>
    <Two/>
    <Third/>
    <Footer/>
    </main>
  )
}