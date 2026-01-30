'use client'

import { useEffect, useState, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'

// Mobile detection hook - disable animations on mobile for performance
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return isMobile
}

// Fade in on scroll
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// Staggered fade in for lists
export function FadeInStagger({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Card with 3D lift effect
export function Card3D({
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
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  )
}

// Spotlight card with cursor glow
export function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(30,58,95,0.25), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

// Magnetic button effect
export function MagneticButton({
  children,
  className = '',
  href,
}: {
  children: React.ReactNode
  className?: string
  href?: string
}) {
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (isMobile) {
    return href ? (
      <a href={href} className={className}>
        {children}
      </a>
    ) : (
      <div className={className}>{children}</div>
    )
  }

  const content = (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )

  return href ? <a href={href}>{content}</a> : content
}

// Parallax background with gradient blobs
export function ParallaxBackground() {
  const isMobile = useIsMobile()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const y3 = useTransform(scrollY, [0, 1000], [0, -200])

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1e3a5f]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[300px] h-[300px] rounded-full bg-[#c9a227]/10 blur-3xl" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#1e3a5f]/20 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-[#c9a227]/10 blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#1e3a5f]/15 blur-3xl"
        style={{ y: y3 }}
      />
    </div>
  )
}

// Text reveal animation
export function TextReveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <span className={className}>{children}</span>

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  )
}

// Animated counter
export function NumberCounter({
  value,
  suffix = '',
  prefix = '',
}: {
  value: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

// Floating animation
export function Float({
  children,
  className = '',
  duration = 3,
}: {
  children: React.ReactNode
  className?: string
  duration?: number
}) {
  const isMobile = useIsMobile()
  if (isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// Glow pulse animation
export function GlowPulse({
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
      animate={{
        boxShadow: [
          '0 0 20px rgba(201, 162, 39, 0.3)',
          '0 0 40px rgba(201, 162, 39, 0.5)',
          '0 0 20px rgba(201, 162, 39, 0.3)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
