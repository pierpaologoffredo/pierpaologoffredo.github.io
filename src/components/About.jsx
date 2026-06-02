// src/components/About.jsx
import { personal } from "../data/portfolio"

function About() {
  return (
    <section id="about" className="bg-base-200">
      <div className="container mx-auto px-6 lg:px-16 py-24">

        {/* Titolo sezione */}
        <h2 className="text-3xl font-bold mb-2">About me</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12"></div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Testo bio */}
          <div className="flex-1">
            <p className="text-base-content/80 text-lg leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Info rapide */}
          <div className="flex flex-col gap-4 lg:w-72">
            <InfoRow icon="📍" label="Location" value={personal.location} />
            <InfoRow icon="✉️" label="Email" value={personal.email} />
            <InfoRow icon="🇮🇹" label="Nationality" value="Italian" />
            <InfoRow icon="🌍" label="Languages" value="Italian - English - French" />
          </div>

        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-xs text-base-content/50 uppercase tracking-widest">{label}</p>
        <p className="text-base-content/80 font-medium">{value}</p>
      </div>
    </div>
  )
}

export default About