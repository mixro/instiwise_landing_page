import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <section className="hero">
            <div className="hero-content">
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
              { name: "Dr. Sarah Chen", image: "https://www.ahdubai.com//uploads/doctors/1618740851SarahFrancis.webp", role: "Dean of Engineering, MIT", text: "InstiWise reduced our administrative workload by 70% and increased student engagement dramatically." },
              { name: "Amani Johnson", image: "https://media.istockphoto.com/id/1785382011/photo/campus-student-and-portrait-of-black-man-at-college-building-academy-and-school-for-education.jpg?s=612x612&w=0&k=20&c=BDhGY9HWCie8f22RASEIGBGaTMozUu9Zxm1o-X-tXFg=", role: "Final Year CSE Student", text: "Finding project partners and staying updated has never been easier. This is the campus app we always needed!" },
              { name: "Prof. Aisha Khan", image: "https://dsi-africa.org/system/files/webform/ds_i_africa_3rd_meeting_particip/1828/16_headshot_profile_picture.JPG", role: "Head of Department", text: "Announcements reach 100% of students instantly. No more 'I didn’t know' excuses!" }
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="quote">"{t.text}"</p>
                <div className="author">
                  <div className="author_image">
                    <img src={t.image} alt="PR" />
                  </div>
                  <div className="author_details">
                    <p>{t.name}</p>
                    <p>{t.role}</p>
                  </div>
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
    </div>
  )
}

export default Home