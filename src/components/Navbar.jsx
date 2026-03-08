import React from 'react';
import { Radio, Menu, X, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // ✅ Import the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News & Events', path: '/news' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        padding: '0 2rem'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={logo}   // ✅ Use imported logo
              alt="Hello Zindagi Logo"
              style={{ height: '60px', objectFit: 'contain' }}
            />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  lineHeight: 1
                }}
              >
                Hello <span style={{ color: 'var(--primary)' }}>Zindagi</span>
              </span>

              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)',
                  fontWeight: 600,
                  marginTop: '0.25rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Human • Happiness • Hope
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '2.5rem' }} className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)')
              }
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Search size={20} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />

          <button
            className="btn-primary"
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
          >
            Support Us
          </button>

          <Menu
            className="menu-icon"
            size={24}
            style={{ cursor: 'pointer', display: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
          .menu-icon { display: none !important; }
        }

        @media (max-width: 767px) {
          .nav-links { display: none !important; }
          .menu-icon { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;