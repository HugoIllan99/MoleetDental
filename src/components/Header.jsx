import { useState } from 'react'
import './Header.css'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <img src={logo} alt="Moleet Dental Unit" className="header__logo-img" />
          <span className="header__logo-text">
            Moleet <span>Dental Unit</span>
          </span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            className="header__cta"
            href="https://wa.me/523310235792"
            target="_blank"
            rel="noreferrer"
          >
            Agendar cita
          </a>
          <button
            className="header__toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header