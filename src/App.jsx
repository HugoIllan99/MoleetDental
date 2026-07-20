import { motion } from "framer-motion"

function App() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Bienvenido a MoleetDental
    </motion.h1>
  )
}

export default App