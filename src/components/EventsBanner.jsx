import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PlayCircle } from 'lucide-react';

const EventsBanner = () => {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
            borderRadius: 'var(--radius-xl)',
            padding: '4rem 3rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.08 }} />
          
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.15)', 
              padding: '0.75rem', 
              borderRadius: '50%', 
              marginBottom: '1.25rem',
              color: 'white'
            }}>
              <Calendar size={32} />
            </div>
            
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', marginBottom: '0.75rem', lineHeight: 1.2, color: 'white', letterSpacing: '-0.5px' }}>
              Stay Connected with <br /> Upcoming Events
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '550px', marginBottom: '2rem' }}>
              From cross-cultural workshops to massive community exchange programs, immerse yourself in experiences that celebrate heritage and belonging.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '0.85rem 1.75rem', background: 'white', color: 'var(--primary-dark)' }}>
                View Master Calendar
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                padding: '0.85rem 1.75rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <PlayCircle size={18} /> Watch Past Highlights
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsBanner;
