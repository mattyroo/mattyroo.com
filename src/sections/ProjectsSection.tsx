import { motion } from 'framer-motion'

type Project = {
  title: string
  sector: string
  year: string
  description: string
  role: string
  tags: string[]
  url: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: 'Saas Dashboard',
    sector: 'Personal project',
    year: '2025',
    description:
      'A vaporwave-inspired SaaS dashboard concept exploring motion-driven status indicators, live metrics, and personalized onboarding flows.',
    role: 'Product Designer · Frontend Engineer',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Design systems'],
    url: 'https://neonforge.mattyroo.com',
    githubUrl: 'https://github.com/mattyroo/neonforge',
  },
  {
    title: 'Media Explorer',
    sector: 'Personal project',
    year: '2024',
    description:
      'Media discovery experience powered by the TMDB API, featuring advanced search, smart watchlists, and curated recommendations for films and TV.',
    role: 'Frontend Engineer',
    tags: ['React', 'TypeScript', 'TMDB API', 'State management'],
    url: 'https://media.mattyroo.com',
    githubUrl: 'https://github.com/mattyroo/TMDB-Dashboard',
  },
  {
    title: 'Custom CMS platform',
    sector: 'Atlantic Webworks',
    year: '2016 - 2019',
    description:
      'Architected a modular CMS that powers more than 50 marketing sites with reusable components, streamlined authoring workflows, and automated accessibility checks.',
    role: 'Senior Frontend Developer',
    tags: ['Component libraries', 'Accessibility', 'CI pipelines', 'Team leadership'],
    url: '#experience',
  },
  {
    title: 'Enterprise app modernization',
    sector: 'Atlantic Webworks',
    year: '2019 - Present',
    description:
      'Led the migration of 20 plus client applications from jQuery and Bootstrap into React, TypeScript, and Next.js stacks, cutting support tickets and unlocking design system reuse.',
    role: 'Lead Frontend Developer',
    tags: ['React', 'TypeScript', 'Next.js', 'Design systems'],
    url: '#experience',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <div className="section__header">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          Recent impact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 110, damping: 18 }}
        >
          Highlights from shipping modern frontend platforms and data tools.
        </motion.h2>
        <motion.p
          className="section__lede"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 110, damping: 18 }}
        >
          A blend of client deliveries and personal explorations where I paired design,
          engineering, and research to improve speed to market, accessibility, and
          customer understanding.
        </motion.p>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.01 }}
            viewport={{ once: true, margin: '-10% 0px -20% 0px' }}
            transition={{
              delay: index * 0.1,
              type: 'spring',
              stiffness: 120,
              damping: 18,
            }}
          >
            <div className="project-card__meta">
              <span>{project.sector}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__bottom">
              <span>{project.role}</span>
              <div className="project-card__links">
                <motion.a
                  href={project.url}
                  className="link"
                  whileHover={{ x: 4 }}
                >
                  Project Details
                </motion.a>
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    className="link"
                    whileHover={{ x: 4 }}
                  >
                    View on GitHub
                  </motion.a>
                )}
              </div>
            </div>
            <ul className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
