import { motion } from 'framer-motion'
import './Hero.css'
import logo from '../assets/logo.png'

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
          
          <div className="hero__logo-wrap">
            <motion.img
              src={logo}
              alt="Moleet Dental Unit"
              className="hero__logo-float"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>


        </motion.div>
      </div>
    </section>
  )
}

export default Hero