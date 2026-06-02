// src/components/Typewriter.jsx
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Typewriter({
  texts,                  // array di stringhe da ciclare
  typingSpeed   = 60,     // ms per ogni carattere quando scrive
  deletingSpeed = 30,     // ms per ogni carattere quando cancella
  pauseTime     = 2000,   // ms di pausa quando una stringa è completa
  cursorChar    = "▮",
}) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex,   setTextIndex]   = useState(0)
  const [charIndex,   setCharIndex]   = useState(0)
  const [isDeleting,  setIsDeleting]  = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    // Tempo di attesa prima del prossimo "tick"
    let timeout = isDeleting ? deletingSpeed : typingSpeed

    // Se la parola è completa, fa una pausa lunga prima di iniziare a cancellare
    if (!isDeleting && charIndex === currentText.length) {
      timeout = pauseTime
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Scrive un carattere
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        // Finito di scrivere → inizia a cancellare
        setIsDeleting(true)
      } else if (isDeleting && charIndex > 0) {
        // Cancella un carattere
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (isDeleting && charIndex === 0) {
        // Finito di cancellare → passa alla prossima parola
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        className="text-primary ml-0.5"
      >
        {cursorChar}
      </motion.span>
    </span>
  )
}

export default Typewriter