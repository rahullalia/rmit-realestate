'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Detect mobile for performance optimization
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// Consistent easing
const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

// Simple fade in on scroll
export function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation
export function Stagger({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
}

// Subtle parallax background
export function ParallaxBg() {
  const isMobile = useIsMobile()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -100])
  const y2 = useTransform(scrollY, [0, 1000], [0, -60])

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#0c2340]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#b8860b]/8 blur-3xl" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#0c2340]/15 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-[#b8860b]/8 blur-3xl"
        style={{ y: y2 }}
      />
    </div>
  )
}

// Simple hover scale for cards
export function HoverCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease }}
    >
      {children}
    </motion.div>
  )
}

// Subtle scale on hover for buttons
export function HoverScale({
  children,
  className = '',
  href,
}: {
  children: React.ReactNode
  className?: string
  href?: string
}) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return href ? (
      <a href={href} className={className}>{children}</a>
    ) : (
      <div className={className}>{children}</div>
    )
  }

  const content = (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease }}
    >
      {children}
    </motion.div>
  )

  return href ? <a href={href}>{content}</a> : content
}

// Gentle floating for profile image
export function Float({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
