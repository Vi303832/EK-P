import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords, canonicalUrl, ogImage }) {
    const defaultTitle = 'Ekip İnşaat | Güven ve Kalite';
    const defaultDescription = 'Ekip İnşaat - Güven ve kalite, başarının temeli. Geleceğe yön veren projelerle yanınızdayız.';
    const defaultKeywords = 'Ekip İnşaat, inşaat, projeler, biten projeler, devam eden projeler, gelecek projeler, Türkiye';
    const siteUrl = 'https://ekip-beta.vercel.app/'; // Update with your actual domain

    return (
        <Helmet>
            {/* Basic meta tags */}
            <title>{title || defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}

            {/* Open Graph meta tags */}
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            {canonicalUrl && <meta property="og:url" content={`${siteUrl}${canonicalUrl}`} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:locale" content="tr_TR" />

            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
}

export default SEO; 