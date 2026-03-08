import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users } from 'lucide-react';
import communityImage from "../assets/community.jpg";

const AboutPreview = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-card)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
          gap: '6rem',
          alignItems: 'center'
        }} className="about-preview-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 style={{ color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>About Us</h6>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.2 }}>
              Building <span className="gradient-text">Harmony</span> Through Connection.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Hello Zindagi Inc is dedicated to supporting individuals and families of Indian origin in their journey of assimilation into Australian society. We promote humanity, respect, and compassion.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', listStyle: 'none' }}>
              {[
                { icon: Heart, text: 'Inspiring happiness and hope' },
                { icon: Globe, text: 'Connecting communities through culture' },
                { icon: Users, text: 'Providing access to resources and advocacy' }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem', borderRadius: '50%', color: 'var(--primary)' }}>
                    <item.icon size={20} />
                  </div>
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500 }}>{item.text}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.05rem', display: 'inline-flex' }}>
              Learn About Our Mission
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
             <div style={{
               position: 'absolute',
               top: '-10%',
               right: '-10%',
               width: '300px',
               height: '300px',
               background: 'var(--primary)',
               filter: 'blur(100px)',
               opacity: 0.15,
               zIndex: 0
             }} />
             <img 
               src={communityImage}
               alt="Community Diversity" 
               onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" }}
               style={{
                 width: '100%',
                 height: "400px", 
                 borderRadius: '30px',
                 position: 'relative',
                 zIndex: 1,
                 boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                 border: '1px solid var(--border-glass)'
               }}
             />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-preview-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;
