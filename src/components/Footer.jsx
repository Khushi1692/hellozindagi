import React from 'react';
import { Radio, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '6rem 0 12rem 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem'
        }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{
                background: 'var(--primary)',
                padding: '0.4rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Radio size={20} color="white" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>HEZZ <span style={{ color: 'var(--primary)' }}>FM</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Bringing the pulse of Australia to your ears. We are the voice of the community, broadcasting 24/7.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <div key={idx} style={{
                  width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  transition: 'background 0.3s'
                }} className="social-icon">
                  <Icon size={18} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 style={{ marginBottom: '2rem' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['Live Stream', 'Program Schedule', 'News & Events', 'About Us'].map(l => (
                <li key={l}><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ marginBottom: '2rem' }}>Support</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['Contact Us', 'Become a Volunteer', 'Membership', 'Advertising', 'Donate'].map(l => (
                <li key={l}><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
             <h5 style={{ marginBottom: '2rem' }}>Connect</h5>
             <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+61 2 1234 5678</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>hello@hezzfm.com.au</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>123 Media Street, <br />Melbourne, VIC 3000</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            © 2023 HEZZ FM. All rights reserved. Built for the Community.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon:hover { background: var(--primary) !important; }
        .social-icon:hover svg { color: white !important; }
        footer a:hover { color: var(--primary) !important; }
        
        @media (max-width: 968px) {
          footer .grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
