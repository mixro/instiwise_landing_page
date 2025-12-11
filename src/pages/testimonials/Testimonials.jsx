import { reviews } from '../../static/dummyData';
import './testimonials.css';

const Testimonials = () => {

  return (
    <>
      {/* Hero */}
      <section className="testimonials-hero">
        <div className="container">
          <h1>Trusted by Institutions Across India</h1>
          <p className="subtitle">
            Join <strong>200+ leading colleges and universities</strong> already using InstiWise to build smarter, more connected campuses.
          </p>
          <div className="stats">
            <div className="stat">
              <h3>200+</h3>
              <p>Institutions</p>
            </div>
            <div className="stat">
              <h3>1.2M+</h3>
              <p>Active Students</p>
            </div>
            <div className="stat">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial">
        <div className="container">
          <div className="featured-card">
            <div className="quote-mark">“</div>
            <p className="featured-quote">
              Finding project teammates used to take weeks. With InstiWise, I connected with 4 amazing developers in 2 days. We built an award-winning app together. This platform is a game-changer!
            </p>
            <div className="author">
              <div className="avatar large"></div>
              <div className='author-details'>
                <p>Arjun Patel</p>
                <p>Final Year CSE • IIT Bombay</p>
              </div>
            </div>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="all-testimonials">
        <div className="container">
          <h2>What Campus Leaders Are Saying</h2>
          <div className="testimonials-grid">
            {reviews.map((review, i) => (
              <div key={i} className={`testimonial-card ${review.featured ? 'hidden' : ''}`}>
                <div className="stars">{'★'.repeat(review.rating)}</div>
                <p className="quote">"{review.text}"</p>
                <div className="author-info">
                  <div className={`avatar ${review.avatar}`}></div>
                  <div>
                    <strong>{review.name}</strong>
                    <p>{review.role}<br /><em>{review.institution}</em></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta">
        <div className="container">
          <h2>Ready to Write Your Own Success Story?</h2>
          <p>Start free today — most campuses are fully live within 48 hours</p>
          <div className="cta-buttons">
            <button className="btn-large bg-black">Start 30-Day Free Trial</button>
            <button className="btn-large btn-outline-black">Talk to Our Team</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;