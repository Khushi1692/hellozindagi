import React from 'react';
import { motion } from 'framer-motion';
import { Radio, HeartHandshake, Mic2, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

import presidentImg from "../assets/president.png";
import secretaryImg from "../assets/secretary.png";
import boardMemberImg from "../assets/board_member.png";
import vicePresidentImg from "../assets/vice_president.png";
import treasurerImg from "../assets/treasurer.png";

const About = () => {
  const focusAreas = [
    {
      icon: Radio,
      title: "Hello Zindagi Radio Show",
      desc: "Amplifying diverse voices and stories from our vibrant community.",
      color: "#059669",
      bg: "#d1fae5"
    },
    {
      icon: HeartHandshake,
      title: "Cross-Cultural Integration",
      desc: "Fostering understanding and social cohesion via community-driven events.",
      color: "#4f46e5",
      bg: "#e0e7ff"
    },
    {
      icon: Mic2,
      title: "Creative Platform",
      desc: "Nurturing creativity, expression, and talent via events and exchange programs.",
      color: "#ea580c",
      bg: "#ffedd5"
    }
  ];

  const leaders = [
    {
      name: "Ruchi Sharma",
      role: "Founder & President",
      image: presidentImg,
      accentColor: "var(--primary)",
      accentBg: "var(--primary-light)",
      bio: [
        "Ruchi Sharma is a passionate community leader, cultural advocate, and radio host committed to building stronger, more inclusive communities through conversation, connection, and collaboration.",
        "Deeply driven by the philosophy of HuHaHo — Human Happiness & Hope, Ruchi is a Co-Founder of HuHaHo, a holistic wellbeing initiative that encourages people to stay happy while keeping hope alive.",
        "With a natural ability to connect people and ideas, Ruchi believes in the power of storytelling, cultural exchange, and grassroots leadership. Her work continues to inspire communities to celebrate diversity, build empathy, and strengthen the social fabric that binds us all."
      ]
    },
    {
      name: "Bina Shah",
      role: "Vice President ",
      image: vicePresidentImg,
      accentColor: "#4f46e5",
      accentBg: "#e0e7ff",
      bio: [
        "Ms. Bina Shah is the Chief Operating Officer of IAEC Education | IAEC Migration, bringing over 30 years of experience in international education and migration. Her ethical and dynamic approach ensures high standards in student counselling, visa services, and partner engagement, consistently fostering student success and satisfaction.",
        "Recognised as a trusted leader and communicator, Bina has been instrumental in developing robust policies and procedures to guide students ethically, ensuring authenticity, retention, and long-term academic and career success. She has positively impacted thousands of students' lives, helping them navigate international education pathways with clarity and confidence.",
      ]
    },
    {
      name: "Rahul Agrawal",
      role: "Secretary",
      image: secretaryImg,
      accentColor: "#059669",
      accentBg: "#d1fae5",
      bio: [
        "Rahul Agrawal is an Information Technology consultant based in Melbourne, Australia. Having grown up in India and worked across several countries before settling in Australia, Rahul brings a global perspective shaped by diverse cultural experiences.",
        "He is actively engaged with local community groups and participates in cultural and social initiatives."
      ]
    },
    {
      name: "Parul Chaturvedi",
      role: "Board Member",
      image: boardMemberImg,
      accentColor: "#4f46e5",
      accentBg: "#e0e7ff",
      bio: [
        "Parul Chaturvedi is a software developer based in Australia. Passionate about social issues affecting immigrant communities, she believes strongly in fostering understanding and respect between cultures.",
        "Having experienced the journey of settling into a new country herself, Parul hopes to contribute to building a supportive community where individuals and families of Indian origin feel empowered as they integrate into Australian society."
      ]
    },
    {
      name: "Ashita Dhillon",
      role: "Treasurer",
      image: treasurerImg,
      accentColor: "#059669",
      accentBg: "#d1fae5",
      bio: [
        "Ash is an operations professional and cultural advocate dedicated to helping Indian migrants find a true sense of belonging in Australia. With a Master’s in Psychology and a career in consulting, she brings a thoughtful, people-focused approach. Deeply inspired by the legacy of her grandfather, Padmabhushan Col G.S. Dhillon of the Indian National Army, Ash carries forward a strong spirit of service. Having lived in India and Japan before calling Melbourne home, she understands the journey of moving between cultures and countries. ",
        "With a personal love for writing, yoga, and meditation, Ash is committed to building a society where individuals from all backgrounds feel safe, included, and truly at home."
      ]
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

      {/* Hero Section */}
      <section style={{ 
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0 3rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
          opacity: 0.5,
          zIndex: 0
        }} />

        <div className="container about-hero-grid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ 
              color: 'var(--primary)', 
              fontSize: '0.8rem',
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '1rem',
              background: 'var(--primary-light)',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px'
            }}>
              Our Story
            </span>

            <h1 style={{ fontSize: 'clamp(2.75rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px', color: 'var(--text-main)' }}>
              Human. <br />
              Happiness. <br />
              <span className="gradient-text">Hope.</span>
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.15 }}
             style={{
               background: 'var(--bg-card)',
               padding: '2.5rem',
               borderRadius: 'var(--radius-lg)',
               border: '1px solid var(--border)',
               boxShadow: 'var(--shadow-md)',
               position: 'relative'
             }}
          >
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              width: '36px',
              height: '36px',
              background: '#ffedd5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Star size={18} color="#ea580c" fill="#ea580c" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>Vision Statement</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8, fontStyle: 'italic' }}>
              "To create a harmonious and inclusive Australia where Indian and Australian communities connect through shared values of humanity, happiness, and hope—fostering belonging, resilience, and cultural pride for generations to come."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '7rem 0', background: 'var(--bg-section)' }}>
         <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }} className="mission-grid">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ position: 'sticky', top: '100px' }}
              >
                <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.2, letterSpacing: '-1px' }}>Our <br/><span className="gradient-text">Mission</span></h2>
                <div style={{ height: '3px', width: '48px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '1.5rem' }} />
                <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  Hello Zindagi Inc is dedicated to supporting individuals and families of Indian origin in their journey of assimilation into Australian society.
                </p>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    "Connecting communities through culture, dialogue, shared experiences, and cultural exchange between Australia and India.",
                    "Providing access to resources, guidance, and advocacy in times of need.",
                    "Promoting humanity, respect, and compassion in line with the values of the Commonwealth of Australia.",
                    "Inspiring happiness and hope by empowering people to thrive in their new home while celebrating their heritage."
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      style={{ 
                        background: 'var(--bg-card)', 
                        padding: '2rem', 
                        borderRadius: 'var(--radius-md)', 
                        borderLeft: `3px solid ${idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}`,
                        border: '1px solid var(--border)',
                        borderLeftWidth: '3px',
                        borderLeftColor: idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.25rem'
                      }}
                    >
                      <span style={{ 
                        fontSize: '1.5rem', 
                        color: 'var(--text-muted)', 
                        opacity: 0.35,
                        fontWeight: 800, 
                        lineHeight: 1,
                        fontFamily: 'var(--font-display)',
                        flexShrink: 0
                      }}>
                        0{idx + 1}
                      </span>
                      <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{item}</p>
                    </motion.div>
                  ))}
              </div>
           </div>
         </div>
      </section>

      {/* Focus Areas Section */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '0.75rem', letterSpacing: '-1px' }}>Impact <span className="gradient-text">Verticals</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
              How we actively deliver our impact through three interconnected focus areas.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="verticals-container">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '2.5rem 2rem',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s ease'
                }}
                className="vertical-card"
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-md)',
                  background: area.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  color: area.color
                }}>
                  <area.icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {area.title}
                </h3>
                
                <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '1rem' }}>
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Visionary Section */}
      <section style={{ padding: '7rem 0', background: 'var(--bg-section)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
          opacity: 0.3,
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, #ffedd5 0%, transparent 70%)',
          opacity: 0.4,
          borderRadius: '50%',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ 
              color: 'var(--primary)', 
              fontSize: '0.8rem',
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '1rem',
              background: 'var(--primary-light)',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px'
            }}>
              Leadership
            </span>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '0.75rem', letterSpacing: '-1px' }}>Founding <span className="gradient-text">Visionary</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
              Meet the passionate leaders behind Hello Zindagi's mission.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="leader-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '280px 1fr',
                  gap: '3rem',
                  alignItems: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Subtle corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '120px',
                  height: '120px',
                  background: `linear-gradient(135deg, ${leader.accentBg} 0%, transparent 60%)`,
                  borderRadius: '0 0 100% 0',
                  opacity: 0.6
                }} />

                {/* Photo side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
                >
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    {/* Decorative ring */}
                    <div style={{
                      position: 'absolute',
                      inset: '-12px',
                      borderRadius: '50%',
                      border: `2px dashed ${leader.accentColor}`,
                      opacity: 0.25,
                      animation: 'spin 25s linear infinite'
                    }} />
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      style={{ 
                        width: '200px', 
                        height: '200px', 
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                        border: '4px solid var(--bg-card)',
                        boxShadow: `0 8px 32px rgba(0,0,0,0.12), 0 0 0 2px ${leader.accentBg}`,
                        display: 'block'
                      }} 
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginTop: '1.25rem', 
                    marginBottom: '0.25rem', 
                    color: 'var(--text-main)', 
                    fontWeight: 700 
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{ 
                    color: leader.accentColor, 
                    fontWeight: 600, 
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    background: leader.accentBg,
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px'
                  }}>
                    {leader.role}
                  </p>
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  {/* Large decorative quote mark */}
                  <span style={{
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: leader.accentColor,
                    opacity: 0.1,
                    fontFamily: 'Georgia, serif',
                    position: 'absolute',
                    top: '-1rem',
                    left: '-0.5rem',
                    fontWeight: 700,
                    userSelect: 'none'
                  }}>
                    "
                  </span>

                  <div style={{ paddingTop: '1rem', position: 'relative' }}>
                    {leader.bio.map((paragraph, pIdx) => (
                      <p 
                        key={pIdx}
                        style={{ 
                          fontSize: '1rem', 
                          color: 'var(--text-body)', 
                          lineHeight: 1.8, 
                          marginBottom: pIdx < leader.bio.length - 1 ? '1rem' : 0
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0 6rem 0' }}>
        <div className="container">
          <div className="about-cta-box" style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', 
            padding: '4.5rem 3rem', 
            borderRadius: 'var(--radius-xl)', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.08 }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem', color: '#ffffff', letterSpacing: '-1px' }}>Be Part of Our Journey</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '550px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.7 }}>
                Join Hello Zindagi today and contribute to a vibrant, connected, and respectful community.
              </p>
              <Link to="/contact" style={{
                padding: '1rem 2.5rem', 
                borderRadius: 'var(--radius-sm)', 
                fontSize: '1rem', 
                fontWeight: 700, 
                border: 'none', 
                cursor: 'pointer', 
                textDecoration: 'none', 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ffffff',
                color: 'var(--primary-dark)',
                transition: 'all 0.25s ease'
              }}
              className="cta-btn"
              >
                Join Our Platform <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .verticals-container::-webkit-scrollbar { display: none; }
        .vertical-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .leader-card:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-3px);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        @media (max-width: 968px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .mission-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .mission-grid > div:first-child { position: static !important; }
          .leader-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem !important;
            text-align: center;
          }
          .about-cta-box {
            padding: 2.5rem 1.5rem !important;
          }
          .about-cta-box h2 {
            font-size: 1.75rem !important;
          }
          .about-cta-box p {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .about-cta-box .cta-btn {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
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
