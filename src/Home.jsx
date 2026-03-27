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
      "url": "https://hellozindagi.org.au/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://hellozindagi.org.au/news?q={search_term_string}",
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
          "url": "https://hellozindagi.org.au/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "News & Events",
          "url": "https://hellozindagi.org.au/news"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "About Us",
          "url": "https://hellozindagi.org.au/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Contact Us",
          "url": "https://hellozindagi.org.au/contact"
        }
      ]
    }
  ]
};

const Home = () => (
  <>
    <SEO 
      title="Hello Zindagi | Indian-Australian Community in Australia" 
      description="Hello Zindagi connects Indian and Australian communities through culture, shared values, and support. Find events, news, and resources for Indians in Australia." 
      url="https://hellozindagi.org.au/" 
      ogTitle="Hello Zindagi | Indian-Australian Community"
      ogDescription="Connecting Indian and Australian communities through culture, dialogue, and shared experiences."
      ogImage="https://hellozindagi.org.au/og-image.jpg"
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
