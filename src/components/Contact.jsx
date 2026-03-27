import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import SEO from './SEO';
import emailjs from '@emailjs/browser';

const inputStyle = {
  width: '100%', 
  padding: '0.85rem 1rem', 
  borderRadius: 'var(--radius-sm)', 
  background: 'var(--bg-section)',
  border: '1px solid var(--border)', 
  color: 'var(--text-main)', 
  outline: 'none',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  transition: 'border-color 0.2s ease'
};

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
    "url": "https://hellozindagi.org.au/contact",
    "description": "Get in touch with Hello Zindagi for inquiries, support, or collaborations."
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Contact Us | Hello Zindagi" 
        description="Get in touch with Hello Zindagi. We'd love to hear from you. Send us a message or visit our studio." 
        url="https://hellozindagi.org.au/contact" 
        keywords="Contact, Hello Zindagi, Address, Email, Telephone" 
        schemaMarkup={contactSchema}
      />
      
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.75rem', letterSpacing: '-1px' }}>Get in <span className="gradient-text">Touch</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>We'd love to hear from you. Send us a message or visit us.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem'
          }} className="contact-grid">
            
            {/* Info */}
            <div>
              <div style={{ 
                background: 'var(--bg-section)', 
                padding: '2.5rem', 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid var(--border)',
                height: '100%'
              }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>Contact Info</h3>
                
                {[
                  { icon: MapPin, label: 'Address', value: '1/191 Scoresby Road, Boronia, Victoria 3155' },
                  { icon: Phone, label: 'Call Us', value: '04687 93340' },
                  { icon: Mail, label: 'Email', value: 'hellozindagiau@gmail.com' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: i < 2 ? '1.75rem' : 0 }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: 'var(--radius-sm)', 
                      background: 'var(--primary-light)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--primary)' 
                    }}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.label}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
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
                    background: 'var(--bg-section)', 
                    padding: '3.5rem 2.5rem', 
                    borderRadius: 'var(--radius-lg)', 
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: 'var(--primary)'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you for connecting with Hello Zindagi. <br/> We have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary" 
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form 
                  ref={form}
                  onSubmit={sendEmail}
                  style={{ 
                  background: 'var(--bg-section)', 
                  padding: '2.5rem', 
                  borderRadius: 'var(--radius-lg)', 
                  border: '1px solid var(--border)'
                }}>
                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Full Name</label>
                    <input name="user_name" type="text" placeholder="John Doe" style={inputStyle} 
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Email Address</label>
                    <input name="user_email" type="email" placeholder="john@example.com" style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Subject</label>
                  <input name="subject" type="text" placeholder="General Inquiry" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Message</label>
                  <textarea name="message" rows="5" placeholder="Your message here..." style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
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