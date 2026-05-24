import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const DETAILS = [
  { icon: <FaPhone />,        label: 'Phone',        value: '(123) 456-7890' },
  { icon: <FaEnvelope />,     label: 'Email',        value: 'hello@bellgreenlandscaping.com' },
  { icon: <FaMapMarkerAlt />, label: 'Service Area', value: 'Northeast Philadelphia & surrounding neighborhoods' },
  { icon: <FaClock />,        label: 'Hours',        value: 'Mon–Sat, 7am–6pm' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up to Formspree or EmailJS
    setSubmitted(true)
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
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="jane@example.com"
                    value={form.email} onChange={handleChange} required
                  />
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
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe your yard or what you need help with..."
                    value={form.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn--green" style={{ width: '100%', marginTop: 4 }}>
                  Send My Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
