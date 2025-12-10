// src/pages/Features.tsx  (or put inside App.tsx as a separate route)
import React from 'react';
import './features.css';

const Features = () => {
  const features = [
    {
      icon: "Calendar",
      title: "Real-Time Academic Scheduler",
      desc: "Live class timetables, room bookings, exam schedules, faculty availability — all updated instantly across web and mobile.",
      highlight: true
    },
    {
      icon: "Folder",
      title: "Project Showcase & Collaboration",
      desc: "Students can upload projects, research papers, and capstones. Others can explore, star, comment, and connect with creators."
    },
    {
      icon: "Megaphone",
      title: "Institute-Wide Announcements",
      desc: "Push critical updates, event invites, deadlines directly to every student's feed and email. 100% delivery guaranteed."
    },
    {
      icon: "Users",
      title: "Smart Academic Networking",
      desc: "Connect with peers by skills, courses, clubs, or interests. Find project partners, mentors, seniors, and alumni easily."
    },
    {
      icon: "BarChart",
      title: "Powerful Admin & Faculty Dashboard",
      desc: "Manage attendance, generate reports, assign mentors, control permissions — everything in one clean interface."
    },
    {
      icon: "Bell",
      title: "Smart Notifications & Reminders",
      desc: "Never miss a class, assignment deadline, or club meeting. Personalized reminders across devices."
    },
    {
      icon: "MessageSquare",
      title: "In-App Messaging & Groups",
      desc: "Chat with classmates, create study groups, discuss projects — all inside a safe, institute-only environment."
    },
    {
      icon: "Lock",
      title: "Enterprise-Grade Privacy & Security",
      desc: "Institute-only access. Data encrypted at rest and in transit. GDPR & FERPA compliant."
    }
  ];

  return (
    <>
      {/* Hero Section for Features Page */}
      <section className="features-hero">
        <div className="container">
          <h1>All the Tools Your Campus Needs</h1>
          <p className="subtitle">
            InstiWise combines academic management, project collaboration, and social connectivity into one powerful platform.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="features-main">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-item ${feature.highlight ? 'highlight' : ''}`}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="features-cta">
        <div className="container">
          <h2>Ready to Bring Your Campus Together?</h2>
          <p>Join over 200 institutions already transforming with InstiWise</p>
          <div className="cta-buttons">
            <button className="btn-large btn-primary">Start Free 30-Day Trial</button>
            <button className="btn-large btn-outline-white">Request a Demo</button>
          </div>
          <p className="no-cc">No credit card needed • Full access instantly</p>
        </div>
      </section>
    </>
  );
};

export default Features;