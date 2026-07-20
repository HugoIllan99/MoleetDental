import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="hero__eyebrow">Zapopan · Chapala</span>
          <h1 className="hero__title">
            Sonríe con propósito.
            <br />
            Sonríe con <em>Moleet</em>.
          </h1>
          <p className="hero__subtitle">
            Un equipo de especialistas odontólogos dedicado a transformar sonrisas
            con profesionalismo y pasión — desde limpiezas de rutina hasta
            rehabilitaciones orales completas con tecnología 3D.
          </p>

          <div className="hero__actions">
            <a className="hero__cta-primary" href="https://wa.me/523310235792" target="_blank" rel="noreferrer">
              Agendar por WhatsApp
            </a>
            <a className="hero__cta-secondary" href="tel:+523336292077">
              Llamar al consultorio
            </a>
          </div>

          <dl className="hero__stats">
            <div><dt>100%</dt><dd>recomendado por pacientes</dd></div>
            <div><dt>2013</dt><dd>cuidando sonrisas</dd></div>
            <div><dt>2</dt><dd>sedes: Zapopan y Chapala</dd></div>
          </dl>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <svg className="hero__arc" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="210" cy="210" r="190" stroke="#DCE8F7" strokeWidth="1.5" />
            <motion.path
              d="M90 230C120 150 160 120 210 120C260 120 240 210 210 230C180 250 300 260 320 190"
              stroke="#14315C"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
            />
          </svg>
          <div className="hero__badge">
            <strong>Siempre</strong>
            <span>abierto</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero