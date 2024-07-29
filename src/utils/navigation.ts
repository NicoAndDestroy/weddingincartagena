// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/#hero" },
  { name: "About Us", url: "/#about" },
  { name: "Our Values", url: "/#values" },
  { name: "Cartagena", url: "/#cartagena" },
  { name: "FAQs", url: "/#faqs" },
  { name: "Contact Us", url: "/#contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Contact",
    links: [
      { name: "contact@weddingincartagena.com", url: "mailto:contact@weddingincartagena.com" },
      { name: "+573226943874", url: "https://wa.me/573226943874?text=%20%C2%A1Cont%C3%A1ctanos%20hoy%20y%20comienza%20a%20planificar%20la%20celebraci%C3%B3n%20de%20tus%20sue%C3%B1os!" },
    ],
  },
  {
    section: "Site",
    links: [
      { name: "About Us", url: "/#about" },
      { name: "Our Values", url: "/#values" },
      { name: "FAQs", url: "/#faqs" },
    ],
  },
  {
    section: "Social",
    links: [
      { name: "Instagram", url: "https://www.instagram.com/lemariagectg_weddingplanner/?igsh=MXh1aXE0cTM0Y2Nibg%3D%3D" },
      { name: "Facebook", url: "https://www.instagram.com/lemariagectg_weddingplanner/?igsh=MXh1aXE0cTM0Y2Nibg%3D%3D" },
      { name: "Tiktok", url: "https://www.instagram.com/lemariagectg_weddingplanner/?igsh=MXh1aXE0cTM0Y2Nibg%3D%3D" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/lemariagectg_weddingplanner/?igsh=MXh1aXE0cTM0Y2Nibg%3D%3D",
  tiktok: "https://www.tiktok.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};