import { FaStar, FaGoogle } from 'react-icons/fa'

const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Northeast Philadelphia',
    initials: 'SM',
    text: "These guys are fantastic. Showed up right on time, did a thorough spring cleanup, and my yard looks better than it has in years. Definitely using them all season.",
    stars: 5,
  },
  {
    name: 'James T.',
    location: 'Nearby',
    initials: 'JT',
    text: "Hired them for weekly mowing and they've been incredibly reliable. The edges look crisp every time and the pricing is very fair for the quality of work.",
    stars: 5,
  },
  {
    name: 'Linda R.',
    location: 'Northeast Philadelphia',
    initials: 'LR',
    text: "They redid all my garden beds with fresh mulch — what a difference. Super friendly and easy to communicate with. Highly recommend to anyone in the area.",
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__label">Testimonials</span>
          <h2 className="section__title">What Neighbors Are Saying</h2>
          <p className="section__desc">
            Don't just take our word for it — here's what local homeowners have to say.
          </p>
        </div>
        <div className="reviews__grid">
          {REVIEWS.map(r => (
            <div className="review-card" key={r.name}>
              <div className="review-card__stars">
                {Array.from({ length: r.stars }, (_, i) => <FaStar key={i} />)}
              </div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <div className="review-card__avatar">{r.initials}</div>
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__location">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews__cta">
          <FaGoogle />
          <span>Find us on Google to leave a review</span>
        </div>
      </div>
    </section>
  )
}
