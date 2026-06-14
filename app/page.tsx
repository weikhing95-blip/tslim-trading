import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Collection from '@/components/Collection'
import Maker from '@/components/Maker'
import Process from '@/components/Process'
import Recognition from '@/components/Recognition'
import Press from '@/components/Press'
import Documentary from '@/components/Documentary'
import Commission from '@/components/Commission'
import Visit from '@/components/Visit'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Collection />
        <Maker />
        <Process />
        <Recognition />
        <Press />
        <Documentary />
        <Commission />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
