import Button from '../components/Button'
import banner from '../assets/logo/BG_Banner_Transparent.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__badge">Northeast Philadelphia · Surrounding Neighborhoods</span>
          <h1 className="hero__title">
            Beautiful Lawns,<br />
            <span>Happy Neighbors</span>
          </h1>
          <p className="hero__subtitle">
            Friendly, reliable landscaping and lawn care for local homeowners.
            We treat your yard like it's our own.
          </p>
          <div className="hero__actions">
            <Button href="#contact" variant="primary">Get a Free Quote</Button>
            <Button href="#services" variant="outline">See Our Services</Button>
          </div>
        </div>
        <div className="hero__image">
          <img src={banner} alt="Bell Green Landscaping" />
        </div>
      </div>
    </section>
  )
}
