import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Community Member",
    content: "Hello Zindagi has been my anchor since moving to Australia. The events they organize not only help us stay connected to our roots but also build bridges with the wider Australian community. It truly gives us happiness and hope."
  },
  {
    name: "Dr. Arjun Patel",
    role: "Local Volunteer",
    content: "The impact this organization makes through their cross-cultural integration programs is astounding. Getting to share our stories on the Hello Zindagi Radio Show amplifies voices that often go unheard."
  },
  {
    name: "Sarah Jenkins",
    role: "Event Partner",
    content: "Collaborating with Hello Zindagi has been an absolute pleasure. Their dedication to fostering belonging, resilience, and cultural pride is visible in every single initiative they run. A truly inspiring platform!"
  }
];

const Testimonials = () => {
  return (
    <section style={{ padding: '7rem 0', background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
              display: 'inline-block',
              marginBottom: '1rem'
            }}
          >
            Community Voices
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2, letterSpacing: '-1px' }}
          >
            Impact Stories from <span className="gradient-text">Our Members</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Hear from those whose lives have been touched by our commitment to humanity, happiness, and hope.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
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
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              className="testimonial-card"
            >
              <Quote size={32} color="var(--primary)" style={{ opacity: 0.15, position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
              
              <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', flexGrow: 1, position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
                "{testimonial.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.15rem', fontWeight: 600 }}>{testimonial.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 500 }}>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
