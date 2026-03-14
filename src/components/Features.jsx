import React from 'react';
import { motion } from 'framer-motion';
import { Radio, HeartHandshake, Mic2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Radio,
    title: "Hello Zindagi Radio Show",
    desc: "Amplifying diverse voices and stories from our vibrant community through engaging radio broadcasts.",
    color: "var(--primary)"
  },
  {
    icon: HeartHandshake,
    title: "Cross-Cultural Integration",
    desc: "Fostering understanding and social cohesion via community-driven events and collaborative experiences.",
    color: "var(--secondary)"
  },
  {
    icon: Mic2,
    title: "Creative Platform",
    desc: "Nurturing creativity, expression, and talent via events, workshops, and our cultural exchange program.",
    color: "var(--accent)"
  }
];

const Features = () => {
  return (
    <section id="features" style={{ padding: '8rem 0', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Blur Backgrounds */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'var(--primary)',
        filter: 'blur(150px)',
        opacity: 0.05,
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h6 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}
          >
            What We Do
          </motion.h6>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.2 }}
          >
            Delivering Impact Through <span className="gradient-text">Three Interconnected Verticals</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '700px' }}
          >
            Hello Zindagi Inc is dedicated to supporting individuals and families of Indian origin in their journey of assimilation into Australian society.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--bg-card)',
                padding: '3rem 2.5rem',
                borderRadius: '30px',
                border: '1px solid var(--border-glass)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 'var(--shadow-lg)'
              }}
              whileHover={{ 
                y: -10, 
                borderColor: feat.color,
                boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${feat.color}20` 
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${feat.color}30, transparent)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                color: feat.color,
                border: `1px solid ${feat.color}40`
              }}>
                <feat.icon size={32} />
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-main)', fontWeight: 700 }}>
                {feat.title}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.7, marginBottom: '2.5rem', flexGrow: 1 }}>
                {feat.desc}
              </p>

              <Link to="/news" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: feat.color, 
                fontWeight: 600,
                fontSize: '1.05rem',
                alignSelf: 'flex-start',
                marginTop: 'auto'
              }}
              onMouseEnter={(e) => e.target.style.opacity = 0.8}
              onMouseLeave={(e) => e.target.style.opacity = 1}
              >
                Learn More <ArrowRight size={18} />
              </Link>

              {/* Decorative accent line */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '10%', 
                width: '80%', 
                height: '4px', 
                background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)`,
                opacity: 0.5 
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
