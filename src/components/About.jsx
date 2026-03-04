import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Heart, Shield, Landmark } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: Users,
      title: "Solidarity",
      desc: "Supporting and building solidarity among all Australians while celebrating Iranian and diverse cultural heritage."
    },
    {
      icon: Heart,
      title: "Support Network",
      desc: "Identifying and supporting community needs through strategic partnerships and a robust social support system."
    },
    {
      icon: Globe,
      title: "Cultural Rapport",
      desc: "Nurturing mutual respect and creating meaningful connections between diverse communities across the continent."
    },
    {
      icon: Shield,
      title: "Human Rights",
      desc: "Committed to the promotion and preservation of community rights and universal human values."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--bg-main)' }}>
      {/* Hero / Vision Section */}
      <section style={{ 
        padding: '10rem 0 6rem 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h6 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--primary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 700 }}
          >
            Our Vision
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '2rem', lineHeight: 1.1 }}
          >
            Building Solidarity <br />
            <span className="gradient-text">Through Voice.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}
          >
            HEZZ FM aims to preserve diverse cultural values, enhance mutual respect, and create a strong rapport with the broader Australian community. We are a non-political, non-religious entity dedicated to our members.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our <span className="gradient-text">Focus Areas</span></h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              How we prioritize and achieve our mission every day through solidarity and support.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0 6rem',
            position: 'relative'
          }} className="focus-grid">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  gap: '3rem',
                  position: 'relative',
                  paddingBottom: '5rem'
                }}
              >
                {/* Numbered Indicator */}
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{
                    width: '4px',
                    height: 'calc(100% + 5rem)',
                    background: 'var(--primary)',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '-2.5rem',
                    opacity: 0.4
                  }} />
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--primary)',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: '0 0 20px var(--primary-glow)'
                  }}>
                    <span style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 900, 
                      color: 'var(--bg-main)' 
                    }}>
                      {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    marginBottom: '1rem', 
                    lineHeight: 1.2,
                    fontWeight: 800,
                    letterSpacing: '-0.5px'
                  }}>
                    {area.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ 
                      color: 'var(--text-muted)', 
                      lineHeight: 1.7, 
                      fontSize: '1.05rem'
                    }}>
                      {area.desc}
                    </p>
                    <div style={{ 
                      height: '1px', 
                      width: '60px', 
                      background: 'var(--primary)', 
                      opacity: 0.3 
                    }} />
                    <p style={{ 
                      color: 'var(--primary)', 
                      fontSize: '0.9rem', 
                      fontWeight: 500,
                      opacity: 0.9,
                      fontStyle: 'italic'
                    }}>
                      {idx === 0 && "Build solidarity and enhance mutual respect within our community to celebrate our diversity."}
                      {idx === 1 && "Identify and support the needs of diverse groups through building partnership networks."}
                      {idx === 2 && "Nurture culture and create meaningful connections between members."}
                      {idx === 3 && "Committed to the promotion and preservation of human rights and values."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .focus-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      {/* History & Traditional Owners Section */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '6rem',
            alignItems: 'center'
          }} className="about-split">
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Landmark color="var(--primary)" />
                Our <span className="gradient-text">History</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Since 1990, we have served as a vital communication channel for our members. As a non-profit organization, our fundamental principles are always taken into account with special care and consideration.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Our quarterly media publications and 24/7 broadcasts reflect the news and events of our community, reporting on cultural programs, seminars, and practical information for a diverse audience.
                </p>
                
                <div style={{ 
                  marginTop: '2rem', 
                  padding: '2rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '24px',
                  borderLeft: '4px solid var(--primary)'
                }}>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1rem' }}>
                    "HEZZ FM acknowledges the Traditional Owners of the land where we broadcast, the Wurundjeri People of the Kulin Nation. We pay our respects to Elders past, present and future."
                  </p>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                height: '500px',
                borderRadius: '40px',
                overflow: 'hidden',
                border: '1px solid var(--border-glass)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" 
                alt="Community Gathering" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, var(--bg-main), transparent)'
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass" style={{ padding: '5rem 3rem', borderRadius: '40px', border: '1px solid var(--primary-glow)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Be Part of Our <span className="gradient-text">Solidarity</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
              Join HEZZ FM today and contribute to a vibrant, connected, and respectful community.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                Become a Member
              </button>
              <button style={{
                background: 'transparent',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-main)',
                padding: '1.2rem 3rem',
                borderRadius: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .about-split { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .about-split > div:last-child { height: 400px !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
