import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import SEO from './components/SEO';
import AboutPreview from './components/AboutPreview';
import Testimonials from './components/Testimonials';
import NewsHero from './components/NewsHero';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home View
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hello Zindagi",
  "url": "https://hellozindagi.com.au/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hellozindagi.com.au/news?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Home = () => (
  <>
    <SEO 
      title="Home | Hello Zindagi" 
      description="Hello Zindagi Inc is dedicated to supporting individuals and families of Indian origin in their journey of assimilation into Australian society." 
      url="https://hellozindagi.com.au/" 
      keywords="Hello Zindagi, Australian Indian, Radio, Integration" 
      schemaMarkup={homeSchema}
    />
    <Hero />
    <AboutPreview />
    <Features />
    <Testimonials />
  </>
);

// News & Events View
const newsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "News & Events | Hello Zindagi",
  "url": "https://hellozindagi.com.au/news",
  "description": "Stay updated with the latest news, events, and cultural exchange programs across Australia and India."
};

const NewsEvents = () => (
  <div style={{ paddingTop: 'var(--nav-height)' }}>
    <SEO 
      title="News & Events | Hello Zindagi" 
      description="Stay updated with the latest news, events, and cultural exchange programs across Australia and India." 
      url="https://hellozindagi.com.au/news" 
      keywords="Events, News, Culture, Australia, India" 
      schemaMarkup={newsSchema}
    />
    <NewsHero />
    <News />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-wrapper" style={{ overflowX: 'hidden' }}>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<NewsEvents />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
