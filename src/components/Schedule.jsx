import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';

const programs = [
  { id: 1, time: '07:00 - 09:00', title: 'The Sunrise Mix', host: 'Elena Gil', tag: 'Morning' },
  { id: 2, time: '09:00 - 12:00', title: 'The Morning Vibe', host: 'DJ Sam', tag: 'Life' },
  { id: 3, time: '12:00 - 14:00', title: 'Midday Beats', host: 'Markus T', tag: 'Music' },
  { id: 4, time: '14:00 - 17:00', title: 'Afternoon Drive', host: 'Sarah J', tag: 'News' },
  { id: 5, time: '17:00 - 19:00', title: 'Sunset Grooves', host: 'Leo Vance', tag: 'Evening' },
  { id: 6, time: '19:00 - 22:00', title: 'Night Owl Radio', host: 'Maya Moon', tag: 'Talk' },
];

const Schedule = () => {
  return (
    <section id="schedule" style={{ padding: '8rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h6 style={{ color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Programming</h6>
            <h2 style={{ fontSize: '3rem' }}>Today's <span className="gradient-text">Lineup</span></h2>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '400px', textAlign: 'right' }}>
            Catch your favorite hosts and discover new music throughout the day.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {programs.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ y: -10, borderColor: 'var(--primary)' }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border)',
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}>
                {prog.tag}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                <Clock size={16} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{prog.time}</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{prog.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Host: {prog.host}</p>

              <div style={{ 
                marginTop: '1.5rem', 
                height: '1px', 
                background: 'linear-gradient(to right, var(--primary), transparent)',
                opacity: 0.3 
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
