import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { personal } from "../data/portfolio"

const links = [
  { label: "About",        href: "#about"        },
  { label: "Experience",   href: "#experience"   },
  { label: "Education",    href: "#education"    },
  { label: "Skills",       href: "#skills"       },
  { label: "Publications", href: "#publications" },
  { label: "Contact",      href: "#contact"      },
]

function Navbar({ onToggleTheme, theme }) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      let current = ""
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1))
        if (el && el.offsetTop <= scrollY) current = link.href.slice(1)
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="navbar bg-base-100/30 backdrop-blur-xl border-b border-base-content/10 sticky top-0 z-50">

      {/* Logo — monogramma PG */}
      <div className="navbar-start">
        <a
          href="#hero"
          className="flex items-center justify-center w-9 h-9 ml-2 rounded-lg bg-primary/10 border border-primary/25 hover:bg-primary/20 transition-colors"
        >
          <span className="text-sm font-bold text-primary tracking-tight">PG</span>
        </a>
      </div>

      {/* Link centro — desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-1 px-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 text-sm rounded-lg block transition-colors ${
                    isActive ? "text-primary" : "text-base-content/70 hover:text-base-content"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Toggle tema + hamburger */}
      <div className="navbar-end gap-2">
        <label className="flex cursor-pointer gap-2">
          <span>🌙</span>
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={onToggleTheme}
            checked={theme === "light"}
          />
          <span>☀️</span>
        </label>

        {/* Hamburger — mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-md rounded-box z-50 mt-3 w-52 p-2 shadow border border-base-content/5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? "text-primary" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
