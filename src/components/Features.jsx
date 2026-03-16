import React from 'react';
import { motion } from 'framer-motion';
import { Radio, HeartHandshake, Mic2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Radio,
    title: "Hello Zindagi Radio Show",
    desc: "Amplifying diverse voices and stories from our vibrant community through engaging radio broadcasts.",
    color: "#059669",
    bg: "#d1fae5"
  },
  {
    icon: HeartHandshake,
    title: "Cross-Cultural Integration",
    desc: "Fostering understanding and social cohesion via community-driven events and collaborative experiences.",
    color: "#4f46e5",
    bg: "#e0e7ff"
  },
  {
    icon: Mic2,
    title: "Creative Platform",
    desc: "Nurturing creativity, expression, and talent via events, workshops, and our cultural exchange program.",
    color: "#ea580c",
    bg: "#ffedd5"
  }
];

const Features = () => {
  return (
    <section style={{ padding: '7rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: 'var(--primary)', 
              fontSize: '0.8rem',
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              fontWeight: 600,
              background: 'var(--primary-light)',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '1rem', maxWidth: '700px', lineHeight: 1.2, letterSpacing: '-1px' }}
          >
            Delivering Impact Through <span className="gradient-text">Three Verticals</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}
          >
            Supporting individuals and families of Indian origin in their journey of assimilation into Australian society.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--bg-card)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              className="feature-card"
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                background: feat.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: feat.color
              }}>
                <feat.icon size={28} />
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-main)', fontWeight: 700, letterSpacing: '-0.3px' }}>
                {feat.title}
              </h3>
              
              <p style={{ color: 'var(--text-body)', fontWeight: 400, lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                {feat.desc}
              </p>

              <Link to="/news" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: feat.color, 
                fontWeight: 600,
                fontSize: '0.95rem',
                alignSelf: 'flex-start',
                marginTop: 'auto',
                transition: 'gap 0.2s ease'
              }}
              className="feature-link"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
          border-color: var(--border);
        }
        .feature-card:hover .feature-link {
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default Features;
