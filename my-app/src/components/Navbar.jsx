// src/components/Navbar.jsx
import { personal } from "../data/portfolio"

// Riceve due props da App.jsx:
//   onToggleTheme → funzione da chiamare al click
//   theme         → "light" o "dark", per mostrare l'icona giusta
function Navbar({ onToggleTheme, theme }) {

  const links = [
    { label: "About",        href: "#about"        },
    { label: "Experience",   href: "#experience"   },
    { label: "Education",    href: "#education"    },
    { label: "Skills",       href: "#skills"       },
    { label: "Publications", href: "#publications" },
    { label: "Contact",      href: "#contact"      },
  ]

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

      {/* Logo / nome a sinistra */}
      <div className="navbar-start">
        <a href="#hero" className="btn btn-ghost text-lg font-bold">
          {personal.name}
        </a>
      </div>

      {/* Link al centro — visibili solo su schermi grandi (lg:flex) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle tema a destra */}


      <div className="navbar-end gap-2">
        <label className="flex cursor-pointer gap-2">
            <span className="dark-theme">🌙</span>
            <input type="checkbox" value="dark-theme" className="toggle theme-controller" onChange={onToggleTheme} checked={theme === "light"} />
            <span className="light-theme">☀️</span>
        </label>

        {/* Menu hamburger — visibile solo su mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar