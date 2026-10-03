import { motion } from 'framer-motion'

function About() {
  const stats = [
  {
    number: '02',
    label: 'FULL-STACK PROJECTS',
  },
  {
    number: 'LEETCODE',
    label: 'PROBLEM SOLVING',
  },
  {
    number: '01',
    label: 'INTERNSHIP',
  },
]

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-number">02</span>

          <span className="section-label">
            ABOUT ME
          </span>

          <div className="section-line" />
        </motion.div>


        {/* Main Content */}
        <div className="about-content">

          {/* Left */}
          <motion.div
            className="about-title-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="about-kicker">
              SOFTWARE DEVELOPER
            </p>

            <h2>
              BUILDING
              <br />
              <span>WITH PURPOSE.</span>
            </h2>
          </motion.div>


          {/* Right */}
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="about-main-text">
              I'm a final-year Computer Science Engineering
              student focused on building practical software
              and full-stack applications.
            </p>

            <p>
              My work spans backend development, REST APIs,
              databases, and modern frontend interfaces.
              I enjoy turning ideas into structured,
              usable products while continuously improving
              my problem-solving and development skills.
            </p>

            <div className="about-divider" />

            <p className="about-small-text">
              Currently exploring scalable systems,
              backend architecture, and thoughtful
              digital experiences.
            </p>
          </motion.div>

        </div>


        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          {stats.map((stat, index) => (
            <div
              className="about-stat"
              key={stat.label}
            >
              <span className="about-stat-number">
                {stat.number}
              </span>

              <span className="about-stat-label">
                {stat.label}
              </span>

              {index !== stats.length - 1 && (
                <span className="about-stat-divider" />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About