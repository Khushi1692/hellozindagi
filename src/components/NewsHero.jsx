import React from 'react';
import { motion } from 'framer-motion';

const NewsHero = () => {
  return (
    <section style={{ 
      padding: '6rem 0 3rem 0',
      background: 'var(--bg-main)',
      position: 'relative'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
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
          Updates & Announcements
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-1px', color: 'var(--text-main)' }}
        >
          The Latest Pulse of <br />
          <span className="gradient-text">Our Community.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: 1.7 }}
        >
          Stay informed about upcoming cross-cultural festivals, community milestones, radio highlights, and stories that matter most to us.
        </motion.p>
        
        <div style={{
          height: '1px',
          width: '100%',
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)'
        }} />
      </div>
    </section>
  );
};

export default NewsHero;
