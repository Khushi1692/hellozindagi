import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import SEO from './SEO';

const Contact = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Contact Us | Hello Zindagi" 
        description="Get in touch with Hello Zindagi. We'd love to hear from you. Send us a message or visit our studio." 
        url="https://hellozindagi.com.au/contact" 
        keywords="Contact, Hello Zindagi, Address, Email, Telephone" 
      />
      
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Get in <span className="gradient-text">Touch</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We'd love to hear from you. Send us a message or visit us.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem'
          }} className="contact-grid">
            
            {/* Info */}
            <div>
              <div style={{ 
                background: 'var(--bg-card)', 
                padding: '3rem', 
                borderRadius: '30px', 
                border: '1px solid var(--border-glass)',
                height: '100%'
              }}>
                <h3 style={{ marginBottom: '2.5rem', fontSize: '1.8rem' }}>Contact Info</h3>
                
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ color: 'var(--primary)' }}><MapPin size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Address</h4>
                    <p style={{ color: 'var(--text-muted)' }}> 1/191 Scoresby Road, Boronia, Victoria 3155</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ color: 'var(--primary)' }}><Phone size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>04687 93340</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: 'var(--primary)' }}><Mail size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-muted)' }}>hellozindagiau@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form style={{ 
                background: 'var(--bg-card)', 
                padding: '3rem', 
                borderRadius: '30px', 
                border: '1px solid var(--border-glass)'
              }}>
                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{
                      width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-glass)', color: 'white', outline: 'none'
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={{
                      width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-glass)', color: 'white', outline: 'none'
                    }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Subject</label>
                  <input type="text" placeholder="General Inquiry" style={{
                    width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)', color: 'white', outline: 'none'
                  }} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                  <textarea rows="5" placeholder="Your message here..." style={{
                    width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)', color: 'white', outline: 'none', resize: 'none'
                  }}></textarea>
                </div>

                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>
                  <Send size={20} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
