// src/components/Hero.jsx
import { personal, publications } from "../data/portfolio"
import Typewriter from "./Typewriter"
import MagneticButton from "./MagneticButton"
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "framer-motion"
// import niceMap from "../assets/nice_map.png"
import altamura_map from "../assets/altamura_map.webp"
import { useState, useEffect, useRef } from "react"

// All'inizio della Hero, dopo gli altri import, definisci i ruoli:
const roles = [
  "AI/NLP Specialist",
  "Innovation Pilote @ ALTEN",
  "Researcher in Argument Mining",
]
function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="btn btn-ghost btn-sm btn-circle text-base-content/60 hover:text-primary"
    >
      {children}
    </a>
  )
}

function StatCounter({ value, suffix = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) animate(count, value, { duration: 1.5, ease: "easeOut" })
  }, [isInView, count, value])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

function Hero() {
  const [showMap, setShowMap] = useState(false)
  const papersCount   = publications.length
  const citations = 158
  const languageCount = 3

  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 lg:px-16 py-24 relative z-10">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Colonna sinistra: testo ── */}
          <div className="flex-1 text-center lg:text-left">            
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start text-sm">

            {/* Location — minimal con icona SVG */}
            <div
              className="relative flex items-center gap-1.5 text-base-content/60 cursor-pointer"
              onMouseEnter={() => setShowMap(true)}
              onMouseLeave={() => setShowMap(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hover:text-primary transition-colors">{personal.location}</span>

              {/* Tooltip mappa */}
              <AnimatePresence>
                {showMap && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-4 z-50 pointer-events-none"
                    style={{ width: "384px" }}
                  >
                    <div className="relative w-full aspect-square">
                      <img
                        src={altamura_map}
                        alt={`Map of ${personal.location}`}
                        className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-base-100 ring-2 ring-primary/30 block"
                      />

                      {/* Etichetta */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-base-100 px-3 py-1 rounded-full shadow-md border border-base-200 whitespace-nowrap">
                        <span className="text-xs font-medium text-base-content/80">{personal.location} </span>
                        <span className="text-base-content/30">/</span>
                        <span className="text-xs text-base-content/40"> {personal.coordinates}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Separatore */}
            <span className="text-base-content/30">/</span>

            {/* Status — solo dot + testo */}
            <div className="flex items-center gap-1.5 text-primary font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to opportunities
            </div>

          </div>
            <div className="mb-4">

              {/* Nome — primo piano */}
              <div className="relative z-10">
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-dafoe-regular text-[clamp(3rem,12.5vw,10rem)] leading-none"
                >
                  Pierpaolo
                </motion.h1>
              </div>

              {/* Cognome — secondo piano, sovrapposto */}
              <div className="overflow-hidden relative -mt-[clamp(0.8rem,4vw,4rem)]">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="jersey-20-regular text-[clamp(4rem,15vw,12rem)] leading-none tracking-tight text-primary"
                >
                  GOFFREDO
                </motion.h1>
              </div>

            </div>

            <p className="text-xl font-semibold text-base-content/80 mb-2">
              {personal.title}
            </p>

            <div className="text-base text-base-content/70 mb-8 max-w-lg mx-auto lg:mx-0 font-mono min-h-[1.75rem]">
              <Typewriter texts={roles} />
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <MagneticButton href="#contact" className="btn btn-primary">
                    Contact Me
                </MagneticButton>
                <MagneticButton href={personal.cv} download className="btn btn-outline">
                    Download CV
                </MagneticButton>
            </div>

            <div className="flex gap-1 justify-center lg:justify-start">
              <SocialLink href={personal.social.linkedin} label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </SocialLink>

              <SocialLink href={personal.social.github} label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </SocialLink>

              <SocialLink href={personal.social.scholar} label="Google Scholar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
                </svg>
              </SocialLink>

              <SocialLink href={`mailto:${personal.email}`} label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* ── Colonna destra: avatar + stats ── */}
          <div className="flex flex-col items-center gap-6">

            <div className="avatar placeholder">
                <div className="bg-primary/10 text-primary rounded-full w-48 ring ring-primary ring-offset-base-100 ring-offset-4">
                    {personal.photo ? (
                    <img src={personal.photo} alt={personal.name} />
                    ) : (
                    <span className="text-5xl font-bold">PG</span>
                    )}
                </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-base-200 rounded-box p-4 min-w-0 flex flex-col items-center gap-1">
                <div className="text-primary text-2xl font-extrabold"><StatCounter value={papersCount} /></div>
                <div className="text-xs text-base-content/60">Papers</div>
              </div>
              <div className="bg-base-200 rounded-box p-4 min-w-0 flex flex-col items-center gap-1">
                <div className="text-primary text-2xl font-extrabold"><StatCounter value={citations} /></div>
                <div className="text-xs text-base-content/60">Citations</div>
              </div>
              <div className="bg-base-200 rounded-box p-4 min-w-0 flex flex-col items-center gap-1">
                <div className="text-primary text-2xl font-extrabold"><StatCounter value={languageCount} /></div>
                <div className="text-xs text-base-content/60">Languages</div>
              </div>
            </div>
          </div>

        </div>

        </div>
    </section>
  )
}

export default Hero