import React from 'react';
import { Play, Volume2, Mic2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '100px',
            color: '#ef4444',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <span className="live-indicator"></span>
            LIVE: THE MORNING VIBE WITH DJ SAM
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            lineHeight: 1,
            marginBottom: '1.5rem',
            letterSpacing: '-2px'
          }}>
            The Voice of <br />
            <span className="gradient-text">The Community.</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            maxWidth: '540px'
          }}>
            Streaming local stories, world-class music, and community voices across Australia. Your daily dose of inspiration and entertainment.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Play fill="white" size={20} /> Listen Live
            </button>
            <button style={{
              background: 'transparent',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              padding: '1rem 2rem',
              borderRadius: '12px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Browse Schedule
            </button>
          </div>

          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>85.4K</span>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Monthly Listeners</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>24/7</span>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Live Broadcast</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>120+</span>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Weekly Shows</span>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           style={{ position: 'relative' }}
           className="hero-image-container"
        >
          {/* Visualizer Mockup */}
          <div className="glass" style={{
            padding: '2rem',
            borderRadius: '30px',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '350px',
              borderRadius: '20px',
              background: 'linear-gradient(45deg, #1c1c22, #25252b)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
               <Mic2 size={80} color="var(--primary)" style={{ opacity: 0.2 }} />
               
               {/* Animated Sound Bars */}
               <div style={{
                 position: 'absolute',
                 bottom: 0,
                 display: 'flex',
                 gap: '4px',
                 alignItems: 'flex-end',
                 padding: '0 1rem',
                 width: '100%',
                 height: '100px'
               }}>
                 {Array.from({ length: 40 }).map((_, i) => (
                   <motion.div
                    key={i}
                    animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                    transition={{ repeat: Infinity, duration: 0.5 + Math.random(), delay: i * 0.05 }}
                    style={{
                      flex: 1,
                      backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                      borderRadius: '4px 4px 0 0',
                      opacity: 0.6
                    }}
                   />
                 ))}
               </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>The Morning Vibe</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Now Playing: "Summer Days" - Casio</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Volume2 size={24} style={{ color: 'var(--text-muted)' }} />
                <Users size={24} style={{ color: 'var(--text-muted)' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .hero-image-container { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
