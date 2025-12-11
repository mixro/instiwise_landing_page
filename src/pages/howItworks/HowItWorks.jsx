import './howItWorks.css';

const HowItWorks = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="how-hero">
        <div className="container">
          <h1>Get Your Campus Live in <span className="highlight">3 Simple Steps</span></h1>
          <p className="subtitle">
            From signup to full campus connectivity — most institutions are fully operational in under 24 hours.
          </p>
        </div>
      </section>

      {/* Main 3-Step Process */}
      <section className="steps-section">
        <div className="container">
          <div className="steps-container">

            {/* Step 1 */}
            <div className="step-card left">
              <div className="step-number">1</div>
              <div className="step-content">
                <h2>Create Your Institute Account</h2>
                <p>
                  Admin or IT head signs up with official institute email. 
                  Verify domain in 2 minutes → instant access to admin dashboard.
                </p>
                <ul className="check-list">
                  <li>Free forever for up to 100 users</li>
                  <li>No credit card required</li>
                  <li>Custom subdomain: yourcollege.instiwise.app</li>
                </ul>
              </div>
              <div className="step-image">
                <div className="mockup-screen step1"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card right">
              <div className="step-number">2</div>
              <div className="step-content">
                <h2>Import Students, Faculty & Courses</h2>
                <p>
                  Upload a simple Excel/CSV or connect with your existing MIS/ERP system.
                  We auto-create profiles, classes, and departments.
                </p>
                <ul className="check-list">
                  <li>One-click CSV → 10,000+ users in  5 min</li>
                  <li>Supports SIS, ERP, LDAP, Google Workspace sync</li>
                  <li>Smart duplicate detection & role assignment</li>
                </ul>
              </div>
              <div className="step-image">
                <div className="mockup-screen step2"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card left">
              <div className="step-number">3</div>
              <div className="step-content">
                <h2>Launch & Invite Everyone</h2>
                <p>
                  Share your unique institute link or QR code. 
                  Students & staff log in instantly with institute email or SSO.
                </p>
                <ul className="check-list">
                  <li>Web + iOS + Android apps ready</li>
                  <li>Auto welcome email & onboarding tour</li>
                  <li>Live in minutes — no training needed</li>
                </ul>
              </div>
              <div className="step-image">
                <div className="mockup-screen step3"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="timeline">
        <div className="container">
          <h2>Typical Onboarding Timeline</h2>
          <div className="timeline-items">
            <div className="tl-item">
              <div className="tl-dot"></div>
              <strong>Day 1</strong>: Admin signs up & imports data
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div>
              <strong>Day 2</strong>: Customize branding & permissions
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div>
              <strong>Day 3</strong>: Full campus launch — everyone connected!
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="features-cta">
        <div className="container">
          <h2>Ready to Launch Your Smart Campus Today?</h2>
          <p>Join 200+ institutions that went live in under a week</p>
          <div className="cta-actions">
            <button className="btn-large bg-black">Start Free Instantly</button>
            <button className="btn-large btn-outline-black">Book a 15-min Demo</button>
          </div>
          <p className="guarantee">30-day free trial • No setup fees • Cancel anytime</p>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;