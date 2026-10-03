import { motion } from 'framer-motion'

const skillGroups = [
  {
    number: '01',
    title: 'LANGUAGES',
    description: 'The foundations I build with.',
    skills: [
      {
        name: 'Python',
        icon: 'devicon-python-plain',
        type: 'devicon',
      },
      {
        name: 'JavaScript',
        icon: 'devicon-javascript-plain',
        type: 'devicon',
      },
      {
        name: 'SQL',
        icon: 'fa-solid fa-database',
        type: 'fa',
      },
      {
        name: 'Java Basics',
        icon: 'devicon-java-plain',
        type: 'devicon',
      },
    ],
  },

  {
    number: '02',
    title: 'FRONTEND',
    description: 'Interfaces built for clarity and interaction.',
    skills: [
      {
        name: 'React.js',
        icon: 'devicon-react-original',
        type: 'devicon',
      },
      {
        name: 'HTML5',
        icon: 'devicon-html5-plain',
        type: 'devicon',
      },
      {
        name: 'CSS3',
        icon: 'devicon-css3-plain',
        type: 'devicon',
      },
    ],
  },

  {
    number: '03',
    title: 'BACKEND',
    description: 'APIs and server-side application development.',
    skills: [
      {
        name: 'FastAPI',
        icon: 'devicon-fastapi-plain',
        type: 'devicon',
      },
      {
        name: 'Node.js',
        icon: 'devicon-nodejs-plain',
        type: 'devicon',
      },
      {
        name: 'Express.js',
        icon: 'devicon-express-original',
        type: 'devicon',
      },
      {
        name: 'REST APIs',
        icon: 'fa-solid fa-code',
        type: 'fa',
      },
    ],
  },

  {
    number: '04',
    title: 'DATABASES',
    description: 'Working with structured and document data.',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain',
        type: 'devicon',
      },
      {
        name: 'MongoDB',
        icon: 'devicon-mongodb-plain',
        type: 'devicon',
      },
      {
        name: 'SQL',
        icon: 'fa-solid fa-database',
        type: 'fa',
      },
    ],
  },

  {
    number: '05',
    title: 'CORE CONCEPTS',
    description: 'The engineering fundamentals behind my work.',
    skills: [
      {
        name: 'DSA',
        icon: 'fa-solid fa-diagram-project',
        type: 'fa',
      },
      {
        name: 'OOP',
        icon: 'fa-solid fa-cubes',
        type: 'fa',
      },
      {
        name: 'DBMS',
        icon: 'fa-solid fa-database',
        type: 'fa',
      },
      {
        name: 'Operating Systems',
        icon: 'fa-solid fa-desktop',
        type: 'fa',
      },
      {
        name: 'Computer Networks',
        icon: 'fa-solid fa-network-wired',
        type: 'fa',
      },
      {
        name: 'System Design',
        icon: 'fa-solid fa-sitemap',
        type: 'fa',
      },
    ],
  },

  {
    number: '06',
    title: 'TOOLS',
    description: 'Tools I use throughout the development workflow.',
    skills: [
      {
        name: 'Git',
        icon: 'devicon-git-plain',
        type: 'devicon',
      },
      {
        name: 'GitHub',
        icon: 'devicon-github-original',
        type: 'devicon',
      },
      {
        name: 'Postman',
        icon: 'devicon-postman-plain',
        type: 'devicon',
      },
      {
        name: 'Swagger UI',
        icon: 'fa-solid fa-file-code',
        type: 'fa',
      },
    ],
  },

  {
    number: '07',
    title: 'ENGINEERING',
    description: 'Practices that shape how I build software.',
    skills: [
      {
        name: 'SDLC',
        icon: 'fa-solid fa-arrows-rotate',
        type: 'fa',
      },
      {
        name: 'Agile',
        icon: 'fa-solid fa-people-group',
        type: 'fa',
      },
      {
        name: 'Code Reviews',
        icon: 'fa-solid fa-code-branch',
        type: 'fa',
      },
      {
        name: 'Testing & Debugging',
        icon: 'fa-solid fa-bug',
        type: 'fa',
      },
    ],
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-background-grid" />

      <div className="skills-orb skills-orb-one" />
      <div className="skills-orb skills-orb-two" />

      <div className="skills-container">

        {/* HEADER */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-header-left">
            <span className="section-number">03</span>

            <span className="section-label">
              TECHNICAL ARSENAL
            </span>
          </div>

          <span className="skills-header-status">
            <span className="skills-status-dot" />
            SYSTEM READY
          </span>
        </motion.div>

        {/* INTRO */}
        <div className="skills-intro">

          <motion.div
            className="skills-title-block"
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
            <p>WHAT I WORK WITH</p>

            <h2>
              BUILD.
              <br />

              <span>SHIP.</span>
              <br />

              <strong>ITERATE.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="skills-intro-copy"
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="skills-intro-index">
              / 03
            </span>

            <p>
              A practical stack across frontend, backend,
              databases, and software engineering fundamentals.
            </p>

            <div className="skills-intro-line">
              <span />
            </div>
          </motion.div>

        </div>

        {/* SKILLS MATRIX */}
        <div className="skills-matrix">

          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-group"
              key={group.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* CARD TOP */}
              <div className="skill-group-top">

                <span className="skill-group-number">
                  {group.number}
                </span>

                <span className="skill-group-arrow">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>

              </div>

              {/* CARD CONTENT */}
              <div className="skill-group-content">

                <h3>
                  {group.title}
                </h3>

                <p>
                  {group.description}
                </p>

                <div className="skill-list">

                  {group.skills.map(
                    (skill, skillIndex) => (
                      <motion.div
                        className="skill-pill"
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          y: 12,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.05 +
                            skillIndex * 0.06,
                        }}
                      >

                        <span className="skill-icon">

                          {skill.type === 'devicon' ? (
                            <i
                              className={skill.icon}
                            />
                          ) : (
                            <i
                              className={skill.icon}
                            />
                          )}

                        </span>

                        <span className="skill-name">
                          {skill.name}
                        </span>

                      </motion.div>
                    ),
                  )}

                </div>

              </div>

              {/* GLOW */}
              <div className="skill-group-glow" />

            </motion.article>
          ))}

        </div>

        {/* FOOTER */}
        <motion.div
          className="skills-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
          }}
        >

          <span>
            FULL-STACK DEVELOPMENT
          </span>

          <div className="skills-footer-line">
            <span />
          </div>

          <span>
            01 — 07
          </span>

        </motion.div>

      </div>
    </section>
  )
}

export default Skills