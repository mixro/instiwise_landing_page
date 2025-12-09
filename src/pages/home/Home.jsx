import Topbar from "../../components/topbar/Topbar"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <section className="hero">
            <div className="container hero-content">
                <h1>
                    The <span className="highlight">Smart</span> Way to Connect Your Campus
                </h1>
                <p className="hero-subtitle">
                    InstiWise is an intelligent institute management and collaboration platform that brings students, faculty, and staff together with real-time schedules, project sharing, announcements, and meaningful academic networking.
                </p>
                <div className="hero-actions">
                    <button className="btn-large btn-primary">Start Free Trial</button>
                    <button className="btn-large btn-outline">Watch Demo</button>
                </div>
                <div className="trusted-by">
                    <p>Trusted by 200+ leading institutions worldwide</p>
                </div>
                </div>
                <div className="hero-image">
                <div className="mockup"></div>
            </div>
        </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Everything Your Campus Needs</h2>
          <div className="features-grid">
            {[
              { icon: "📚", title: "Real-Time Schedules", desc: "Instant access to classes, rooms, exams & faculty availability" },
              { icon: "🚀", title: "Project Showcase", desc: "Share & explore academic projects, research papers & capstones" },
              { icon: "📢", title: "Institute Announcements", desc: "Never miss important news, events or deadlines" },
              { icon: "👥", title: "Smart Networking", desc: "Connect with peers, seniors & alumni based on skills & interests" },
              { icon: "📊", title: "Admin Dashboard", desc: "Powerful tools for faculty & admin to manage everything" },
              { icon: "🔒", title: "Secure & Private", desc: "Enterprise-grade security with institute-only access" }
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Get Started in Minutes</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up Your Institute</h3>
              <p>Admin creates institute account in under 5 minutes</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Import Students & Faculty</h3>
              <p>Upload CSV or sync with existing system</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Go Live!</h3>
              <p>Everyone gets instant access via web & mobile apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Loved by Students & Faculty</h2>
          <div className="testimonial-grid">
            {[
              { name: "Dr. Sarah Chen", role: "Dean of Engineering, MIT", text: "InstiWise reduced our administrative workload by 70% and increased student engagement dramatically." },
              { name: "Rahul Sharma", role: "Final Year CSE Student", text: "Finding project partners and staying updated has never been easier. This is the campus app we always needed!" },
              { name: "Prof. Aisha Khan", role: "Head of Department", text: "Announcements reach 100% of students instantly. No more 'I didn’t know' excuses!" }
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="quote">"{t.text}"</p>
                <div className="author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-final">
        <div className="container">
          <h2>Ready to Transform Your Campus?</h2>
          <p>Join 200+ institutions already using InstiWise</p>
          <button className="btn-large btn-primary">Start Your Free 30-Day Trial</button>
          <p className="no-cc">No credit card required • Setup in minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="inner-square"></div>
            </div>
            <span>INSTIWISE</span>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 InstiWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home