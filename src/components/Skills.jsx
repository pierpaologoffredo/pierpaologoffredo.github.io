// src/components/Skills.jsx
import { motion } from "framer-motion"
import { skills } from "../data/portfolio"

// Mappa icona per categoria — match by name
const categoryIcons = {
  "NLP & AI":              <BrainIcon />,
  "ML Engineering":        <ChipIcon />,
  "Infrastructure & Dev":  <CodeIcon />,
  "Languages":             <GlobeIcon />,
}

function Skills() {
  return (
    <section id="skills" className="bg-base-100">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((group) => {
            const icon = categoryIcons[group.category]

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-base-200 border border-base-300 p-6 hover:border-primary/30 transition-colors"
              >

                {/* Header card: icona + nome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                    {group.category}
                  </h3>
                </div>

                {/* Badge skills */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.04 } },
                  }}
                >
                  {group.items.map((skill) => {
                    return (
                      <motion.span
                        key={skill}
                        variants={{
                          hidden:  { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`badge badge-lg cursor-default transition-colors ${"bg-base-100 text-base-content/70 border border-base-300 hover:border-primary hover:text-primary"}`}
                      >
                        {skill}
                      </motion.span>
                    )
                  })}
                </motion.div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// Icone categoria — SVG inline per coerenza con il resto del sito
function BrainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function ChipIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

export default Skills