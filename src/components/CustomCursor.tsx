import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const springConfig = { stiffness: 300, damping: 30, mass: 0.5 }

export function CustomCursor() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isPointerDown, setIsPointerDown] = useState(false)
  const [isPointerVisible, setIsPointerVisible] = useState(true)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  useEffect(() => {
    if (prefersReducedMotion) return
    const handleMove = (event: PointerEvent) => {
      rawX.set(event.clientX)
      rawY.set(event.clientY)
      setIsPointerVisible(true)
    }

    const handleLeave = () => setIsPointerVisible(false)
    const handleDown = () => setIsPointerDown(true)
    const handleUp = () => setIsPointerDown(false)

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)
    window.addEventListener('pointerdown', handleDown)
    window.addEventListener('pointerup', handleUp)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
      window.removeEventListener('pointerdown', handleDown)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [prefersReducedMotion, rawX, rawY])

  const cursorClass = useMemo(() => {
    if (!isPointerVisible) return 'cursor cursor--hidden'
    if (isPointerDown) return 'cursor cursor--down'
    return 'cursor'
  }, [isPointerDown, isPointerVisible])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <>
      <motion.div
        className={`${cursorClass} cursor--outline`}
        style={{ translateX: x, translateY: y }}
      />
      <motion.div
        className={`${cursorClass} cursor--dot`}
        style={{ translateX: x, translateY: y }}
      />
    </>
  )
}

