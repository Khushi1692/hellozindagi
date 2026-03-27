import React from 'react';
import NewsHero from './components/NewsHero';
import News from './components/News';
import SEO from './components/SEO';

const newsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "News & Events | Hello Zindagi",
  "url": "https://hellozindagi.org.au/news",
  "description": "Stay updated with the latest news, events, and cultural exchange programs across Australia and India.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hellozindagi.org.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News & Events",
        "item": "https://hellozindagi.org.au/news"
      }
    ]
  }
};

const NewsEvents = () => (
  <div style={{ paddingTop: 'var(--nav-height)' }}>
    <SEO 
      title="News & Events | Hello Zindagi" 
      description="Stay updated with the latest news, events, and cultural exchange programs across Australia and India." 
      url="https://hellozindagi.org.au/news" 
      keywords="Events, News, Culture, Australia, India" 
      schemaMarkup={newsSchema}
    />
    <NewsHero />
    <News />
  </div>
);

export default NewsEvents;
