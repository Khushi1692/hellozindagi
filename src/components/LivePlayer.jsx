import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Maximize2, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LivePlayer = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="glass" 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '90px',
        zIndex: 1001,
        borderTop: '1px solid var(--border-glass)',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 1fr) 2fr minmax(200px, 1fr)',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Track Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            flexShrink: 0
          }} />
          <div style={{ overflow: 'hidden' }}>
            <h5 style={{ 
              fontSize: '1rem', 
              marginBottom: '0.2rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>The Morning Vibe</h5>
            <p style={{ 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>Host: DJ Sam • 94.5 FM</p>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <SkipBack size={20} className="player-btn" style={{ color: 'var(--text-muted)' }} />
            <div style={{
              width: '48px',
              height: '48px',
              background: 'var(--text-main)',
              color: 'var(--bg-main)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Play fill="currentColor" size={24} style={{ marginLeft: '4px' }} />
            </div>
            <SkipForward size={20} className="player-btn" style={{ color: 'var(--text-muted)' }} />
          </div>
          
          <div style={{ 
            width: '100%', 
            maxWidth: '500px', 
            height: '4px', 
            background: 'rgba(255,255,255,0.1)',
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.5rem' }}>
          <Volume2 size={20} className="player-btn" style={{ color: 'var(--text-muted)' }} />
          <Share2 size={20} className="player-btn" style={{ color: 'var(--text-muted)' }} />
          <Maximize2 size={20} className="player-btn" style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>

      <style>{`
        .player-btn { cursor: pointer; transition: color 0.2s; }
        .player-btn:hover { color: var(--text-main) !important; }
        
        @media (max-width: 800px) {
          grid-template-columns: 1fr auto !important;
        }
        @media (max-width: 600px) {
           .container { grid-template-columns: 1fr !important; }
           .extra-actions { display: none !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default LivePlayer;
