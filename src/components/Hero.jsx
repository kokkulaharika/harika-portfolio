import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2

      setMouse({ x, y })

      document.documentElement.style.setProperty(
        '--mouse-x',
        `${event.clientX}px`,
      )

      document.documentElement.style.setProperty(
        '--mouse-y',
        `${event.clientY}px`,
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.35,
      },
    },
  }

  const textItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="hero" id="home">
      {/* Decorative background elements */}
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid" />

      <div className="hero-content">

        {/* ================================
            LEFT SIDE
        ================================= */}
        <motion.div
          className="hero-copy"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-eyebrow"
            variants={textItem}
          >
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-intro"
            variants={textItem}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            className="hero-title"
            variants={textItem}
          >
            HARIKA
            <span className="hero-title-dot">.</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            variants={textItem}
          >
            <span>SOFTWARE</span>

            <span className="role-line" />

            <span>DEVELOPER</span>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={textItem}
          >
            I build thoughtful digital experiences,
            scalable applications, and systems that
            turn ideas into useful products.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="hero-actions"
            variants={textItem}
          >
            <a
              href="#work"
              className="hero-primary-btn"
            >
              <span>EXPLORE MY WORK</span>

              <i className="fa-solid fa-arrow-right" />
            </a>

            <a
              href="/Harika_Resume_SDE.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-btn"
            >
              VIEW RESUME

              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="hero-socials"
            variants={textItem}
          >
            <span>FIND ME ON</span>

            <a
              href="https://github.com/kokkulaharika"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>

            <a
              href="https://www.linkedin.com/in/harikakokkula"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
              href="https://leetcode.com/u/kokkulaHarika/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <i className="fa-solid fa-code" />
            </a>

            <a
              href="mailto:kokkulaharika828@gmail.com"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope" />
            </a>
          </motion.div>
        </motion.div>

        {/* ================================
            RIGHT SIDE — PROFILE
        ================================= */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transform: `
              perspective(1200px)
              rotateY(${mouse.x * 4}deg)
              rotateX(${mouse.y * -4}deg)
            `,
          }}
        >
          <div className="photo-glow" />

          <div className="photo-frame">

            {/* Frame header */}
            <div className="photo-frame-top">
              <span>01 / PROFILE</span>

              <span>ONLINE</span>
            </div>

            {/* Profile image */}
            <div className="photo-container">
              <img
                src="/images/profile.jpg"
                alt="Harika"
              />

              <div className="photo-overlay" />
            </div>

            {/* Frame footer */}
            <div className="photo-frame-bottom">
              <span>SOFTWARE DEVELOPER</span>

              <span className="frame-arrow">
                <i className="fa-solid fa-arrow-down" />
              </span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ================================
          BOTTOM SCROLL INDICATOR
      ================================= */}
      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <motion.span
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <span>01 — 06</span>
      </motion.div>
    </section>
  )
}

export default Hero