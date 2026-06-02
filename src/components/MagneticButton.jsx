// src/components/MagneticButton.jsx
import { useRef } from "react"

function MagneticButton({ children, href, className, strength = 0.15, ...rest }) {
  const ref = useRef(null)

  // Calcola lo spostamento basato sulla posizione del mouse rispetto al bottone
  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width  / 2) * strength
    const y = (e.clientY - rect.top  - rect.height / 2) * strength

    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.transition = "transform 0.15s ease-out"
  }

  // Quando il mouse esce, torna al centro con un'animazione più lunga
  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return

    el.style.transform = "translate(0, 0)"
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}

export default MagneticButton