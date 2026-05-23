import { FaLeaf, FaTree, FaSeedling, FaBroom, FaRecycle, FaMapMarkerAlt } from 'react-icons/fa'

const SERVICES = [
  {
    icon: <FaLeaf />,
    title: 'Lawn Mowing & Maintenance',
    desc: 'Regular mowing, edging, and trimming to keep your lawn looking sharp all season long.',
  },
  {
    icon: <FaSeedling />,
    title: 'Mulching & Garden Beds',
    desc: 'Fresh mulch installation and garden bed cleanup to boost curb appeal and protect your plants.',
  },
  {
    icon: <FaTree />,
    title: 'Hedge & Shrub Trimming',
    desc: 'Precise shaping and trimming to keep hedges, bushes, and shrubs neat and healthy.',
  },
  {
    icon: <FaBroom />,
    title: 'Spring & Fall Cleanups',
    desc: 'Thorough seasonal yard cleanups to prep your lawn for the months ahead.',
  },
  {
    icon: <FaRecycle />,
    title: 'Leaf Removal',
    desc: 'Complete leaf cleanup and disposal so your lawn can breathe heading into winter.',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Custom Landscaping',
    desc: 'Have something specific in mind? We do custom work too — reach out and let us know.',
  },
]

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__label">What We Do</span>
          <h2 className="section__title">Services We Offer</h2>
          <p className="section__desc">
            From routine mowing to full seasonal cleanups — we handle the yard work so you don't have to.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
