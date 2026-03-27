import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--nav-height)',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-main)'
    }}>
      {/* Subtle decorative background */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-15%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
        opacity: 0.5,
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
        opacity: 0.3,
        zIndex: 0
      }} />

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="hero-text-top"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ gridArea: 'top' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.4rem 1rem',
            background: 'var(--primary-light)',
            borderRadius: '100px',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            border: '1px solid rgba(5, 150, 105, 0.15)'
          }}>
            <span style={{ marginRight: '6px' }}>✨</span>
            Empowering the Australian Indian Community
          </div>

          <h1 style={{
            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
            lineHeight: 1.08,
            marginBottom: '1.5rem',
            letterSpacing: '-2px',
            color: 'var(--text-main)'
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
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ gridArea: 'bottom' }}
        >
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-body)',
            marginBottom: '2.5rem',
            maxWidth: '500px',
            lineHeight: 1.75
          }}>
            Connecting communities through shared experiences, dialogue, and cultural pride. Hello Zindagi is your bridge between heritage and home.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'inherit' }} className="hero-btn-container">
            <Link to="/news" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Discover Our Work <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem', textDecoration: 'none' }}>
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.25 }}
           style={{ position: 'relative', gridArea: 'image', marginTop: '2.5rem' }}
           className="hero-image-container"
        >
          <div style={{
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border)'
          }}>
            <div style={{
              width: '100%',
              height: '480px',
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
                 background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)'
               }} />
               
               <div style={{ position: 'relative', zIndex: 2, textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    {['Resilience', 'Culture', 'Dialogue'].map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '100px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'white',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'white', lineHeight: 1.2, marginBottom: '0.3rem', fontWeight: 700 }}>
                    Building an Inclusive Australia
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
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
          gap: 0.5rem 4rem;
          align-items: center;
        }
        .hero-text-top { align-self: flex-end; }
        .hero-text-bottom { align-self: flex-start; }

        @media (max-width: 968px) {
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            grid-template-areas: 
              "top"
              "bottom"
              "image" !important;
            gap: 2rem !important; 
            text-align: center;
          }
          .hero-text-top {
            margin-top: 2rem;
          }
          .hero-btn-container {
            justify-content: center !important;
            flex-wrap: wrap;
          }
          .hero-text-bottom p {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
