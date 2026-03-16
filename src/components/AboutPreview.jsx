import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users, ArrowRight } from 'lucide-react';
import communityImage from "../assets/community.jpg";

const AboutPreview = () => {
  return (
    <section style={{ padding: '7rem 0', background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
          gap: '5rem',
          alignItems: 'center'
        }} className="about-preview-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            }}>About Us</span>
            
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', lineHeight: 1.15, color: 'var(--text-main)', letterSpacing: '-1px' }}>
              Building <span className="gradient-text">Harmony</span> Through Connection.
            </h2>
            
            <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Hello Zindagi Inc is dedicated to supporting individuals and families of Indian origin in their journey of assimilation into Australian society. We promote humanity, respect, and compassion.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', listStyle: 'none' }}>
              {[
                { icon: Heart, text: 'Inspiring happiness and hope' },
                { icon: Globe, text: 'Connecting communities through culture' },
                { icon: Users, text: 'Providing access to resources and advocacy' }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    background: 'var(--primary-light)', 
                    padding: '0.5rem', 
                    borderRadius: 'var(--radius-sm)', 
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <item.icon size={18} />
                  </div>
                  <span style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500 }}>{item.text}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '0.95rem', display: 'inline-flex', textDecoration: 'none', gap: '0.5rem' }}>
              Learn About Our Mission <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ position: 'relative' }}
          >
             <img 
               src={communityImage}
               alt="Community Diversity" 
               onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" }}
               style={{
                 width: '100%',
                 height: "420px", 
                 objectFit: 'cover',
                 borderRadius: 'var(--radius-xl)',
                 position: 'relative',
                 zIndex: 1,
                 boxShadow: 'var(--shadow-lg)',
                 border: '1px solid var(--border)'
               }}
             />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-preview-grid { 
            grid-template-columns: 1fr !important; 
            gap: 3rem !important; 
            text-align: center;
          }
          .about-preview-grid ul {
            align-items: flex-start;
          }
          .about-preview-grid li {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;
