import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PlayCircle } from 'lucide-react';

const EventsBanner = () => {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(99, 102, 241, 0.15))',
            borderRadius: '40px',
            padding: '4rem 3rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--border-glass)'
          }}
        >
          {/* Background Elements */}
          <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.2 }} />
          
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              padding: '1rem', 
              borderRadius: '50%', 
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
              color: 'white'
            }}>
              <Calendar size={40} />
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Stay Connected with <br /> <span className="gradient-text">Upcoming Events</span>
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              From cross-cultural workshops to massive community exchange programs, immerse yourself in experiences that celebrate heritage and belonging.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '1rem 2rem' }}>
                View Master Calendar
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <PlayCircle size={20} /> Watch Past Highlights
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsBanner;
