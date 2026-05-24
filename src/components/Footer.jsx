import logo from '../assets/BG_Round_Logo_Transparent.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <img src={logo} alt="Bell Green Landscaping" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              Serving Northeast Philadelphia and surrounding neighborhoods with quality
              lawn care and landscaping.
            </p>
          </div>
          <div className="footer__links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Lawn Mowing</a></li>
              <li><a href="#services">Mulching</a></li>
              <li><a href="#services">Garden Cleanups</a></li>
              <li><a href="#services">Hedge Trimming</a></li>
              <li><a href="#services">Leaf Removal</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+1234567890">(123) 456-7890</a></li>
              <li><a href="mailto:hello@bellgreenlandscaping.com">Email Us</a></li>
              <li><a href="#contact">Free Quote</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Bell Green Landscaping — Northeast Philadelphia, PA</span>
        </div>
      </div>
    </footer>
  )
}
