// src/components/Experience.jsx
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { experience } from "../data/portfolio"

function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 30%"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <div ref={containerRef} className="relative">

          {/* Linea verticale centrale — desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-base-300/30" />
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
            <motion.div className="absolute top-0 left-0 right-0 bg-primary" style={{ height: lineHeight }} />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
              style={{ top: lineHeight, boxShadow: "0 0 12px 5px oklch(72% 0.2 50 / 0.55)" }}
            />
          </div>

          {/* Linea verticale sinistra — mobile */}
          <div className="lg:hidden absolute left-[19px] top-0 bottom-0 w-px bg-base-300/30" />
          <div className="lg:hidden absolute left-[19px] top-0 bottom-0 w-px">
            <motion.div className="absolute top-0 left-0 right-0 bg-primary" style={{ height: lineHeight }} />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
              style={{ top: lineHeight, boxShadow: "0 0 12px 5px oklch(72% 0.2 50 / 0.55)" }}
            />
          </div>

          <div className="pl-10 lg:pl-0 flex flex-col gap-6">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0
              const year = job.period.match(/\d{4}/)?.[0] ?? ""

              return (
                <motion.div
                  key={job.id}
                  className="relative"
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Card */}
                  <div className={`lg:w-[46%] ${isLeft ? "lg:mr-auto" : "lg:ml-auto"} rounded-2xl bg-base-100/50 border border-base-300 hover:border-primary/30 transition-colors overflow-hidden`}>

                    {/* Anno */}
                    <div className="px-6 pt-5 pb-1">
                      <span className="jersey-20-regular text-6xl leading-none text-primary">{year}</span>
                    </div>

                    {/* Contenuto */}
                    <div className="px-6 pb-5 pt-2">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-base leading-tight">{job.role}</h3>
                        <span className="text-xs text-base-content/50 whitespace-nowrap">{job.period}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-primary font-medium text-sm">{job.company} · {job.location}</span>
                        {job.current && (
                          <span className="badge badge-sm bg-primary/10 text-primary border-0">Current</span>
                        )}
                      </div>

                      <ul className="flex flex-col gap-1.5">
                        {job.bullets.map((bullet, index) => (
                          <li key={index} className="flex gap-2 text-sm text-base-content/70">
                            <span className="text-primary shrink-0">–</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
