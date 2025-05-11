/**
 * Utility service for managing SEO metadata
 */
const SEOService = {
    /**
     * Updates all SEO related metadata for a page
     * 
     * @param {Object} options SEO options
     * @param {string} options.title Page title
     * @param {string} options.description Meta description
     * @param {string} options.keywords Meta keywords
     * @param {string} options.ogTitle Open Graph title
     * @param {string} options.ogDescription Open Graph description
     * @param {string} options.ogImage Open Graph image URL
     * @param {string} options.canonicalUrl Canonical URL
     */
    updateAll({ title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl }) {
        // Update page title
        document.title = title || 'Ekip İnşaat, Ekip Boya ve Ekip Boya İnşaat';

        // Update meta description
        this.updateMetaTag('description', description || 'Ekip İnşaat, Ekip Boya ve Ekip Boya İnşaat - Güven ve kalite, başarının temeli. Boya ve inşaat sektöründe lider projelerle yanınızdayız.');

        // Update meta keywords
        if (keywords) {
            this.updateMetaTag('keywords', keywords);
        }

        // Update Open Graph tags
        this.updateMetaTag('og:title', ogTitle || title || 'Ekip İnşaat, Ekip Boya ve Ekip Boya İnşaat');
        this.updateMetaTag('og:description', ogDescription || description || 'Ekip İnşaat, Ekip Boya ve Ekip Boya İnşaat - Güven ve kalite, başarının temeli. Boya ve inşaat sektöründe lider projelerle yanınızdayız.');
        if (ogImage) {
            this.updateMetaTag('og:image', ogImage);
        }

        // Update canonical URL
        this.updateCanonicalUrl(canonicalUrl);
    },

    /**
     * Updates or creates a meta tag
     * 
     * @param {string} name The meta tag name or property
     * @param {string} content The meta tag content
     */
    updateMetaTag(name, content) {
        if (!content) return;

        // Check if name contains a colon (e.g., og:title)
        const isProperty = name.includes(':');

        // Select based on name or property attribute
        let meta;
        if (isProperty) {
            meta = document.querySelector(`meta[property="${name}"]`);
        } else {
            meta = document.querySelector(`meta[name="${name}"]`);
        }

        // Create meta tag if it doesn't exist
        if (!meta) {
            meta = document.createElement('meta');
            if (isProperty) {
                meta.setAttribute('property', name);
            } else {
                meta.setAttribute('name', name);
            }
            document.head.appendChild(meta);
        }

        // Set content
        meta.setAttribute('content', content);
    },

    /**
     * Updates or creates a canonical URL link tag
     * 
     * @param {string} url The canonical URL
     */
    updateCanonicalUrl(url) {
        if (!url) return;

        let link = document.querySelector('link[rel="canonical"]');

        // Create link tag if it doesn't exist
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }

        // Set href
        link.setAttribute('href', url);
    }
};

export default SEOService; 