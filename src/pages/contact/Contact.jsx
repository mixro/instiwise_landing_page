import { CalendarMonth, Call, Email } from '@mui/icons-material';
import './contact.css';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Let's Bring Your Campus on InstiWise</h1>
          <p className="subtitle">
            Whether you have questions, want a personalized demo, or are ready to get started — our team is here to help 24×7.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="contact-main">
        <div className="container contact-grid">
          
          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Request a Free Demo</h2>
            <p>Fill the form and we’ll reach out within 1 hour (usually under 10 minutes!)</p>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name *" required />
                <input type="email" placeholder="Official Email *" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Institute / College Name *" required />
                <input type="tel" placeholder="Phone Number (with country code)" />
              </div>
              <input type="text" placeholder="Designation (e.g. Principal, HOD, IT Head)" />
              <select defaultValue="">
                <option value="" disabled>Approximate Student Strength</option>
                <option>&lt; 500</option>
                <option>500 – 2,000</option>
                <option>2,000 – 10,000</option>
                <option>10,000 – 30,000</option>
                <option>30,000+</option>
              </select>
              <textarea rows={5} placeholder="How can we help you? (Optional)"></textarea>

              <button type="submit" className="btn-submit">
                Request Demo – It's Free
              </button>
              <p className="form-note">No credit card • Instant access after call</p>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="contact-info">
            <h2>Talk to Us Directly</h2>

            <div className="contact-options">
              <div className="contact-option">
                <div className="icon"><Call sx={{fontSize: 40}} /></div>
                <div>
                  <strong>Call or WhatsApp</strong>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                  <small>Mon–Sat, 9 AM – 9 PM IST</small>
                </div>
              </div>

              <div className="contact-option">
                <div className="icon"><Email sx={{fontSize: 40}} /></div>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:hello@instiwise.app">hello@instiwise.app</a>
                  <small>Typically reply in &lt; 5 minutes</small>
                </div>
              </div>

              <div className="contact-option">
                <div className="icon"><CalendarMonth sx={{fontSize: 40}} /></div>
                <div>
                  <strong>Book a 15-min Call</strong>
                  <a href="https://calendly.com/instiwise/demo" target="_blank" rel="noopener">
                    Choose your slot → 
                  </a>
                </div>
              </div>
            </div>

            <div className="quick-support">
              <h3>Live Chat Support</h3>
              <p>Chat with our team right now</p>
              <button className="btn-chat">Start Chat</button>
            </div>

            <div className="office-info">
              <h3>India Office</h3>
              <p>
                InstiWise Technologies Pvt Ltd<br />
                Manyata Tech Park, Nagavara<br />
                Bangalore, Karnataka 560045<br />
                CIN: U74999KA2023PTC174321
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              "Is InstiWise really free to start?",
              "How long does it take to set up?",
              "Do you integrate with existing ERP/MIS?",
              "Is my institute data secure and private?",
              "Can we customize the platform with our branding?",
              "What if we have multiple campuses?"
            ].map((q, i) => (
              <div key={i} className="faq-item">
                <strong>{q}</strong>
                <span>→</span>
              </div>
            ))}
          </div>
          <a href="/faq" className="faq-link">View all FAQs →</a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="features-cta">
        <div className="container">
          <h2>Don’t Wait — Your Smart Campus Starts Today</h2>
          <p>Over 200 institutions went live this month alone.</p>
          <button className="btn-large bg-black">Start Free Trial Instantly</button>
        </div>
      </section>
    </>
  );
};

export default Contact;