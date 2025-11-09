import { motion } from 'framer-motion'

const stats = [
  {
    label: 'Years shipping',
    value: '13',
    detail: 'Full lifecycle delivery across agencies, startups, and higher education.',
  },
  {
    label: 'Modernized apps',
    value: '20+',
    detail: 'Legacy upgrades from jQuery stacks to React, TypeScript, and Next.js.',
  },
  {
    label: 'Websites launched',
    value: '50+',
    detail: 'Custom CMS rollouts and brand refreshes with accessibility in mind.',
  },
]

const expertise = [
  'React, TypeScript, Next.js, and component architecture',
  'Design system governance and accessibility reviews',
  'Testing culture with Jest, RTL, Cypress, and CI pipelines',
  'Product collaboration spanning design, research, and engineering',
]

export function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="section__header">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          About
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 110, damping: 18 }}
        >
          A multidisciplinary lead crafting soulful digital products.
        </motion.h2>
        <motion.p
          className="section__lede"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 110, damping: 18 }}
        >
          I blend product thinking with frontend leadership to translate concepts into
          durable, performant interfaces. From rapid prototyping to production launches,
          I align teams around design systems, accessibility, and measurable outcomes.
        </motion.p>
      </div>

      <div className="about__grid">
        <motion.ul
          className="about__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.li
              key={stat.label}
              className="stat-card"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: 'spring', stiffness: 110, damping: 18 }}
            >
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
              <p>{stat.detail}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="about__summary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 110, damping: 18 }}
        >
          <h3>Focus areas</h3>
          <ul>
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="about__note">
            <h4>Toolbox highlights</h4>
            <p>
              React, TypeScript, Next.js, Tailwind CSS, Framer Motion, Jest, React Testing
              Library, Cypress, GitHub Actions, Docker, AWS Amplify, Vercel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
