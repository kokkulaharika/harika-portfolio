import { motion } from 'framer-motion'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
  { number: '01', label: 'HOME', href: '#home' },
  { number: '02', label: 'ABOUT', href: '#about' },
  { number: '03', label: 'SKILLS', href: '#skills' },
  { number: '04', label: 'PROJECTS', href: '#projects' },
  { number: '05', label: 'INTERNSHIP', href: '#internship' },
  { number: '06', label: 'EDUCATION', href: '#education' },
  { number: '07', label: 'CONTACT', href: '#contact' },
]

  return (
    <>
      <motion.header
        className="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          HARIKA<span>.</span>
        </a>

        {/* Quick Links */}
        <nav className="quick-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="quick-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Menu Button */}
        <button
          className={`menu-button ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </motion.header>

      {/* Full Screen Menu */}
      <motion.div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        initial={false}
        animate={{
          clipPath: menuOpen
            ? 'circle(150% at 95% 5%)'
            : 'circle(0% at 95% 5%)',
        }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="menu-inner">
          <div className="menu-heading">
            <span>NAVIGATION</span>
            <span>SELECT DESTINATION</span>
          </div>

          <nav className="menu-links">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="menu-link"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 60 }}
                animate={
                  menuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 60 }
                }
                transition={{
                  delay: menuOpen ? 0.15 + index * 0.08 : 0,
                  duration: 0.5,
                }}
              >
                <span className="menu-number">
                  {item.number}
                </span>

                <span className="menu-label">
                  {item.label}
                </span>

                <i className="fa-solid fa-arrow-up-right-from-square" />
              </motion.a>
            ))}
          </nav>

          <div className="menu-footer">
            <span>SOFTWARE DEVELOPER</span>

            <div className="menu-socials">
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
                href="mailto:kokkulaharika828@gmail.com"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Navbar