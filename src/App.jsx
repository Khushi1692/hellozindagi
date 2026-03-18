import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';

// Lazy load components for performance
const Home = lazy(() => import('./Home'));
const NewsEvents = lazy(() => import('./NewsEvents'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

// Temporary Loading Component
const PageLoading = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'var(--bg-main)'
  }}>
    <div className="loader"></div>
    <style>{`
      .loader {
        width: 40px;
        height: 40px;
        border: 3px solid var(--primary-light);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
    `}</style>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-wrapper" style={{ overflowX: 'hidden' }}>
          <ScrollToTop />
          <Navbar />
          <main>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsEvents />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
