// src/pages/Testimonials.tsx
import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. Priya Malhotra",
      role: "Principal, Delhi Technological University",
      institution: "45,000+ Students",
      text: "InstiWise transformed how we communicate with students. Announcements now reach 100% instantly — no more missed deadlines or events. Our administrative workload dropped by 68% in the first semester.",
      rating: 5,
      avatar: "female"
    },
    {
      name: "Arjun Patel",
      role: "Final Year CSE Student",
      institution: "IIT Bombay",
      text: "Finding project teammates used to take weeks. With InstiWise, I connected with 4 amazing developers in 2 days. We built an award-winning app together. This platform is a game-changer!",
      rating: 5,
      avatar: "male",
      featured: true
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Dean of Academics",
      institution: "VIT Vellore",
      text: "The real-time scheduler alone saved us ₹12 lakh annually in manual coordination. Faculty love the dashboard, and students actually use the app daily — adoption rate is 94%!",
      rating: 5,
      avatar: "male"
    },
    {
      name: "Ayesha Siddiqui",
      role: "President, Student Council",
      institution: "Jadavpur University",
      text: "Club events used to have 20–30 attendees. After using InstiWise announcements and RSVPs, our last tech fest had 1,200+ registrations. It's now the heartbeat of campus life.",
      rating: 5,
      avatar: "female"
    },
    {
      name: "Admin Team",
      role: "SRM Institute of Science & Technology",
      institution: "60,000+ Users",
      text: "We migrated from a legacy ERP that cost ₹45 lakh/year. InstiWise does everything better at 1/5th the cost. Support team responds in minutes, not days, not weeks.",
      rating: 5,
      avatar: "team"
    },
    {
      name: "Neha Sharma",
      role: "Alumna (2023 Batch)",
      institution: "NIT Trichy",
      text: "Even after graduating, I still use InstiWise to mentor juniors and stay connected with professors. The alumni network feature is brilliant!",
      rating: 5,
      avatar: "female"
    }
  ];

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
              <div>
                <strong>Arjun Patel</strong>
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
      <section className="testimonials-cta">
        <div className="container">
          <h2>Ready to Write Your Own Success Story?</h2>
          <p>Start free today — most campuses are fully live within 48 hours</p>
          <div className="cta-buttons">
            <button className="btn-large btn-primary">Start 30-Day Free Trial</button>
            <button className="btn-large btn-outline-white">Talk to Our Team</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;