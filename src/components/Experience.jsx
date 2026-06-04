// src/components/Experience.jsx
import { motion } from "framer-motion"
import { experience } from "../data/portfolio"

function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <motion.ul
          className="timeline timeline-snap-icon timeline-compact timeline-vertical"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {experience.map((job) => (
            <motion.li
              key={job.id}
              variants={{
                hidden:  { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <div className="timeline-middle">
                <div className="w-4 h-4 rounded-full border-2 bg-primary border-primary"></div>
              </div>

              <div className="timeline-end mb-8 w-full">

                {/* Header: ruolo + periodo */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-base leading-tight">{job.role}</h3>
                  <span className="text-xs text-base-content/50 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                {/* Azienda + badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary font-medium text-sm">
                    {job.company} · {job.location}
                  </span>
                  {job.current && (
                    <span className="badge badge-sm bg-primary/10 text-primary border-0">
                      Current
                    </span>
                  )}
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-1.5">
                  {job.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-2 text-sm text-base-content/70">
                      <span className="text-primary shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <hr className="bg-base-300" />
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  )
}

export default Experience