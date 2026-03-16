import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer style={{ padding: '5rem 0 2rem 0', background: 'var(--bg-section)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '3rem'
          }}
        >
          {/* Logo Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <img
                src={logo} 
                alt="Hello Zindagi Logo"
                style={{ height: '36px' }}
              />
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Hello <span style={{ color: 'var(--primary)' }}>Zindagi</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Human, Happiness, Hope • Connecting communities through culture,
              dialogue, shared experiences, and cultural exchange.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: Facebook, url: 'https://www.facebook.com/groups/1792626044901308' },
                { Icon: Twitter, url: '#' },
                { Icon: Instagram, url: '#' },
                { Icon: Youtube, url: '#' }
              ].map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  className="social-icon"
                >
                  <Icon size={16} color="var(--text-muted)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ marginBottom: '1.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Overview', path: '/about' },
                { name: 'News & Events', path: '/news' },
                { name: 'Contact Us', path: '/contact' }
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 400 }}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 style={{ marginBottom: '1.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Support</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Become a Volunteer', 'Membership', 'Advertising', 'Donate'].map((l) => (
                <li key={l}>
                  <Link to="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ marginBottom: '1.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Connect</h5>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Phone size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                   04687 93340
                </span>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Mail size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  hellozindagiau@gmail.com
                </span>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                   1/191 Scoresby Road, <br />
                  Boronia, Victoria 3155
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            © {new Date().getFullYear()} Hello Zindagi Inc. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon:hover { 
          background: var(--primary) !important; 
          border-color: var(--primary) !important;
        }
        .social-icon:hover svg { color: white !important; }
        footer a:hover { color: var(--primary) !important; }

        @media (max-width: 968px) {
          footer .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 600px) {
          footer .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;