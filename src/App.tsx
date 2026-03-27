import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import TeamSection from './components/TeamSection'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060912] text-slate-100">
      <div className="grid-background" aria-hidden />
      <div className="floating-orb floating-orb-gold" aria-hidden />
      <div className="floating-orb floating-orb-brown" aria-hidden />

      <Navbar />
      <main>
        <Hero />
        <About />
        <TeamSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
