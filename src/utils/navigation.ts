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
      { name: "lemariagecartagena@hotmail.com", url: "mailto:lemariagecartagena@hotmail.com"},
      { name: "+573004128389", url: "https://wa.me/+573004128389?text=%20%C2%A1Cont%C3%A1ctanos%20hoy%20y%20comienza%20a%20planificar%20la%20celebraci%C3%B3n%20de%20tus%20sue%C3%B1os!" },
      { name: "Cartagena, Colombia", url: "https://www.google.com/maps/place/Cartagena,+Cartagena+Province,+Bolivar/data=!4m2!3m1!1s0x8ef625e7ae9d1351:0xb161392e033f26ca?sa=X&ved=1t:242&ictx=111" },
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
      { name: "Instagram", url: "https://www.instagram.com/lemariagectg_weddingplanner/" },
      { name: "Facebook", url: "https://www.instagram.com/lemariagectg_weddingplanner/?igsh=MXh1aXE0cTM0Y2Nibg%3D%3D" },
      { name: "Tiktok", url: "https://www.instagram.com/lemariagectg_weddingplanner/?igsh=MXh1aXE0cTM0Y2Nibg%3D%3D" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/lemariagectg_weddingplanner/",
  tiktok: "https://www.tiktok.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};