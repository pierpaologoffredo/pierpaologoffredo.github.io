// src/components/Publications.jsx
import { publications } from "../data/portfolio"
import { RevealList, RevealItem } from "./RevealList"

// Colore del badge per venue — ogni conferenza ha il suo colore
function venueBadgeClass(venue) {
  if (venue.includes("ACL"))     return "bg-blue-100 text-blue-800"
  if (venue.includes("EMNLP"))   return "bg-purple-100 text-purple-800"
  if (venue.includes("AAAI"))    return "bg-green-100 text-green-800"
  if (venue.includes("IJCAI"))   return "bg-orange-100 text-orange-800"
  if (venue.includes("WOAH"))    return "bg-pink-100 text-pink-800"
  return "bg-base-200 text-base-content/70"
}

function Publications() {
  return (
    <section id="publications" className="bg-base-200">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">Publications</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <RevealList className="flex flex-col gap-5">
          {publications.map((pub) => (
            <RevealItem key={pub.id} className="flex gap-5 items-start">

              {/* Anno — colonna sinistra fissa */}
              <div className="hidden md:block w-12 shrink-0 text-right">
                <span className="text-sm font-semibold text-primary">{pub.year}</span>
              </div>

              {/* Linea verticale decorativa */}
              <div className="hidden md:block w-px bg-base-300 shrink-0 self-stretch"></div>

              {/* Contenuto */}
              <div className="flex-1">

                {/* Venue badge + location */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`badge badge-sm font-semibold border-0 ${venueBadgeClass(pub.venue)}`}>
                    {pub.venue}
                  </span>
                  <span className="text-xs text-base-content/50">{pub.location}</span>
                </div>

                {/* Titolo — cliccabile se c'è un url */}
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

                {/* Highlights */}
                <ul className="mt-2 flex flex-col gap-1">
                  {pub.highlights.map((h, index) => (
                    <li key={index} className="flex gap-2 text-sm text-base-content/60">
                      <span className="text-primary shrink-0">–</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </RevealItem>
          ))}
        </RevealList>

      </div>
    </section>
  )
}

export default Publications