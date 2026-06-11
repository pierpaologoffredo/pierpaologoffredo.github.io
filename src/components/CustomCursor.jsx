import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import navigation from "../assets/navigation.png"

function CustomCursor() {
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { damping: 22, stiffness: 160, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 22, stiffness: 160, mass: 0.5 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onOver = (e) => {
      setHovering(!!e.target.closest('a, button, [role="button"], input, textarea, select, label'))
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Ring — insegue con lag spring, centrato sul hotspot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-primary"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:   hovering ? 48 : 32,
          height:  hovering ? 48 : 32,
          opacity: hovering ? 1  : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Freccia PNG — hotspot alla punta (top-left), segue il mouse 1:1 */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: mouseX, y: mouseY }}
        animate={{ width: hovering ? 32 : 26, height: hovering ? 32 : 26 }}
        transition={{ duration: 0.15 }}
      >
        <img src={navigation} alt="" draggable={false} className="w-full h-full" />
      </motion.div>
    </>
  )
}

export default CustomCursor
