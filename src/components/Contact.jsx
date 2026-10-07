import { motion } from 'framer-motion'

const contactLinks = [
  {
    label: 'GITHUB',
    value: 'kokkulaharika',
    href: 'https://github.com/kokkulaharika',
    icon: 'fa-brands fa-github',
  },
  {
    label: 'LINKEDIN',
    value: 'harikakokkula',
    href: 'https://www.linkedin.com/in/harikakokkula',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'LEETCODE',
    value: 'kokkulaHarika',
    href: 'https://leetcode.com/u/kokkulaHarika/',
    icon: 'fa-solid fa-code',
  },
]

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-grid-background" />

      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="contact-header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="contact-header-left">
            <span className="section-number">
              07
            </span>

            <span className="section-label">
              CONTACT
            </span>
          </div>

          <span className="contact-header-right">
            LET'S BUILD SOMETHING
          </span>
        </motion.div>


        {/* =========================================
            MAIN CONTACT
        ========================================= */}

        <div className="contact-main">

          <motion.div
            className="contact-title-block"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="contact-kicker">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              LET'S
              <br />
              <span>TALK.</span>
            </h2>

            <p>
              Whether it's an opportunity, a project,
              or simply a conversation about technology,
              I'd love to hear from you.
            </p>
          </motion.div>


          {/* =========================================
              EMAIL CTA
          ========================================= */}

          <motion.a
            href="mailto:kokkulaharika828@gmail.com"
            className="contact-email-card"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >
            <div className="contact-email-top">
              <span>
                DROP ME A LINE
              </span>

              <i className="fa-solid fa-arrow-up-right-from-square" />
            </div>

            <div className="contact-email-address">
              kokkulaharika828@gmail.com
            </div>

            <div className="contact-email-bottom">
              <span>
                EMAIL
              </span>

              <div />
              
              <i className="fa-solid fa-arrow-right" />
            </div>
          </motion.a>

        </div>


        {/* =========================================
            SOCIAL LINKS
        ========================================= */}

        <div className="contact-links">

          <motion.div
            className="contact-links-heading"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span>
              FIND ME ONLINE
            </span>

            <div />
          </motion.div>


          <div className="contact-links-grid">

            {contactLinks.map(
              (link, index) => (
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  key={link.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >
                  <div className="contact-link-icon">
                    <i className={link.icon} />
                  </div>

                  <div className="contact-link-info">
                    <span>
                      {link.label}
                    </span>

                    <strong>
                      {link.value}
                    </strong>
                  </div>

                  <i className="fa-solid fa-arrow-up-right-from-square contact-link-arrow" />
                </motion.a>
              ),
            )}

          </div>
        </div>


        {/* =========================================
            RESUME CTA
        ========================================= */}

        <motion.div
          className="contact-resume"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div>
            <span>
              WANT TO KNOW MORE?
            </span>

            <p>
              Take a look at my resume.
            </p>
          </div>

          <a
            href="/Harika_Resume_SDE.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-resume-button"
          >
            <span>
              VIEW RESUME
            </span>

            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </motion.div>


        {/* =========================================
            FINAL STATEMENT
        ========================================= */}

        <motion.div
          className="contact-final"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span>
            THANK YOU FOR SCROLLING
          </span>

          <div className="contact-final-line" />

          <span>
            HARIKA.
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact