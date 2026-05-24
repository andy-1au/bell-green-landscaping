import lawn1 from '../assets/before_and_after_lawn1.png'
import lawn2 from '../assets/before_and_after_lawn2.png'
import lawn3 from '../assets/before_and_after_lawn3.png'
import lawn4 from '../assets/before_and_after_lawn4.png'
import lawn5 from '../assets/before_and_after_lawn5.png'
import lawn6 from '../assets/before_and_after_lawn6.png'

const PROJECTS = [
  {
    title: 'Front Bed Cleanup & Fresh Mulch',
    location: 'Fox Chase',
    image: lawn1,
  },
  {
    title: 'Walkway Cleanup & Lawn Refresh',
    location: 'Mayfair',
    image: lawn2,
  },
  {
    title: 'Garden Bed Reset & Seasonal Color',
    location: 'Oxford Circle',
    image: lawn3,
  },
  {
    title: 'Mow, Edge & Shrub Cleanup',
    location: 'Torresdale',
    image: lawn4,
  },
  {
    title: 'Shade Yard Cleanup & Bed Edging',
    location: 'Castor Gardens',
    image: lawn5,
  },
  {
    title: 'Shrub Bed Cleanup & Black Mulch',
    location: 'Tacony',
    image: lawn6,
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
            Real yard cleanups, fresh edges, trimmed beds, and healthier curb appeal
            across Northeast Philadelphia and surrounding neighborhoods.
          </p>
        </div>
        <div className="ba__grid">
          {PROJECTS.map(project => (
            <div className="ba__card" key={project.title}>
              <figure className="ba__photo">
                <img
                  src={project.image}
                  alt={`${project.title} before and after`}
                  loading="lazy"
                />
                <figcaption className="ba__photo-label ba__photo-label--before">
                  Before
                </figcaption>
                <figcaption className="ba__photo-label ba__photo-label--after">
                  After
                </figcaption>
              </figure>
              <div className="ba__caption">
                <h4>{project.title}</h4>
                <p>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
