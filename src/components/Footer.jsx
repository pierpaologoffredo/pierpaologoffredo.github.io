// src/components/Footer.jsx
import { personal } from "../data/portfolio"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm text-base-content/50">
            © {year} {personal.name} — All rights reserved.
          </p>

          {/* Link rapidi */}
          <div className="flex gap-6">
            {["about", "experience", "education", "skills", "publications", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-xs text-base-content/40 hover:text-primary capitalize transition-colors"
              >
                {section}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer