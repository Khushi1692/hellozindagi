import React from 'react';
import { Radio, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
                  fontSize: 'clamp(1rem, 4vw, 1.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }}
              >
                Hello <span style={{ color: 'var(--primary)' }}>Zindagi</span>
              </span>

              <span
                style={{
                  fontSize: 'clamp(0.5rem, 2vw, 0.75rem)',
                  color: 'var(--text-dim)',
                  fontWeight: 600,
                  marginTop: '0.25rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
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
          <div className="desktop-support-btn">
            <Link
              to="/contact"
              className="btn-primary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex' }}
            >
              Support Us
            </Link>
          </div>

          {isOpen ? (
            <X
              className="menu-icon"
              size={24}
              style={{ cursor: 'pointer', display: 'none' }}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="menu-icon"
              size={24}
              style={{ cursor: 'pointer', display: 'none' }}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
            style={{
              position: 'absolute',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-glass)',
              padding: '1rem 2rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ padding: '0.8rem', fontSize: '1rem', textDecoration: 'none', textAlign: 'center', marginTop: '1rem' }}
            >
              Support Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 1025px) {
          .nav-links { display: flex !important; }
          .menu-icon { display: none !important; }
          .mobile-menu { display: none !important; }
        }

        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .desktop-support-btn { display: none !important; }
          .menu-icon { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;