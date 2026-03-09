import React from 'react';
import { Play, Volume2, Mic2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--nav-height)',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)'
    }}>
      {/* Decorative Blur Spheres */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'var(--primary)',
        filter: 'blur(150px)',
        opacity: 0.1,
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'var(--secondary)',
        filter: 'blur(150px)',
        opacity: 0.1,
        zIndex: -1
      }} />

      <div className="container hero-grid">
        <motion.div
          className="hero-text-top"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ gridArea: 'top' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '100px',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <span style={{ marginRight: '8px' }}>✨</span>
            Empowering the Australian Indian Community
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-2px'
          }}>
            Human, <br />
            Happiness, <br />
            <span className="gradient-text">Hope.</span>
          </h1>
        </motion.div>

        <motion.div
          className="hero-text-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ gridArea: 'bottom' }}
        >
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '3rem',
            maxWidth: '540px',
            lineHeight: 1.7
          }}>
            Connecting communities through shared experiences, dialogue, and cultural pride. Hello Zindagi is your bridge between heritage and home.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'inherit' }} className="hero-btn-container">
            <Link to="/news" className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>
              Discover Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           style={{ position: 'relative', gridArea: 'image' }}
           className="hero-image-container"
        >
          {/* Decorative Visual Mockup */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '40px',
            position: 'relative',
            zIndex: 1,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '450px',
              borderRadius: '24px',
              background: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000') center/cover`,
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
               <div style={{
                 position: 'absolute',
                 inset: 0,
                 background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)'
               }} />
               
               <div style={{ position: 'relative', zIndex: 2, textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {['Resilience', 'Culture', 'Dialogue'].map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'white'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'white', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                    Building an Inclusive Australia
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                    Fostering belonging for generations to come.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 
            "top image"
            "bottom image";
          gap: 1rem 4rem;
          align-items: center;
        }
        .hero-text-top { align-self: flex-end; }
        .hero-text-bottom { align-self: flex-start; }

        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .hero-image-container { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
