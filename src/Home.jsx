import React from 'react';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import SEO from './components/SEO';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Hello Zindagi",
      "url": "https://hellozindagi.com.au/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://hellozindagi.com.au/news?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ItemList",
      "name": "Main Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "url": "https://hellozindagi.com.au/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "News & Events",
          "url": "https://hellozindagi.com.au/news"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "About Us",
          "url": "https://hellozindagi.com.au/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Contact Us",
          "url": "https://hellozindagi.com.au/contact"
        }
      ]
    }
  ]
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

export default Home;
