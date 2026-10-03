import { motion } from 'framer-motion'

const responsibilities = [
  {
    number: '01',
    title: 'BACKEND ENGINEERING',
    text:
      'Developed Python FastAPI backend APIs, database components, feature evaluation logic, and release management workflows for a Feature Flag Management and Release Control System.',
  },
  {
    number: '02',
    title: 'SYSTEM INTEGRATION',
    text:
      'Implemented scalable features and service integrations using FastAPI, PostgreSQL, SQLAlchemy, and Redis, while building administrative interfaces in React.js.',
  },
  {
    number: '03',
    title: 'ENGINEERING WORKFLOW',
    text:
      'Participated in code reviews, Agile discussions, testing, and debugging using Git and GitHub-based development workflows.',
  },
  {
    number: '04',
    title: 'DELIVERY & COLLABORATION',
    text:
      'Coordinated assigned tasks and resolved technical issues to meet project milestones.',
  },
]

const technologies = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'SQLAlchemy',
  'Redis',
  'React.js',
  'Git',
  'GitHub',
]

function Experience() {
  return (
    <section
      className="experience-section"
      id="internship"
    >
      <div className="experience-grid-background" />

      <div className="experience-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="experience-header"
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
          <div className="experience-header-left">
            <span className="section-number">
              05
            </span>

            <span className="section-label">
              EXPERIENCE
            </span>
          </div>

          <span className="experience-header-right">
            PROFESSIONAL EXPERIENCE
          </span>
        </motion.div>


        {/* =========================================
            MAIN INTRO
        ========================================= */}

        <div className="experience-intro">

          <motion.div
            className="experience-title-block"
            initial={{
              opacity: 0,
              x: -50,
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="experience-kicker">
              01 / INTERNSHIP
            </p>

            <h2>
              LEARN.
              <br />
              <span>BUILD.</span>
              <br />
              SHIP.
            </h2>
          </motion.div>


          <motion.div
            className="experience-intro-copy"
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
            <span>
              / PROFESSIONAL EXPERIENCE
            </span>

            <p>
              My internship experience gave me the
              opportunity to work across backend APIs,
              databases, feature evaluation, release
              workflows, and administrative interfaces
              in a full-stack development environment.
            </p>
          </motion.div>

        </div>


        {/* =========================================
            EXPERIENCE CARD
        ========================================= */}

        <motion.article
          className="experience-card"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* CARD TOP */}

          <div className="experience-card-top">

            <div className="experience-company">
              <span className="experience-label">
                ORGANIZATION
              </span>

              <h3>
                INFOSYS
                <span>SPRINGBOARD</span>
              </h3>
            </div>

            <div className="experience-date">
              <span>
                JUL 2026
              </span>

              <div />

              <span>
                SEP 2026
              </span>
            </div>

          </div>


          {/* ROLE */}

          <div className="experience-role-row">

            <div>
              <span className="experience-label">
                ROLE
              </span>

              <h4>
                FULL STACK
                <br />
                DEVELOPER INTERN
              </h4>
            </div>

            <div className="experience-status">
              <span className="experience-status-dot" />

              <span>
                COMPLETED
              </span>
            </div>

          </div>


          {/* PROJECT */}

          <div className="experience-project">

            <div className="experience-project-number">
              01
            </div>

            <div className="experience-project-content">

              <span className="experience-label">
                PROJECT
              </span>

              <h4>
                FEATURE FLAG MANAGEMENT
                <br />
                <span>
                  & RELEASE CONTROL SYSTEM
                </span>
              </h4>

              <p>
                Worked on a centralized system for
                feature evaluation and release
                management, contributing to backend
                services, database components,
                evaluation logic, release workflows,
                and administrative interfaces.
              </p>

            </div>

          </div>


          {/* RESPONSIBILITIES */}

          <div className="experience-work">

            <div className="experience-section-title">
              <span>
                WHAT I WORKED ON
              </span>

              <div />
            </div>

            <div className="experience-responsibilities">

              {responsibilities.map(
                (item, index) => (
                  <motion.div
                    className="experience-responsibility"
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >

                    <span className="responsibility-number">
                      {item.number}
                    </span>

                    <div>
                      <h5>
                        {item.title}
                      </h5>

                      <p>
                        {item.text}
                      </p>
                    </div>

                  </motion.div>
                ),
              )}

            </div>

          </div>


          {/* TECH STACK */}

          <div className="experience-stack-section">

            <div className="experience-section-title">
              <span>
                TECHNOLOGIES
              </span>

              <div />
            </div>

            <div className="experience-stack">

              {technologies.map(
                (technology, index) => (
                  <motion.span
                    className="experience-tech"
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    {technology}
                  </motion.span>
                ),
              )}

            </div>

          </div>


          {/* CARD FOOTER */}

          <div className="experience-card-footer">

            <span>
              FULL STACK DEVELOPMENT
            </span>

            <div className="experience-footer-line" />

            <span>
              2026
            </span>

          </div>

        </motion.article>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <motion.div
          className="experience-bottom"
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
          <span>
            FROM LEARNING
          </span>

          <div className="experience-bottom-line" />

          <span>
            TO BUILDING REAL SYSTEMS
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience