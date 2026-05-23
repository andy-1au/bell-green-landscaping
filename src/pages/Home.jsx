import Hero from '../sections/Hero'
import Services from '../sections/Services'
import About from '../sections/About'
import BeforeAfter from '../sections/BeforeAfter'
import Reviews from '../sections/Reviews'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <BeforeAfter />
      <Reviews />
      <Contact />
    </main>
  )
}
