// src/components/AboutAIChat.jsx
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { personal } from "../data/portfolio"

// Parser: trasforma "ciao **mondo**" in [{text:"ciao ", h:false}, {text:"mondo", h:true}]
function parseHighlights(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { text: part.slice(2, -2), highlight: true }
    }
    return { text: part, highlight: false }
  })
}

function AboutAIChat() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [charCount, setCharCount] = useState(0)   // quanti caratteri "puliti" mostrare
  const [phase, setPhase] = useState("waiting")

  const userPrompt = "Tell me about yourself."

  // Parse il testo una sola volta — segments resta stabile tra i render
  const segments = parseHighlights(personal.summary)
  const plainLength = segments.reduce((sum, s) => sum + s.text.length, 0)

  // Avvia thinking → typing
  useEffect(() => {
    if (!isInView || phase !== "waiting") return
    const startTimer = setTimeout(() => setPhase("typing"), 600)
    return () => clearTimeout(startTimer)
  }, [isInView, phase])

  // Typewriter: incrementa il contatore caratteri
  useEffect(() => {
    if (phase !== "typing") return

    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= plainLength) {
          clearInterval(interval)
          setPhase("done")
          return prev
        }
        return prev + 1
      })
    }, 18)

    return () => clearInterval(interval)
  }, [phase, plainLength])

  // Costruisci i pezzi visibili in base al contatore
  const visibleSegments = []
  let charsShown = 0
  for (const seg of segments) {
    if (charsShown >= charCount) break
    const remaining = charCount - charsShown
    const visibleText = seg.text.slice(0, remaining)
    if (visibleText) {
      visibleSegments.push({ text: visibleText, highlight: seg.highlight })
    }
    charsShown += visibleText.length
  }

  return (
    <div ref={ref} className="rounded-2xl border-2 border-primary/40 bg-base-100 shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-base-300 bg-base-200">
        <div className="flex gap-1.5 ">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
        </div>
        <span className="text-xs font-medium text-base-content/50 font-mono">Chat with Pierpaolo</span>
        <div className="w-12 "></div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-6">

        {/* User message */}
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-full bg-base-300 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1 pt-1">
            <p className="text-xs font-semibold text-base-content/60 mb-1">You</p>
            <p className="text-base-content/90 font-mono">{userPrompt}</p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.91 8.26L3.27 8.27L8.68 12.14L6.59 18.4L12 14.53L17.41 18.4L15.32 12.14L20.73 8.27L14.09 8.26L12 2Z"/>
            </svg>
          </div>
          <div className="flex-1 pt-1 min-h-[6rem]">
            <p className="text-xs font-semibold text-primary mb-1">Pierpaolo AI</p>

            {/* Thinking indicator */}
            {isInView && phase === "waiting" && (
              <div className="flex gap-1 mt-2">
                <span className="w-1.5 h-1.5 bg-base-content/30 rounded-full animate-bounce" style={{ animationDelay: "0ms"   }}></span>
                <span className="w-1.5 h-1.5 bg-base-content/30 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-1.5 h-1.5 bg-base-content/30 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            )}

            {/* Testo con highlights */}
            {(phase === "typing" || phase === "done") && (
              <p className="text-base-content/80 leading-relaxed font-mono">
                {visibleSegments.map((seg, i) =>
                  seg.highlight ? (
                    <strong key={i} className="text-primary">{seg.text}</strong>
                  ) : (
                    <span key={i}>
                      {seg.text}
                    </span>
                  )
                )}
                {phase === "typing" && (
                  <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse align-middle"></span>
                )}
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Footer */}
      {/* <div className="border-t border-base-300 px-4 py-3 flex items-center gap-2 bg-base-200/30">
        <div className="flex-1 text-sm text-base-content/30 font-mono">Ask me anything...</div>
        <div className="text-xs text-base-content/30 font-mono border border-base-300 rounded px-1.5 py-0.5">↵</div>
      </div> */}

    </div>
  )
}

export default AboutAIChat