import { motion } from 'framer-motion'

const education = [
  {
    number: '01',
    level: 'UNDERGRADUATE',
    degree: 'B.TECH',
    field: 'COMPUTER SCIENCE & ENGINEERING',
    institution:
      'Kakatiya Institute of Technology and Science for Women',
    location: 'Nizamabad',
    period: '2023 — 2027',
    current: true,
  },
  {
    number: '02',
    level: 'INTERMEDIATE',
    degree: 'INTERMEDIATE',
    field: 'MPC',
    institution: 'TGMS and Junior College',
    location: '',
    period: '2021 — 2023',
    current: false,
  },
  {
    number: '03',
    level: 'SECONDARY',
    degree: 'CLASS X',
    field: '',
    institution: 'Navajyothi High School',
    location: 'Korutla',
    period: '',
    current: false,
  },
]

function Education() {
  return (
    <section
      className="education-section"
      id="education"
    >
      <div className="education-grid-background" />

      <div className="education-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="education-header"
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
          <div className="education-header-left">
            <span className="section-number">
              06
            </span>

            <span className="section-label">
              EDUCATION
            </span>
          </div>

          <span className="education-header-right">
            ACADEMIC JOURNEY
          </span>
        </motion.div>


        {/* =========================================
            INTRO
        ========================================= */}

        <div className="education-intro">

          <motion.div
            className="education-title-block"
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
            <p>
              01 / ACADEMICS
            </p>

            <h2>
              LEARNING
              <br />
              <span>IN</span>
              <br />
              PROGRESS.
            </h2>
          </motion.div>


          <motion.div
            className="education-intro-copy"
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
              / EDUCATIONAL BACKGROUND
            </span>

            <p>
              My academic journey in Computer Science
              has built the foundation for my work across
              software development, databases, APIs,
              problem-solving, and full-stack engineering.
            </p>
          </motion.div>

        </div>


        {/* =========================================
            TIMELINE
        ========================================= */}

        <div className="education-timeline">

          <div className="education-timeline-line" />

          {education.map((item, index) => (
            <motion.article
              className={`education-item ${
                item.current
                  ? 'education-item-current'
                  : ''
              }`}
              key={item.number}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              {/* NUMBER */}

              <div className="education-index">
                <span>
                  {item.number}
                </span>

                <div className="education-node">
                  <span />
                </div>
              </div>


              {/* MAIN CONTENT */}

              <div className="education-main">

                <div className="education-top-row">

                  <span className="education-level">
                    {item.level}
                  </span>

                  {item.current && (
                    <span className="education-current">
                      <span />
                      CURRENT
                    </span>
                  )}

                </div>


                <div className="education-content">

                  <div className="education-details">

                    <h3>
                      {item.degree}
                    </h3>

                    {item.field && (
                      <h4>
                        {item.field}
                      </h4>
                    )}

                    <p className="education-institution">
                      {item.institution}
                    </p>

                    {item.location && (
                      <p className="education-location">
                        <i className="fa-solid fa-location-dot" />
                        {item.location}
                      </p>
                    )}

                    {item.period && (
                      <p className="education-period">
                        {item.period}
                      </p>
                    )}

                  </div>

                </div>

              </div>

            </motion.article>
          ))}

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <motion.div
          className="education-bottom"
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
            duration: 0.8,
          }}
        >
          <span>
            KNOWLEDGE
          </span>

          <div />

          <span>
            FOUNDATION
          </span>

          <div />

          <span>
            ENGINEERING
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Education