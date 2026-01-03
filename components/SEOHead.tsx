
import React from 'react';
import { SEOData } from '../types';

const SEOHead: React.FC<{ data: SEOData }> = ({ data }) => {
  React.useEffect(() => {
    document.title = data.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.description);

    // Canonical link injection
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', data.canonical || window.location.href);

    // Schema injection
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) existingScript.remove();

    if (data.schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data.schema);
      document.head.appendChild(script);
    }

    // Hreflang injection
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    if (data.hreflang) {
      data.hreflang.forEach(item => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', item.lang);
        link.setAttribute('href', item.href);
        document.head.appendChild(link);
      });
    }
  }, [data]);

  return null;
};

export default SEOHead;
