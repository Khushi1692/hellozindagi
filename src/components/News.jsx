import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User, MapPin } from 'lucide-react';

const newsItems = [
  { 
    id: 1, 
    date: 'Oct 24, 2026', 
    title: 'New Community Center Opening in Melbourne', 
    excerpt: 'Join us this weekend for the grand opening ceremony of the new community hub designed to support Indian families adapting to life in Australia.',
    category: 'Community',
    img: 'https://images.unsplash.com/photo-1629853922339-b9d9c2cb62bc?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    author: 'Hello Zindagi'
  },
  { 
    id: 2, 
    date: 'Nov 02, 2026', 
    title: 'Top 10 Emerging Artists from the Subcontinent', 
    excerpt: 'Discover the fresh voices making waves in the Australian music scene this year, featured in our upcoming Hello Zindagi Radio Show.',
    category: 'Culture & Arts',
    img: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    author: 'Editorial Team'
  },
  { 
    id: 3, 
    date: 'Nov 15, 2026', 
    title: 'Diwali Celebration: Cross-Cultural Night', 
    excerpt: 'The annual festival returns with more food, music, and vibrant performances. Be part of our biggest event fostering understanding and social cohesion.',
    category: 'Events',
    img: 'https://images.unsplash.com/photo-1514222134-b57cbf8ce694?auto=format&fit=crop&q=80&w=800',
    readTime: '3 min read',
    author: 'Events Desk'
  },
  {
    id: 4, 
    date: 'Dec 05, 2026', 
    title: 'Youth Mentorship Program Launch', 
    excerpt: 'We are thrilled to launch a new mentorship initiative connecting established professionals with the upcoming generation of Indian Australians.',
    category: 'Empowerment',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    author: 'Hello Zindagi'
  }
];

const News = () => {
  return (
    <section id="community" style={{ padding: '4rem 0 10rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: '3rem',
          justifyItems: 'center'
        }}>
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="news-card"
              style={{
                background: 'var(--bg-card)',
                borderRadius: '30px',
                border: '1px solid var(--border-glass)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Image Header */}
              <div className="news-image-wrapper" style={{
                height: '240px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `url('${news.img}') center/cover`,
                  transition: 'transform 0.5s ease',
                  className: 'img-bg'
                }} />
                
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(16, 185, 129, 0.4), transparent)'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.4rem 1rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {news.category}
                </div>
              </div>
              
              {/* Content Body */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div className="card-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Calendar size={14} /> {news.date}
                  </div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-dim)' }} />
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 500 }}>
                    {news.readTime}
                  </div>
                </div>

                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '1rem' }}>
                  {news.title}
                </h4>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                  {news.excerpt}
                </p>
                
                {/* Footer of Card */}
                <div className="card-footer" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  paddingTop: '1.5rem',
                  marginTop: 'auto'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    <User size={16} /> {news.author}
                  </div>
                  
                  <div className="read-more-btn" style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600,
                    transition: 'gap 0.3s'
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .news-card {
          width: 100%;
          max-width: 500px;
        }
        .news-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .news-card:hover .news-image-wrapper > div:first-child {
          transform: scale(1.05);
        }
        .news-card:hover .read-more-btn {
          gap: 0.8rem;
          color: white;
        }

        @media (max-width: 768px) {
          /* Removing forced center text to keep card content left aligned on mobile */
        }
      `}</style>
    </section>
  );
};

export default News;
