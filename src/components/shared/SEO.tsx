import { Helmet } from 'react-helmet-async';
import { siteMetadata, pageMetadata } from '../../utils/seo';

interface SEOProps {
  page: keyof typeof pageMetadata;
  customTitle?: string;
  customDescription?: string;
}

export function SEO({ page, customTitle, customDescription }: SEOProps) {
  const metadata = pageMetadata[page];
  
  return (
    <Helmet>
      <title>{customTitle || metadata.title}</title>
      <meta name="description" content={customDescription || metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={customTitle || metadata.title} />
      <meta property="og:description" content={customDescription || metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={customTitle || metadata.title} />
      <meta name="twitter:description" content={customDescription || metadata.description} />
      
      {/* Additional SEO tags */}
      <link rel="canonical" href={`${siteMetadata.siteUrl}/${page}`} />
    </Helmet>
  );
} 