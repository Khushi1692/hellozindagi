import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import SEO from './SEO';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_9lqt1f2',
      'template_733e5pn',
      form.current,
      'PYgtix-jFrTnLlrNF'
    )
    .then(
      () => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        setIsSubmitting(false);
        console.log(error);
      }
    );
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | Hello Zindagi",
    "url": "https://hellozindagi.com.au/contact",
    "description": "Get in touch with Hello Zindagi for inquiries, support, or collaborations."
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Contact Us | Hello Zindagi" 
        description="Get in touch with Hello Zindagi. We'd love to hear from you. Send us a message or visit our studio." 
        url="https://hellozindagi.com.au/contact" 
        keywords="Contact, Hello Zindagi, Address, Email, Telephone" 
        schemaMarkup={contactSchema}
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
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    background: 'var(--bg-card)', 
                    padding: '4rem 3rem', 
                    borderRadius: '30px', 
                    border: '1px solid var(--border-glass)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'var(--primary)'
                  }}>
                    <CheckCircle size={40} />
                  </div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Thank you for connecting with Hello Zindagi. <br/> We have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary" 
                    style={{ padding: '0.8rem 2rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form 
                  ref={form}
                  onSubmit={sendEmail}
                  style={{ 
                  background: 'var(--bg-card)', 
                  padding: '3rem', 
                  borderRadius: '30px', 
                  border: '1px solid var(--border-glass)'
                }}>
                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                    <input name="user_name" type="text" placeholder="John Doe" style={{
                      width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-glass)', color: 'white', outline: 'none'
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                    <input name="user_email" type="email" placeholder="john@example.com" style={{
                      width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-glass)', color: 'white', outline: 'none'
                    }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Subject</label>
                  <input name="subject" type="text" placeholder="General Inquiry" style={{
                    width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)', color: 'white', outline: 'none'
                  }} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                  <textarea name="message" rows="5" placeholder="Your message here..." style={{
                    width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)', color: 'white', outline: 'none', resize: 'none'
                  }}></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  <Send size={20} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              )}
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