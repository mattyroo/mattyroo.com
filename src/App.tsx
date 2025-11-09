import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ContactSection } from './sections/ContactSection'
import { CustomCursor } from './components/CustomCursor'
import { FloatingNav } from './components/FloatingNav'
import './App.css'

function App() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="app">
      <CustomCursor />
      <div className="app__background" aria-hidden />
      <header className="app__topbar">
        <span className="topbar__logo">Matthew Garrity</span>
        <span className="topbar__availability">
          Frontend Developer
        </span>
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="app__footer">
        <span>&copy; {new Date().getFullYear()} Matthew Garrity.</span>
        <a
          className="link"
          href="https://github.com/mattyroo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/matthew-garrity-94b8572a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </footer>
      <FloatingNav items={navItems} />
    </div>
  )
}

export default App
