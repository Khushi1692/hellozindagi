import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Newspaper } from 'lucide-react';

const newsItems = [
  { 
    id: 1, 
    date: 'Oct 24, 2023', 
    title: 'New Community Center Opening in Melbourne', 
    excerpt: 'Join us this weekend for the grand opening ceremony of the new community hub...',
    category: 'Community'
  },
  { 
    id: 2, 
    date: 'Oct 20, 2023', 
    title: 'Top 10 Emerging Artists from the Subcontinent', 
    excerpt: 'Discover the fresh voices making waves in the Australian music scene this year...',
    category: 'Culture'
  },
  { 
    id: 3, 
    date: 'Oct 15, 2023', 
    title: 'Upcoming Cultural Festival: What to Expect', 
    excerpt: 'The annual festival returns with more food, music, and vibrant performances...',
    category: 'Events'
  },
];

const News = () => {
  return (
    <section id="community" style={{ padding: '8rem 0', background: 'var(--bg-card)' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Community <span className="gradient-text">Journal</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Stories that matter, voices that resonate.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{
                height: '240px',
                borderRadius: '24px',
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=800')`,
                backgroundSize: 'cover',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'var(--primary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  {news.category}
                </div>
              </div>
              
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>{news.date}</span>
              <h4 style={{ fontSize: '1.4rem', margin: '0.75rem 0', color: 'var(--text-main)', lineHeight: 1.3 }}>{news.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{news.excerpt}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                Read More <ArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
