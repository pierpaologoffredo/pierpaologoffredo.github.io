// src/components/Publications.jsx
import { motion } from "framer-motion"
import { publications } from "../data/portfolio"

function venueBadgeClass(venue) {
  if (venue.includes("ACL"))   return "bg-blue-100   text-blue-800"
  if (venue.includes("EMNLP")) return "bg-purple-100 text-purple-800"
  if (venue.includes("AAAI"))  return "bg-green-100  text-green-800"
  if (venue.includes("IJCAI")) return "bg-orange-100 text-orange-800"
  if (venue.includes("WOAH"))  return "bg-pink-100   text-pink-800"
  return "bg-base-200 text-base-content/70"
}

function Publications() {
  return (
    <section id="publications">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Publications</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <div className="flex flex-col gap-4">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl bg-base-100/50 border border-base-300 p-6 hover:border-primary/30 transition-colors"
            >
              {/* Accento verticale sinistro */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

              {/* Anno watermark */}
              <span
                className="jersey-20-regular pointer-events-none select-none absolute -right-1 -bottom-3 leading-none text-primary"
                style={{ fontSize: "clamp(5rem, 10vw, 8rem)", opacity: 0.07 }}
              >
                {pub.year}
              </span>

              {/* Contenuto */}
              <div className="relative z-10 pl-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`badge badge-sm font-semibold border-0 ${venueBadgeClass(pub.venue)}`}>
                    {pub.venue}
                  </span>
                  <span className="text-xs text-base-content/50">{pub.location}</span>
                  <span className="text-xs font-semibold text-primary ml-auto">{pub.year}</span>
                </div>

                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base leading-snug hover:text-primary transition-colors"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <p className="font-semibold text-base leading-snug">{pub.title}</p>
                )}

                <ul className="mt-2 flex flex-col gap-1">
                  {pub.highlights.map((h, index) => (
                    <li key={index} className="flex gap-2 text-sm text-base-content/60">
                      <span className="text-primary shrink-0">–</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Publications
