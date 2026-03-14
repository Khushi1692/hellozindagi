import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Radio, HeartHandshake, Mic2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const focusAreas = [
    {
      icon: Radio,
      title: "Hello Zindagi Radio Show",
      desc: "Amplifying diverse voices and stories from our vibrant community."
    },
    {
      icon: HeartHandshake,
      title: "Cross-Cultural Integration",
      desc: "Fostering understanding and social cohesion via community-driven events."
    },
    {
      icon: Mic2,
      title: "Creative Platform",
      desc: "Nurturing creativity, expression, and talent via events and exchange programs."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us | Hello Zindagi",
    "url": "https://hellozindagi.com.au/about",
    "description": "Learn more about Hello Zindagi and our mission to support the Indian community in Australia."
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--bg-main)' }}>
      <SEO 
        title="About Us | Hello Zindagi" 
        description="Learn more about Hello Zindagi Inc, our vision, mission, and how we deliver community impact." 
        url="https://hellozindagi.com.au/about" 
        keywords="About Us, Vision, Mission, Radio, Integration" 
        schemaMarkup={aboutSchema}
      />

      {/* Modern Hero Section with Typography Focus */}
      <section style={{ 
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)',
          opacity: 0.1,
          zIndex: 0
        }} />

        <div className="container about-hero-grid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-hero-label" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>
                Our Story
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Human. <br />
              Happiness. <br />
              <span className="gradient-text">Hope.</span>
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             style={{
               background: 'var(--bg-card)',
               padding: '3rem',
               borderRadius: '30px',
               border: '1px solid var(--border-glass)',
               boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
               position: 'relative'
             }}
          >
            <Star color="var(--accent)" fill="var(--accent)" style={{ position: 'absolute', top: '-15px', right: '-15px', width: '40px', height: '40px', opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>Vision Statement</h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, fontStyle: 'italic' }}>
              "To create a harmonious and inclusive Australia where Indian and Australian communities connect through shared values of humanity, happiness, and hope—fostering belonging, resilience, and cultural pride for generations to come."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section (Staggered Layout) */}
      <section style={{ padding: '8rem 0', background: '#0f1115' }}>
         <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }} className="mission-grid">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ position: 'sticky', top: '120px' }}
              >
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-main)', lineHeight: 1.2 }}>Our <br/><span className="gradient-text">Mission</span></h2>
                <div style={{ height: '4px', width: '60px', background: 'var(--primary)', marginBottom: '2rem' }} />
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Hello Zindagi Inc is dedicated to supporting individuals and families of Indian origin in their journey of assimilation into Australian society.
                </p>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {[
                    "Connecting communities through culture, dialogue, shared experiences, and cultural exchange between Australia and India.",
                    "Providing access to resources, guidance, and advocacy in times of need.",
                    "Promoting humanity, respect, and compassion in line with the values of the Commonwealth of Australia.",
                    "Inspiring happiness and hope by empowering people to thrive in their new home while celebrating their heritage."
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      viewport={{ once: true }}
                      style={{ 
                        background: 'rgba(255,255,255,0.02)', 
                        padding: '2.5rem', 
                        borderRadius: '24px', 
                        borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}`,
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.5rem' 
                      }}
                    >
                      <h4 style={{ 
                        fontSize: '2rem', 
                        color: 'rgba(255,255,255,0.1)', 
                        fontWeight: 900, 
                        lineHeight: 1, 
                        marginTop: '-0.5rem' 
                      }}>
                        0{idx + 1}
                      </h4>
                      <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{item}</p>
                    </motion.div>
                  ))}
              </div>
           </div>
         </div>
      </section>

      {/* Focus Areas Section (Horizontal Scroll look) */}
      <section style={{ padding: '8rem 0', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Impact <span className="gradient-text">Verticals</span></h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              How we actively deliver our impact through three interconnected focus areas.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'auto',
            paddingBottom: '2rem',
            scrollbarWidth: 'none', // Firefox
          }} className="verticals-container">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  minWidth: '320px',
                  flex: 1,
                  background: 'linear-gradient(180deg, var(--bg-card) 0%, rgba(22, 22, 26, 0.2) 100%)',
                  border: '1px solid var(--border-glass)',
                  padding: '4rem 3rem',
                  borderRadius: '30px',
                  position: 'relative',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2.5rem',
                  color: 'var(--primary)'
                }}>
                  <area.icon size={28} />
                </div>

                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                  {area.title}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section style={{ padding: '8rem 0', background: '#0f1115' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Meet our <span className="gradient-text">Leaders</span></h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              The visionaries behind Hello Zindagi.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: "Ruchi Sharma", title: "Founding Member", img: founder2 },
              { name: "Veena Barsiwal", title: "Founding Member", img:founder1},
              
            ].map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '30px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  width: '320px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <img 
                  src={founder.img} 
                  alt={founder.name} 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    marginBottom: '1.5rem', 
                    border: '4px solid var(--primary)' 
                  }} 
                />
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{founder.name}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>{founder.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0 6rem 0' }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(22, 22, 26, 0.9), rgba(16, 185, 129, 0.15))', 
            padding: '5rem 3rem', 
            borderRadius: '40px', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--border-glass)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.05 }} />
            <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.15, zIndex: 0 }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Be Part of Our <span className="gradient-text">Journey</span></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.7 }}>
                Join Hello Zindagi today and contribute to a vibrant, connected, and respectful community.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <Link to="/contact" className="btn-primary" style={{
                  padding: '1.2rem 3rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block'
                }}>
                  Join Our Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .verticals-container::-webkit-scrollbar { display: none; }
        @media (max-width: 968px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .about-hero-grid .about-hero-label {
            justify-content: center;
          }
          .mission-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .mission-grid > div:first-child { position: static !important; }
          .verticals-container { flex-direction: column; }
          
          /* Reduce padding on mobile */
          section {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
