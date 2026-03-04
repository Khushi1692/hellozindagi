import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home View (Hero + News/Events)
const Home = () => (
  <>
    <Hero />
    <Schedule />
    <News />
  </>
);

// News & Events View
const NewsEvents = () => (
  <div style={{ paddingTop: 'var(--nav-height)' }}>
    <Schedule />
    <News />
  </div>
);

function App() {
  return (
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
  );
}

export default App;
