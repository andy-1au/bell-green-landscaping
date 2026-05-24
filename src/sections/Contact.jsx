import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa'

const DETAILS = [
  { icon: <FaPhone />,        label: 'Phone',        value: '(267) 225-2627' },
  { icon: <FaEnvelope />,     label: 'Email',        value: 'hello@bellgreen.land' },
  { icon: <FaMapMarkerAlt />, label: 'Service Area', value: 'Northeast Philadelphia & surrounding neighborhoods' },
  { icon: <FaClock />,        label: 'Hours',        value: 'Mon–Sat, 7am–6pm' },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590357091199',
    icon: <FaFacebookF />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bellgreenlandscaping/',
    icon: <FaInstagram />,
  },
]

const WEB3FORMS_KEY = 'fa317b93-18e3-4fbb-b1fd-a5fb37389601'
const MESSAGE_LIMIT = 500

const validatePhone = val => {
  if (!val) return ''
  return /^\D*(\d\D*){10}$/.test(val) ? '' : 'Please enter a valid 10-digit phone number.'
}

const validateEmail = val => {
  if (!val) return 'Email address is required.'
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Please enter a valid email address.'
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [fieldErrors, setFieldErrors] = useState({ phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    if (name === 'message' && value.length > MESSAGE_LIMIT) return
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleBlur = e => {
    const { name, value } = e.target
    if (name === 'phone') setFieldErrors(f => ({ ...f, phone: validatePhone(value) }))
    if (name === 'email') setFieldErrors(f => ({ ...f, email: validateEmail(value) }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const phoneErr = validatePhone(form.phone)
    const emailErr = validateEmail(form.email)
    setFieldErrors({ phone: phoneErr, email: emailErr })
    if (phoneErr || emailErr) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Quote Request from ${form.name}`,
          from_name: 'Bell Green Landscaping Website',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Unable to send. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section__label" style={{ display: 'block', textAlign: 'left', marginBottom: 10 }}>
              Get in Touch
            </span>
            <h2 className="section__title" style={{ textAlign: 'left', marginBottom: 14 }}>
              Request a Free Quote
            </h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 28 }}>
              Ready to get started? Fill out the form and we'll get back to you within one business day.
            </p>
            {DETAILS.map(d => (
              <div className="contact__detail" key={d.label}>
                {d.icon}
                <span><strong>{d.label}:</strong> {d.value}</span>
              </div>
            ))}
            <div className="contact__socials" aria-label="Bell Green Landscaping social media links">
              {SOCIAL_LINKS.map(link => (
                <a
                  className="contact__social-link"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Bell Green Landscaping on ${link.label}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-mid)' }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Jane Smith"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone} onChange={handleChange} onBlur={handleBlur}
                    />
                    {fieldErrors.phone && <span className="form__error">{fieldErrors.phone}</span>}
                  </div>
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="jane@example.com"
                    value={form.email} onChange={handleChange} onBlur={handleBlur} required
                  />
                  {fieldErrors.email && <span className="form__error">{fieldErrors.email}</span>}
                </div>
                <div className="form__group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="mowing">Lawn Mowing & Maintenance</option>
                    <option value="mulching">Mulching & Garden Beds</option>
                    <option value="hedge">Hedge & Shrub Trimming</option>
                    <option value="cleanup">Spring / Fall Cleanup</option>
                    <option value="leaves">Leaf Removal</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="form__group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <label htmlFor="message">Additional Details</label>
                    <span style={{ fontSize: '0.8rem', color: form.message.length >= MESSAGE_LIMIT ? '#c0392b' : 'var(--text-light)' }}>
                      {form.message.length}/{MESSAGE_LIMIT}
                    </span>
                  </div>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe your yard or what you need help with..."
                    value={form.message} onChange={handleChange}
                  />
                </div>
                {error && (
                  <p style={{ color: '#c0392b', fontSize: '0.9rem', marginBottom: 10 }}>{error}</p>
                )}
                <button
                  type="submit"
                  className="btn btn--green"
                  style={{ width: '100%', marginTop: 4 }}
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Send My Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
