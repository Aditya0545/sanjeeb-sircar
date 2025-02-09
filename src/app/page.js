import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Media from '../components/Media'
import Performances from '../components/Performances'
import OnlineLessons from '../components/OnlineLessons'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Media />
      <Performances />
      <OnlineLessons />
      <Contact />
    </main>
  )
} 