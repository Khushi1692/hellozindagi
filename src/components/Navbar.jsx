import React from 'react';
import { Radio, Menu, X, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000,
      padding: '0 2rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              background: 'var(--primary)',
              padding: '0.5rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px var(--primary-glow)'
            }}>
              <Radio size={24} color="white" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.5px'
            }}>
              HEZZ <span style={{ color: 'var(--primary)' }}>FM</span>
            </span>
          </Link>
        </motion.div>

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
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)'}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Search size={20} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
          <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
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
