import { FaCheckCircle } from 'react-icons/fa'
import Button from '../components/Button'

const BULLETS = [
  'Locally owned and operated in Northeast Philadelphia',
  'We show up on time, every time',
  'Friendly, communicative, and easy to work with',
  'We take pride in every yard we touch',
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <div className="about__grid">
          <div className="about__image-placeholder">🌿</div>
          <div className="about__text">
            <span className="section__label">About Us</span>
            <h2 className="section__title">Two Neighbors Who Love a Great Lawn</h2>
            <p className="about__body">
              We're a two-person local team based in Northeast Philadelphia. We started Bell Green
              because we believe lawn care should feel personal — not like a number in a queue.
              When you hire us, you get us.
            </p>
            <p className="about__body">
              Whether it's a one-time cleanup or regular maintenance, we'll treat your yard
              like it's our own.
            </p>
            <ul className="about__bullets">
              {BULLETS.map(b => (
                <li key={b}>
                  <FaCheckCircle />
                  {b}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="green">Get in Touch</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
