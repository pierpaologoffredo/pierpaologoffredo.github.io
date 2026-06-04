// src/components/AnimatedBackground.jsx
import { useRef, useEffect } from "react"

function AnimatedBackground() {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)

  useEffect(() => {
    const maxDist      = 300
    const pushStrength = 100
    const blobs = [blob1Ref, blob2Ref, blob3Ref]

    const handleMouseMove = (e) => {
      blobs.forEach((ref) => {
        const blob = ref.current
        if (!blob) return

        const rect = blob.getBoundingClientRect()
        const cx = rect.left + rect.width  / 2
        const cy = rect.top  + rect.height / 2

        const dx = cx - e.clientX
        const dy = cy - e.clientY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < maxDist && dist > 0) {
          const strength = (maxDist - dist) / maxDist
          const pushX = (dx / dist) * pushStrength * strength
          const pushY = (dy / dist) * pushStrength * strength
          blob.style.transform = `translate(${pushX}px, ${pushY}px)`
        } else {
          blob.style.transform = "translate(0, 0)"
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] animate-blob-1">
        <div
          ref={blob1Ref}
          className="w-full h-full bg-primary/15 rounded-full blur-3xl transition-transform duration-500 ease-out"
        ></div>
      </div>

      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] animate-blob-2">
        <div
          ref={blob2Ref}
          className="w-full h-full bg-primary/10 rounded-full blur-3xl transition-transform duration-500 ease-out"
        ></div>
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] animate-blob-3">
        <div
          ref={blob3Ref}
          className="w-full h-full bg-primary/5 rounded-full blur-3xl transition-transform duration-500 ease-out"
        ></div>
      </div>

    </div>
  )
}

export default AnimatedBackground