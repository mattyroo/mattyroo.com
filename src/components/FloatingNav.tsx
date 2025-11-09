import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

type NavItem = {
  id: string
  label: string
}

type FloatingNavProps = {
  items: NavItem[]
}

const observerOptions: IntersectionObserverInit = {
  rootMargin: '-45% 0px -45% 0px',
  threshold: [0, 0.5, 1],
}

export function FloatingNav({ items }: FloatingNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const inView = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (inView[0]?.target?.id) {
        setActive(inView[0].target.id)
      }
    }, observerOptions)

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - doc.clientHeight
      const amount = maxScroll <= 0 ? 0 : window.scrollY / maxScroll
      document.documentElement.style.setProperty(
        '--scroll-progress',
        amount.toString(),
      )
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="floating-nav" aria-label="Section navigation">
      <motion.div
        className="floating-nav__track"
        style={{ scaleX: scrollYProgress }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      />
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={
            item.id === active ? 'floating-nav__item is-active' : 'floating-nav__item'
          }
        >
          <span aria-hidden>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
