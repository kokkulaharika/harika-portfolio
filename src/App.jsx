import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="ambient-light one" />
      <div className="ambient-light two" />
      <div className="ambient-light three" />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Contact />
      </main>
    </>
  )
}

export default App