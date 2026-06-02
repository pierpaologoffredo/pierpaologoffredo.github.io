// src/components/RevealList.jsx
import { motion } from "framer-motion"

// Il container "orchestra" lo stagger dei figli
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,   // ritardo tra un figlio e l'altro
    },
  },
}

// Ogni figlio ha la sua animazione (parte da invisibile + spostato giù)
const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Wrapper della lista — basta avvolgere il .map() dentro
export function RevealList({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

// Wrapper del singolo item — sostituisce il <div> esterno della card
export function RevealItem({ children, className }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}