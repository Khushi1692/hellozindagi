import React from 'react';
import { Radio, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
const Footer = () => {
  return (
    <footer style={{ padding: '6rem 0 2rem 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '4rem'
          }}
        >
          {/* Logo Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              
              <img
                src={logo} 
                alt="Hello Zindagi Logo"
                style={{ height: '40px' }}
              />

              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                Hello <span style={{ color: 'var(--primary)' }}>Zindagi</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Human, Happiness, Hope • Connecting communities through culture,
              dialogue, shared experiences, and cultural exchange.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  className="social-icon"
                >
                  <Icon size={18} color="var(--text-muted)" />
                </div>
              ))}
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ marginBottom: '2rem' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Overview', path: '/about' },
                { name: 'News & Events', path: '/news' },
                { name: 'Contact Us', path: '/contact' }
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 style={{ marginBottom: '2rem' }}>Support</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['Become a Volunteer', 'Membership', 'Advertising', 'Donate'].map((l) => (
                <li key={l}>
                  <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ marginBottom: '2rem' }}>Connect</h5>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  +61 450310047
                </span>
              </li>

              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  info@crestedith.com
                </span>
              </li>

              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  123 Media Street <br />
                  Melbourne, VIC 3000
                </span>
              </li>
            </ul>
          </div>
        </div>


        {/* Footer Bottom Row */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: 0 }}>
            © {new Date().getFullYear()} Hello Zindagi Inc. All rights reserved. Built for the Community.
          </p>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'none' }}>
              Terms of Service
            </a>
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