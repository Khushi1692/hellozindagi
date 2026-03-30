import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Calendar, User, Play, Pause } from 'lucide-react';
import holi from "../assets/holi.webp";
import diwali from "../assets/diwali.webp";
import youth_dance from "../assets/youth_dance.webp";
import multicultural from "../assets/multicultural.png";
import womensDayVideo from "../assets/womensDayVideo.mp4";

const newsItems = [
  { 
    id: 5, 
    date: 'March 28, 2026',
    isoDate: '2026-03-28',
    title: 'Culture Connects Us All', 
    excerpt: 'Culture Connects Us All was a vibrant event by Hello Zindagi celebrating Indian, Chinese, and Greek cultures during Cultural Diversity Week 2026. With dignitaries present, the evening featured yoga, Tai Chi, Bollywood dance, and cultural performances. Guests enjoyed a fusion of traditions, food, and festive moments together. The event beautifully highlighted unity, inclusivity, and community connection.',
    category: 'Culture & Arts',
    img: multicultural,
    imgAlt: 'Hello Zindagi Multicultural Week celebration event at Wantirna South',
    author: 'Hello Zindagi',
    
  },
  { 
    id: 1, 
    date: 'March 08, 2026',
    isoDate: '2026-03-08',
    title: "Celebrating the Strength and Inspiration of Women", 
    excerpt: "From the heart of our community platform Hello Zindagi, we wish all the incredible women a very Happy International Women's Day. May we continue to inspire and grow together, supported by all men & women in our lives.",
    category: 'Community',
    video: womensDayVideo,
    imgAlt: "Hello Zindagi International Women's Day celebration video",
    author: 'Hello Zindagi',
    link: 'https://www.facebook.com/share/v/189Vq6MTPt/'
  },
  { 
    id: 2, 
    date: 'March 04, 2026',
    isoDate: '2026-03-04',
    title: 'Joyful Holi Celebration Brings Colours and Community Together', 
    excerpt: 'A vibrant Holi celebration was held in Melbourne at Jells Park, where families and children from the Indian community gathered to enjoy colours, music and dancing.',
    category: 'Culture & Arts',
    img: holi,
    imgAlt: 'Indian community Holi celebration at Jells Park Melbourne with colours and families',
    author: 'Editorial Team',
    link: 'https://www.facebook.com/share/p/1achBtV5Lp/'
  },
  { 
    id: 3, 
    date: 'October 16, 2026',
    isoDate: '2026-10-16',
    title: 'Diwali Celebration: Cross-Cultural', 
    excerpt: "The annual festival returns with more food, music, and vibrant performances. Be part of our biggest event fostering understanding and social cohesion.",
    category: 'Events',
    img: diwali,
    imgAlt: 'Hello Zindagi annual Diwali celebration event with food music and performances in Melbourne',
    author: 'Events Desk',
    link: 'https://youtu.be/Y1waSvnD9Wk'
  },
  {
    id: 4, 
    date: 'Dec 05, 2026',
    isoDate: '2026-12-05',
    title: 'Youth Mentorship Program Launch', 
    excerpt: 'Showcasing the energy, passion, and creativity of our youth through a vibrant dance performance that celebrates culture, talent, and self-expression.',
    category: 'Empowerment',
    img: youth_dance,
    imgAlt: 'Hello Zindagi youth dance performance celebrating Indian Australian cultural talent',
    author: 'Hello Zindagi',
    link: 'https://www.facebook.com/share/p/1Nqn1j8FMA/?mibextid=wwXIfr'
  }
];

// ✅ JSON-LD structured data — helps Google show rich results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Hello Zindagi Community News",
  "url": "https://hellozindagi.org.au/news",
  "itemListElement": newsItems.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "NewsArticle",
      "headline": item.title,
      "description": item.excerpt,
      "datePublished": item.isoDate,
      "author": {
        "@type": "Organization",
        "name": item.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hello Zindagi",
        "url": "https://hellozindagi.org.au"
      },
      ...(item.link && { "url": item.link })
    }
  }))
};

const MediaRenderer = ({ videoSrc, imgSrc, imgAlt, loading = 'lazy', fetchpriority }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
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
          loop
          playsInline
          aria-label={imgAlt}   // ✅ accessibility + SEO for video
          className="img-bg"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            transition: 'transform 0.5s ease'
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}  // ✅ accessibility
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.6)', border: 'none',
            borderRadius: '50%', width: '50px', height: '50px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'white', zIndex: 10,
            backdropFilter: 'blur(5px)'
          }}
        >
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
        </button>
      </>
    );
  }

  return (
    <img 
      src={imgSrc}
      loading={loading}
      fetchpriority={fetchpriority}
      alt={imgAlt}   // ✅ descriptive alt text (was generic "Card graphic" before)
      width="640"
      height="360"   // ✅ explicit dimensions reduce layout shift (improves Core Web Vitals)
      className="img-bg"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
      }} 
    />
  );
};

const News = () => {
  return (
    <>
      {/* ✅ SEO meta tags for the /news page */}
      <Helmet>
        <title>News & Events | Hello Zindagi – Indian Australian Community</title>
        <meta name="description" content="Stay updated with the latest news, cultural events, and community stories from Hello Zindagi — connecting Indian and Australian communities across Melbourne and Australia." />
        <link rel="canonical" href="https://hellozindagi.org.au/news" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph — WhatsApp / Facebook previews */}
        <meta property="og:title" content="News & Events | Hello Zindagi" />
        <meta property="og:description" content="Latest news and community events from Hello Zindagi — celebrating Indian Australian culture, Holi, Diwali, Women's Day and more." />
        <meta property="og:url" content="https://hellozindagi.org.au/news" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hellozindagi.org.au/og-image.png" />

        {/* ✅ JSON-LD structured data */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
      </Helmet>

      <section
        aria-label="Community news and events"
        style={{
          padding: '4rem 0',
          background: 'var(--bg-main)',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        <div className="container">

          {/* ✅ Visible H1 heading — critical for Google to understand the page topic */}
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: 'var(--text-main)',
            marginBottom: '2.5rem',
            textAlign: 'center',
            fontWeight: 700
          }}>
            Community News &amp; Events
          </h1>

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
                // ✅ aria-label makes each card meaningful to screen readers + Google
                aria-label={`${news.category}: ${news.title}`}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div className="news-image-wrapper" style={{
                  aspectRatio: '16/9',
                  height: 'auto',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <MediaRenderer
                    videoSrc={news.video}
                    imgSrc={news.img}
                    imgAlt={news.imgAlt}   // ✅ passing descriptive alt text
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchpriority={index === 0 ? 'high' : undefined}
                  />
                  
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                  }} />

                  {/* ✅ Use <span> not a div for inline badge — better semantics */}
                  <span style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.75rem', fontWeight: 700,
                    textTransform: 'uppercase', color: 'white',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {news.category}
                  </span>
                </div>
                
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div className="card-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    {/* ✅ Use <time> tag with dateTime — Google reads this for freshness */}
                    <time
                      dateTime={news.isoDate}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      <Calendar size={14} aria-hidden="true" />
                      {news.date} {news.time && `| ${news.time}`}
                    </time>
                  </div>

                  {/* ✅ Use h2 inside article — proper heading hierarchy */}
                  <h2 style={{ fontSize: '1.3rem', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                    {news.title}
                  </h2>
                  
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {news.excerpt}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '1rem',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1.25rem',
                    marginTop: 'auto'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <User size={16} aria-hidden="true" />
                      <span>{news.author}</span>
                    </div>
                  
                  {news.link ? (
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      // ✅ Descriptive link text instead of just an icon — Google reads this
                      aria-label={`Read more about ${news.title}`}
                      className="read-more-btn"
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        color: 'var(--primary)', fontWeight: 600,
                        transition: 'gap 0.3s', textDecoration: 'none'
                      }}
                    >
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="read-more-btn" style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      color: 'var(--primary)', fontWeight: 600,
                      transition: 'gap 0.3s'
                    }}>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .news-card { width: 100%; max-width: 650px; }
        .news-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
        .news-card:hover .news-image-wrapper > div:first-child { transform: scale(1.05); }
        .news-card:hover .read-more-btn { gap: 0.8rem; color: var(--primary); }
      `}</style>
    </section>
    </>
  );
};

export default News;