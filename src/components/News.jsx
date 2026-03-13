import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User, MapPin, Play, Pause } from 'lucide-react';
import holi from "../assets/holi.jpg";
import diwali from "../assets/diwali.jpg";
import youth_dance from "../assets/youth_dance.jpg";
import womensDayVideo from "../assets/womensDayVideo.mp4";

const newsItems = [
  { 
    id: 1, 
    date: 'March 08, 2026', 
    title: 'Celebrating the Strength and Inspiration of Women', 
    excerpt: "From the heart of our community platform Hello Zindagi, we wish all the incredible women a very Happy International Women’s Day.May we continue to inspire and grow together, supported by all men & women in our lives.",
    category: 'Community',
    video: womensDayVideo,
    readTime: '4 min read',
    author: 'Hello Zindagi'
  },
  { 
    id: 2, 
    date: 'March 04, 2026', 
    title: 'Joyful Holi Celebration Brings Colours and Community Together', 
    excerpt: 'A vibrant Holi celebration was held in Melbourne at Jells Park, where families and children from the Indian community gathered to enjoy colours, music and dancing. The festive atmosphere was filled with joy and togetherness, while traditional food and sweets like Gujiya added a special touch to the celebration.',
    category: 'Culture & Arts',
    img: holi,
    author: 'Editorial Team'
  },
  { 
    id: 3, 
    date: 'October 16, 2026', 
    title: 'Diwali Celebration: Cross-Cultural', 
    excerpt: "The annual festival returns with more food, music, and vibrant performances. Be part of our biggest event fostering understanding and social cohesion. Come together to celebrate culture, community spirit, and enjoy a joyful day with family and friends.",
    category: 'Events',
    img: diwali,
    readTime: '3 min read',
    author: 'Events Desk'
  },
  {
    id: 4, 
    date: 'Dec 05, 2026', 
    title: 'Youth Mentorship Program Launch', 
    excerpt: 'Showcasing the energy, passion, and creativity of our youth through a vibrant dance performance that celebrates culture, talent, and self-expression. The performance highlights the dedication and enthusiasm of young performers while bringing the community together to appreciate art, rhythm, and cultural spirit.',
    category: 'Empowerment',
    img: youth_dance,
    readTime: '5 min read',
    author: 'Hello Zindagi'
  }
];

const MediaRenderer = ({ videoSrc, imgSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  if (videoSrc) {
    return (
      <>
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="img-bg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.6)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white',
            zIndex: 10,
            backdropFilter: 'blur(5px)'
          }}
        >
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
        </button>
      </>
    );
  }

  return (
    <div 
      className="img-bg"
      style={{
        position: 'absolute',
        inset: 0,
        background: `url('${imgSrc}') center/cover`,
        transition: 'transform 0.5s ease'
      }} 
    />
  );
};

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
              <div className="news-image-wrapper" style={{
                height: '240px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <MediaRenderer videoSrc={news.video} imgSrc={news.img} />
                
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)'
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
          border-color: rgba(255, 255, 255, 0.1);
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
