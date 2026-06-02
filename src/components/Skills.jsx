// src/components/Skills.jsx
import { skills } from "../data/portfolio"

function Skills() {
  return (
    <section id="skills" className="bg-base-100">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((group) => (
            <div key={group.category}>

              {/* Nome categoria */}
              <h3 className="text-sm font-semibold uppercase tracking-widest text-base-content/50 mb-4">
                {group.category}
              </h3>

              {/* Badge per ogni skill */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-lg bg-base-200 text-base-content/80 border-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills