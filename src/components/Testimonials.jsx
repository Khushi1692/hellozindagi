import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr Rethika Ravi",
    role: "Guest",
    content: "It was a wonderful experience for my dad and myself to be part of Hello Zindagi! It’s a powerful medium to get together people from diverse backgrounds to share their perspectives and experiences with the wider community! Wishing Hello Zindagi the very best in the great work that they are doing and also for all their future endeavours! "
  },
  {
    name: "Inderjit Jasal",
    role: "President ISCA",
    content: "Hello Zindagi connects with wider indian community across all ages and brings breath of fresh air into homes for young n old to enjoy the variety of stories shared by the dedicated Hello Zindagi team.Keep up with good work."
  },
  // {
  //   name: "Saleha Singh",
  //   role: "Guest",
  //   content: "I had the pleasure of being a guest on Hello Zindagi in 2025. Hosts created a welcoming space and made the conversation easy and natural, while staying on track. The hour flew by, feeling more like a friendly coffee catch up filled with stories, laughter and reflection than a radio interview."
  // },
  {
    name: "Christina Chia",
    role: "Non-Executive Director | Executive| Leader | Community Advocate",
    content: "Working with Ruchi Sharma was an absolute delight. She has a natural gift for creating conversations that are warm, engaging and insightful. During my interview, she brought out the joy and authenticity in the discussion while ensuring the conversation was meaningful for the audience. Ruchi's work in multicultural media truly uplifts communities and creates a platform where diverse voices are celebrated."
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
