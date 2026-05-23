import { useState } from 'react'
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <FaLeaf />
          Bell Green Landscaping
        </a>
        <nav className="navbar__links">
          {NAV_LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#contact" className="navbar__cta">Free Quote</a>
        </nav>
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <nav className="navbar__mobile">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={() => setOpen(false)}>
            Get a Free Quote
          </a>
        </nav>
      )}
    </header>
  )
}
