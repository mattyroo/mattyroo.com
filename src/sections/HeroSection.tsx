import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const chips = [
  'React + TypeScript',
  'Design systems',
  'Accessibility first',
  'CI/CD automation',
]

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, type: 'spring', stiffness: 110, damping: 18 },
  }),
}

const techStack = [
  {
    name: 'React',
    Icon: SiReact,
    accent: '#61dafb',
    backdrop: 'rgba(97, 218, 251, 0.16)',
    glow: 'rgba(97, 218, 251, 0.55)',
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    accent: '#3178c6',
    backdrop: 'rgba(49, 120, 198, 0.16)',
    glow: 'rgba(49, 120, 198, 0.5)',
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    accent: '#ffffff',
    backdrop: 'rgba(255, 255, 255, 0.12)',
    glow: 'rgba(255, 255, 255, 0.45)',
  },
  {
    name: 'HTML5',
    Icon: SiHtml5,
    accent: '#f16529',
    backdrop: 'rgba(241, 101, 41, 0.16)',
    glow: 'rgba(241, 101, 41, 0.45)',
  },
  {
    name: 'CSS3',
    Icon: SiCss3,
    accent: '#264de4',
    backdrop: 'rgba(38, 77, 228, 0.16)',
    glow: 'rgba(38, 77, 228, 0.45)',
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    accent: '#38bdf8',
    backdrop: 'rgba(56, 189, 248, 0.16)',
    glow: 'rgba(56, 189, 248, 0.5)',
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    accent: '#68a063',
    backdrop: 'rgba(104, 160, 99, 0.16)',
    glow: 'rgba(104, 160, 99, 0.5)',
  },
]

const techVariants = {
  hidden: { opacity: 0, y: 24, rotate: -4 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.35 + index * 0.05,
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  }),
}

export function HeroSection() {
  return (
    <section id="home" className="section hero">
      <div className="hero__content">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 130, damping: 18 }}
        >
          Frontend lead building resilient, animated product experiences.
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 18 }}
        >
          Thirteen years of production experience modernizing web apps, guiding
          distributed teams, and shipping design system driven interfaces that stay
          fast, accessible, and maintainable.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#projects"
            className="button button--primary"
            variants={heroVariants}
            custom={0}
          >
            Explore recent impact
          </motion.a>
          <motion.a
            href="mailto:matthewrgarrity@gmail.com"
            className="button button--ghost"
            variants={heroVariants}
            custom={1}
          >
            Start a project conversation
          </motion.a>
        </motion.div>

        <motion.ul
          className="hero__chips"
          initial="hidden"
          animate="visible"
        >
          {chips.map((chip, index) => (
            <motion.li key={chip} className="chip" variants={heroVariants} custom={index}>
              {chip}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="hero__visual">
        <motion.div
          className="hero__orb"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 90, damping: 18 }}
        />
        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, x: 100, rotateX: 25 }}
          animate={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <span className="panel__title">Tech focus</span>
          <div className="panel__skew">
            <motion.ul
              className="panel__grid panel__grid--skew"
              initial="hidden"
              animate="visible"
            >
              {techStack.map((tech, index) => (
                <motion.li
                  key={tech.name}
                  className="tech-pill"
                  variants={techVariants}
                  custom={index}
                  aria-label={tech.name}
                  tabIndex={0}
                  style={
                    {
                      '--tech-accent': tech.accent,
                      '--tech-backdrop': tech.backdrop,
                      '--tech-glow': tech.glow,
                    } as CSSProperties
                  }
                >
                  <span
                    className="tech-pill__icon"
                    aria-hidden
                    style={{
                      color: tech.accent,
                      background: tech.backdrop,
                      boxShadow: `0 0 0 1px ${tech.backdrop}`,
                    }}
                  >
                    <tech.Icon />
                  </span>
                  <span className="sr-only">{tech.name}</span>
                  <span className="tech-pill__tooltip" aria-hidden>
                    {tech.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
