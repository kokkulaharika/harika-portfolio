import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    category: 'FULL-STACK / RELEASE ENGINEERING',
    title: 'FEATURE FLAG',
    titleAccent: 'MANAGEMENT',

    description:
      'A centralized platform for controlling feature releases, evaluating flags, and managing rollout strategies across environments.',

    problem:
      'Teams need a controlled way to release features without repeatedly changing and redeploying application code.',

    why:
      'I built the system around flexible release control, so features can be evaluated and managed centrally.',

    solution:
      'A full-stack feature flag platform with FastAPI REST APIs, PostgreSQL, Redis caching, and a React administration interface.',

    features: [
      'Boolean toggles',
      'Percentage rollout',
      'User / group targeting',
      'Environment overrides',
      'Redis caching',
      'Evaluation analytics',
      'Audit logging',
      'Flag lifecycle management',
    ],

    stack: [
      'Python',
      'FastAPI',
      'React.js',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'REST APIs',
    ],

    video: '/videos/feature-flags-demo.mp4',

    github:
      'https://github.com/kokkulaharika/Feature_Flag_management_system',
  },

  {
    number: '02',
    category: 'FULL-STACK / SAAS',
    title: 'LEDGER',
    titleAccent: 'FLOW',

    description:
      'A billing and inventory management SaaS designed to bring sales, purchases, products, customers, suppliers, invoices, and expenses into one system.',

    problem:
      'Managing stock and business operations manually can create repetitive work and make it harder to keep inventory synchronized.',

    why:
      'I wanted to build a practical SaaS application that connects everyday billing and inventory workflows through a single system.',

    solution:
      'A full-stack application built with React.js, Node.js, Express.js, and MongoDB, supported by REST APIs and JWT authentication.',

    features: [
      '8+ business modules',
      '30+ REST endpoints',
      'JWT authentication',
      'User-level data isolation',
      'Inventory synchronization',
      'Products management',
      'Sales & purchases',
      'Billing & expenses',
    ],

    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT',
    ],

    video: '/videos/ledgerflow-demo.mp4',

    github:
      'https://github.com/kokkulaharika/Ledger-flow',
  },
]

function ProjectVideo({ project }) {
  const [playing, setPlaying] = useState(false)

  const handlePlay = (event) => {
    event.currentTarget.blur()
    setPlaying(true)
  }

  return (
    <div className="project-video-wrapper">
      <div className="project-browser">

        {/* Browser Header */}

        <div className="browser-topbar">

          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-address">
            <i className="fa-solid fa-lock" />
            <span>project-demo.local</span>
          </div>

          <div className="browser-controls">
            <i className="fa-solid fa-ellipsis" />
          </div>

        </div>

        {/* Video Screen */}

        <div className="project-video-container">

          <video
            src={project.video}
            controls={playing}
            muted
            playsInline
            preload="metadata"
            className="project-video"
            onPlay={() => setPlaying(true)}
          />

          {!playing && (
            <div
              className="video-overlay"
              onClick={handlePlay}
            >

              <div className="video-overlay-grid" />

              <button
                type="button"
                className="play-demo-button"
                aria-label={`Play ${project.title} ${project.titleAccent} demo`}
              >
                <span className="play-icon">
                  <i className="fa-solid fa-play" />
                </span>

                <span>PLAY DEMO</span>
              </button>

              <div className="video-corner video-corner-top">
                SCREEN RECORDING
              </div>

              <div className="video-corner video-corner-bottom">
                DEMO / {project.number}
              </div>

            </div>
          )}

        </div>
      </div>

      <div className="video-shadow" />
    </div>
  )
}

function StoryBlock({
  number,
  label,
  children,
  delay = 0,
}) {
  return (
    <motion.div
      className="project-story-block"
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
        delay,
      }}
    >
      <div className="story-number">
        {number}
      </div>

      <div className="story-content">
        <span className="story-label">
          {label}
        </span>

        <p>{children}</p>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="projects-grid-background" />

      <div className="projects-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <motion.div
          className="projects-header"
          initial={{
            opacity: 0,
            y: 30,
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
          <div className="projects-header-left">
            <span className="section-number">
              04
            </span>

            <span className="section-label">
              SELECTED WORK
            </span>
          </div>

          <span className="projects-header-right">
            BUILT / TESTED / SHIPPED
          </span>
        </motion.div>

        {/* =====================================
            INTRO
        ===================================== */}

        <div className="projects-intro">

          <motion.div
            className="projects-title-block"
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
            <p>THE WORK</p>

            <h2>
              IDEAS
              <br />
              <span>INTO</span>
              <br />
              SYSTEMS.
            </h2>
          </motion.div>

          <motion.div
            className="projects-intro-copy"
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
            <span>/ SELECTED PROJECTS</span>

            <p>
              Two full-stack applications built around
              real workflows, backend architecture,
              APIs, databases, and usable interfaces.
            </p>
          </motion.div>

        </div>

        {/* =====================================
            PROJECT LIST
        ===================================== */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className="project"
              key={project.number}
            >

              {/* PROJECT TOP */}

              <motion.div
                className="project-top"
                initial={{
                  opacity: 0,
                  y: 30,
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
                }}
              >

                <div className="project-index">
                  <span>
                    {project.number}
                  </span>

                  <span>
                    {project.category}
                  </span>
                </div>

                <div className="project-line" />

              </motion.div>

              {/* PROJECT TITLE */}

              <motion.div
                className="project-heading"
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.8,
                }}
              >

                <h3>
                  {project.title}
                  <span>
                    {project.titleAccent}
                  </span>
                </h3>

                <p>
                  {project.description}
                </p>

              </motion.div>

              {/* PROJECT VIDEO */}

              <motion.div
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                }}
              >
                <ProjectVideo
                  project={project}
                />
              </motion.div>

              {/* STORY */}

              <div className="project-story">

                <div className="project-story-heading">
                  <span>THE STORY</span>
                  <div />
                </div>

                <div className="project-story-grid">

                  <StoryBlock
                    number="01"
                    label="THE PROBLEM"
                  >
                    {project.problem}
                  </StoryBlock>

                  <StoryBlock
                    number="02"
                    label="WHY I BUILT IT"
                    delay={0.08}
                  >
                    {project.why}
                  </StoryBlock>

                  <StoryBlock
                    number="03"
                    label="THE SOLUTION"
                    delay={0.16}
                  >
                    {project.solution}
                  </StoryBlock>

                </div>

              </div>

              {/* FEATURES + STACK */}

              <div className="project-details">

                <div className="project-detail-block">

                  <div className="detail-heading">
                    <span>KEY FEATURES</span>

                    <span>
                      {String(
                        project.features.length,
                      ).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="feature-list">

                    {project.features.map(
                      (feature, featureIndex) => (
                        <motion.div
                          className="feature-item"
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              featureIndex * 0.04,
                          }}
                        >
                          <span>
                            {String(
                              featureIndex + 1,
                            ).padStart(2, '0')}
                          </span>

                          <p>
                            {feature}
                          </p>

                          <i className="fa-solid fa-arrow-up-right-from-square" />
                        </motion.div>
                      ),
                    )}

                  </div>

                </div>

                <div className="project-detail-block">

                  <div className="detail-heading">
                    <span>TECH STACK</span>
                    <span>STACK</span>
                  </div>

                  <div className="project-stack">

                    {project.stack.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="project-tech"
                        >
                          {tech}
                        </span>
                      ),
                    )}

                  </div>

                </div>

              </div>

              {/* PROJECT FOOTER */}

              <motion.div
                className="project-footer"
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

                <div className="project-footer-label">
                  <span>
                    {index === 0
                      ? 'EXPLORE THE CODE'
                      : 'VIEW SOURCE'}
                  </span>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-project-button"
                >
                  <span>
                    GITHUB
                  </span>

                  <i className="fa-brands fa-github" />

                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>

              </motion.div>

            </article>
          ))}

        </div>

        {/* SECTION FOOTER */}

        <div className="projects-footer">
          <span>02 PROJECTS</span>

          <div>
            <span />
          </div>

          <span>04 — 07</span>
        </div>

      </div>
    </section>
  )
}

export default Projects