// src/components/About.jsx
import { personal } from "../data/portfolio"

function About() {
  return (
    <section id="about" className="bg-base-200">
      <div className="container mx-auto px-6 lg:px-16 py-10">

        <h2 className="text-3xl font-bold mb-2">About me</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <div className="flex flex-col lg:flex-row gap-16">

          <div className="flex-1">
            <p className="text-base-content/80 text-lg leading-relaxed">
              {personal.summary}
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:w-72">
            <InfoRow icon={<LocationIcon />}    label="Location"    value={personal.location} />
            <InfoRow icon={<EmailIcon />}       label="Email"       value={personal.email} />
            <InfoRow icon={<NationalityIcon />} label="Nationality" value="Italian" />
            <InfoRow icon={<LanguagesIcon />}   label="Languages"   value="Italian · English · French" />
          </div>

        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      {/* Box icona di dimensione fissa — garantisce allineamento perfetto */}
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-base-content/50 uppercase tracking-widest">{label}</p>
        <p className="text-base-content/80 font-medium">{value}</p>
      </div>
    </div>
  )
}

// Icone SVG — tutte stessa dimensione, stesso stile
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function NationalityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  )
}

function LanguagesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

export default About