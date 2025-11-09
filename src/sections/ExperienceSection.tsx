import { motion } from 'framer-motion'

const roles = [
  {
    company: 'Atlantic Webworks',
    period: '2019 - Present',
    role: 'Lead Frontend Developer',
    summary:
      'Guiding the frontend practice for agency and product clients, mentoring developers, and partnering with design on system rollouts.',
    achievements: [
      'Migrated 20 plus legacy applications to React, TypeScript, and Next.js, reducing support incidents and improving Lighthouse scores.',
      'Stood up CI pipelines with GitHub Actions, Vercel, and Docker for dependable deployments.',
      'Championed accessibility audits and documentation that keep teams aligned on AA compliance.',
    ],
  },
  {
    company: 'Atlantic Webworks',
    period: '2016 - 2019',
    role: 'Senior Frontend Developer',
    summary:
      'Owned the build of a custom CMS platform and collaborated closely with designers to ship polished, responsive sites.',
    achievements: [
      'Developed reusable component libraries that power more than 50 client websites.',
      'Introduced linting, testing, and design system tokens to standardize delivery.',
      'Mentored junior developers on responsive, accessible implementation.',
    ],
  },
  {
    company: 'Atlantic Webworks',
    period: '2013 - 2016',
    role: 'Frontend Developer',
    summary:
      'Maintained and enhanced marketing sites while moving the team toward mobile first and WCAG friendly practices.',
    achievements: [
      'Implemented interactive features across legacy JavaScript and jQuery codebases.',
      'Rolled out mobile first workflows that improved cross device usability.',
      'Partnered with account teams to respond quickly to client launch timelines.',
    ],
  },
  {
    company: 'University of North Carolina at Greensboro',
    period: '2011 - 2012',
    role: 'Web Developer',
    summary:
      'Supported a multi phase redesign of the university web presence with a focus on accessibility and content structure.',
    achievements: [
      'Updated navigation and component patterns to align with new brand guidelines.',
      'Coordinated releases across distributed stakeholders and content editors.',
    ],
  },
  {
    company: 'Drexel University - English Department',
    period: '2011',
    role: 'Web Developer',
    summary:
      'Managed site updates, security patches, and template creation for faculty and staff.',
    achievements: [
      'Delivered easy to maintain templates that sped up content publishing.',
      'Implemented update checklists that kept the site secure and consistent.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="section__header">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 110, damping: 18 }}
        >
          Leadership across modern frontend engineering and design systems.
        </motion.h2>
        <motion.p
          className="section__lede"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 110, damping: 18 }}
        >
          I pair system thinking with pragmatic execution to help teams ship faster,
          boost accessibility, and foster shared ownership of the design system.
        </motion.p>
      </div>

      <div className="timeline">
        {roles.map((role) => (
          <motion.article
            key={role.company}
            className="timeline__item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            transition={{ type: 'spring', stiffness: 110, damping: 20 }}
          >
            <div className="timeline__marker" aria-hidden>
              <span />
            </div>
            <div className="timeline__content">
              <header>
                <div>
                  <h3>{role.company}</h3>
                  <p className="timeline__role">{role.role}</p>
                </div>
                <span className="timeline__period">{role.period}</span>
              </header>
              <p>{role.summary}</p>
              <ul>
                {role.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
