import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title = 'Digital Marketing Colombo | Premier Digital (Pvt) Ltd',
  description = 'Looking for digital marketing Colombo services? Premier Digital builds fast, SEO-ready websites and high ROI campaigns for Sri Lankan businesses.',
  image = 'https://premierdigital.lk/cropped-pd-Logo-Png.webp',
  url = 'https://premierdigital.lk',
}: SEOHeadProps) {
  const location = useLocation();

  useEffect(() => {
    // Determine page-specific SEO metadata
    let pageTitle = title;
    let pageDesc = description;
    let canonicalUrl = `https://premierdigital.lk${location.pathname}`;

    if (location.pathname === '/about') {
      pageTitle = 'About Us | Premier Digital (Pvt) Ltd Colombo';
      pageDesc = 'Learn about Premier Digital, Colombo’s premier digital marketing and software engineering agency driving measurable ROI for modern brands.';
    } else if (location.pathname === '/services') {
      pageTitle = 'Digital Marketing Services & Web Design | Premier Digital';
      pageDesc = 'Explore our expert services including SEO, PPC advertising, custom web development, social media marketing, and bespoke software solutions in Sri Lanka.';
    } else if (location.pathname === '/works') {
      pageTitle = 'Our Works & Case Studies | Premier Digital';
      pageDesc = 'Explore our portfolio of high-performing digital marketing campaigns, high-speed web apps, and brand transformations in Colombo and worldwide.';
    } else if (location.pathname === '/contact') {
      pageTitle = 'Contact Us | Premier Digital Colombo';
      pageDesc = 'Get in touch with Premier Digital for your digital marketing, SEO, and web development needs in Colombo, Sri Lanka. Free consultations available.';
    } else if (location.pathname === '/privacy-policy') {
      pageTitle = 'Privacy Policy | Premier Digital';
      pageDesc = 'Read the Privacy Policy of Premier Digital (Pvt) Ltd to understand how we safeguard your data and privacy rights.';
    } else if (location.pathname === '/terms-and-conditions') {
      pageTitle = 'Terms and Conditions | Premier Digital';
      pageDesc = 'Review the Terms and Conditions for using Premier Digital website, services, and software solutions.';
    }

    // Update document title
    document.title = pageTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Update Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', pageTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', pageDesc);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Inject Schema.org JSON-LD structured data
    let jsonLdScript = document.querySelector('#schema-json-ld');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'schema-json-ld';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "DigitalMarketingAgency",
      "name": "Premier Digital (Pvt) Ltd",
      "alternateName": "Premier Digital Sri Lanka",
      "url": "https://premierdigital.lk",
      "logo": "https://premierdigital.lk/cropped-pd-Logo-Png.webp",
      "image": "https://premierdigital.lk/cropped-pd-Logo-Png.webp",
      "description": pageDesc,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Colombo 03",
        "addressLocality": "Colombo",
        "addressRegion": "Western Province",
        "postalCode": "00300",
        "addressCountry": "LK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.9271,
        "longitude": 79.8612
      },
      "telephone": "+94 11 234 5678",
      "email": "sales@premierdigital.lk",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/premierdigital.lk",
        "https://www.linkedin.com/company/premierdigital",
        "https://twitter.com/premierdigital"
      ]
    };

    jsonLdScript.textContent = JSON.stringify(schemaData, null, 2);

  }, [location.pathname, title, description, image, url]);

  return null;
}
