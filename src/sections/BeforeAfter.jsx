const PROJECTS = [
  {
    title: 'Spring Cleanup & Fresh Mulch',
    location: 'Northeast Philadelphia',
    beforeEmoji: '🍂',
    afterEmoji: '🌿',
  },
  {
    title: 'Lawn Mow & Edge',
    location: 'Surrounding neighborhood',
    beforeEmoji: '🌾',
    afterEmoji: '🌱',
  },
]

export default function BeforeAfter() {
  return (
    <section className="ba-section" id="our-work">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__label">Our Work</span>
          <h2 className="section__title">Before &amp; After</h2>
          <p className="section__desc">
            Real results from real yards in the neighborhood. Photos coming soon — check back for updates.
          </p>
        </div>
        <div className="ba__grid">
          {PROJECTS.map(p => (
            <div className="ba__card" key={p.title}>
              <div className="ba__images">
                <div className="ba__side ba__side--before">
                  <span className="ba__label">Before</span>
                  {p.beforeEmoji}
                </div>
                <div className="ba__side ba__side--after">
                  <span className="ba__label">After</span>
                  {p.afterEmoji}
                </div>
                <div className="ba__divider">→</div>
              </div>
              <div className="ba__caption">
                <h4>{p.title}</h4>
                <p>{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
