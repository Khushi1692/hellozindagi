import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Maximize2, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LivePlayer = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        zIndex: 1001,
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border)',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container live-player-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 1fr) 2fr minmax(200px, 1fr)',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Track Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            flexShrink: 0
          }} />
          <div style={{ overflow: 'hidden' }}>
            <h5 style={{ 
              fontSize: '0.9rem', 
              marginBottom: '0.15rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'var(--text-main)',
              fontWeight: 600
            }}>The Morning Vibe</h5>
            <p style={{ 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>Host: DJ Sam • 94.5 FM</p>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <SkipBack size={18} className="player-btn" style={{ color: 'var(--text-muted)' }} />
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)'
            }}>
              <Play fill="currentColor" size={18} style={{ marginLeft: '2px' }} />
            </div>
            <SkipForward size={18} className="player-btn" style={{ color: 'var(--text-muted)' }} />
          </div>
          
          <div style={{ 
            width: '100%', 
            maxWidth: '400px', 
            height: '3px', 
            background: 'var(--border)',
            borderRadius: '10px',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '45%',
              background: 'var(--primary)',
              borderRadius: '10px'
            }} />
          </div>
        </div>

        {/* Extra Actions */}
        <div className="extra-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.25rem' }}>
          <Volume2 size={18} className="player-btn" style={{ color: 'var(--text-muted)' }} />
          <Share2 size={18} className="player-btn" style={{ color: 'var(--text-muted)' }} />
          <Maximize2 size={18} className="player-btn" style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>

      <style>{`
        .player-btn { cursor: pointer; transition: color 0.2s; }
        .player-btn:hover { color: var(--primary) !important; }
        
        @media (max-width: 800px) {
          .live-player-grid { grid-template-columns: 1fr auto !important; }
        }
        @media (max-width: 600px) {
           .live-player-grid { grid-template-columns: 1fr !important; }
           .extra-actions { display: none !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default LivePlayer;
