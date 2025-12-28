
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
  }, [data]);

  return null;
};

export default SEOHead;
