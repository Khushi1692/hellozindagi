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
    <section style={{ padding: '8rem 0', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gradient orb */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'var(--primary)',
        filter: 'blur(200px)',
        opacity: 0.05,
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h6 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}
          >
            Community Voices
          </motion.h6>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}
          >
            Impact Stories from <span className="gradient-text">Our Members</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
          >
            Hear from those whose lives have been touched by our commitment to humanity, happiness, and hope.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {testimonials.map((testimonial, index) => (
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
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <Quote size={40} color="var(--primary)" style={{ opacity: 0.2, position: 'absolute', top: '2rem', right: '2rem' }} />
              
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', flexGrow: 1, position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
                "{testimonial.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '15px', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.2rem'
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>{testimonial.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
