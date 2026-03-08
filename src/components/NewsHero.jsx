import React from 'react';
import { motion } from 'framer-motion';

const NewsHero = () => {
  return (
    <section style={{ 
      padding: '8rem 0 4rem 0',
      background: 'var(--bg-main)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1200px',
        height: '400px',
        background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.h6 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: 'var(--primary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 700 }}
        >
          Updates & Announcements
        </motion.h6>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}
        >
          The Latest Pulse of <br />
          <span className="gradient-text">Our Community.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: 1.7 }}
        >
          Stay informed about upcoming cross-cultural festivals, community milestones, radio highlights, and stories that matter most to us.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            height: '1px',
            width: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
          }}
        />
      </div>
    </section>
  );
};

export default NewsHero;
