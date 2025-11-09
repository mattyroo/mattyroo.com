import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__grid">
        <motion.div
          className="contact__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ type: 'spring', stiffness: 110, damping: 18 }}
        >
          <motion.a
            href="/Matthew%20Garrity-5.pdf"
            className="button button--primary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View my resume
          </motion.a>
          <motion.a
            href="mailto:matthewrgarrity@gmail.com"
            className="button button--ghost"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            matthewrgarrity@gmail.com
          </motion.a>
          <motion.a
            href="tel:16104058835"
            className="button button--ghost"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            610-405-8835
          </motion.a>
        </motion.div>

        
      </div>
    </section>
  )
}
