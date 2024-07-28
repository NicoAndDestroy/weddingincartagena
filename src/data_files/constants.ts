import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Weddingincartagena",
  tagline: "Weddings and events",
  description: "Planning your dream wedding in Cartagena? Look no further! At Le Mariage, we specialize in creating unforgettable weddings that reflect your unique style and vision. From intimate ceremonies to grand celebrations, our expert team is dedicated to ensuring every detail is perfect.",
  description_short: "At Le Mariage, we provide top-notch tools and expert guidance to help you plan your dream event. Our comprehensive services are designed to meet all your event needs..",
  url: "https://weddingincartagena.com/",
  author: "Nicolas Morales",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Wedding In Cartagena`,
  description: "At Le Mariage, we provide top-notch tools and expert guidance to help you plan your dream event. Our comprehensive services are designed to meet all your event needs.",
  image: ogImageSrc,
};
