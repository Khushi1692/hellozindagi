import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr Rethika Ravi",
    role: "Guest",
    content: "It was a wonderful experience for my dad and myself to be part of Hello Zindagi! It’s a powerful medium to get together people from diverse backgrounds to share their perspectives and experiences with the wider community! Wishing Hello Zindagi the very best in the great work that they are doing and also for all their future endeavours! "
  },
  {
    name: "RAVI SIVARAM",
    role: "Guest",
    content: "Ruchi makes the broadcasts very significant and remarkable with ease and professional style sandwiched with personal touch.She demonstrated perfect bonding during the entire interview making guests like me relaxed and natural.The innovation she brings in the rapid Q&A session was really enjoyable.I wish her and Hello Zindagi all the very best."
  },
  {
    name: "Saleha Singh",
    role: "Guest",
    content: "I had the pleasure of being a guest on Hello Zindagi in 2025. Hosts created a welcoming space and made the conversation easy and natural, while staying on track. The hour flew by, feeling more like a friendly coffee catch up filled with stories, laughter and reflection than a radio interview."
  },
  {
    name: "Inderjit Jasal",
    role: "President ISCA",
    content: "Hello Zindagi connects with wider indian community across all ages and brings breath of fresh air into homes for young n old to enjoy the variety of stories shared by the dedicated Hello Zindagi team. Keep up with good work."
  },
  {
    name: "Christina Chia",
    role: "Non-Executive Director | Executive| Leader | Community Advocate",
    content: "Working with Ruchi Sharma was an absolute delight. She has a natural gift for creating conversations that are warm, engaging and insightful. During my interview, she brought out the joy and authenticity in the discussion while ensuring the conversation was meaningful for the audience. Ruchi's work in multicultural media truly uplifts communities and creates a platform where diverse voices are celebrated."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Rotate every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[index];

  return (
    <section style={{ padding: '7rem 0', background: 'var(--bg-section)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

        <div style={{ position: 'relative', width: '100%', maxWidth: '850px', height: '420px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                padding: '3rem 2.5rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                width: '100%',
                height: '100%',
                justifyContent: 'center'
              }}
              className="single-testimonial-card"
            >
              <Quote 
                size={80} 
                color="var(--primary)" 
                style={{ 
                  opacity: 0.05, 
                  position: 'absolute', 
                  top: '1.5rem', 
                  left: '2rem',
                  pointerEvents: 'none'
                }} 
              />
              
              <p style={{ 
                color: 'var(--text-body)', 
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', 
                lineHeight: 1.6, 
                marginBottom: '2rem', 
                fontStyle: 'italic',
                fontWeight: 400,
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                "{currentTestimonial.content}"
              </p>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '0.75rem', 
                marginTop: '1rem'
              }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.2rem'
                }}>
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.1rem', fontWeight: 700 }}>{currentTestimonial.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{currentTestimonial.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators / Dots */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.6rem', 
          marginTop: '3.5rem' 
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === index ? 'var(--primary)' : 'var(--border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
