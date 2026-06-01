// src/components/Education.jsx
import { education } from "../data/portfolio"

function Education() {
  return (
    <section id="education" className="bg-base-200">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          {education.map((edu) => (
            <li key={edu.id}>
              <div className="timeline-middle">
                <div className="w-4 h-4 rounded-full border-2 bg-primary border-base-300"></div>
              </div>

              <div className="timeline-end mb-8 w-full">

                {/* Header: titolo + periodo */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-base leading-tight">{edu.degree}</h3>
                  <span className="text-xs text-base-content/50 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                {/* Università + location */}
                <p className="text-primary font-medium text-sm mb-2">
                  {edu.institution} · {edu.location}
                </p>

                {/* Voto — mostrato solo se presente */}
                {edu.grade && (
                  <span className="badge badge-sm bg-primary/10 text-primary border-0 mb-3">
                    {edu.grade}
                  </span>
                )}

                {/* Titolo tesi */}
                <p className="text-sm text-base-content/60 italic">
                  <span className="not-italic font-medium text-base-content/80">Thesis: </span>
                  {edu.thesis}
                </p>

              </div>

              <hr className="bg-base-300" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Education