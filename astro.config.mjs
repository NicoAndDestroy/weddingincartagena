import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://weddingincartagena.com",
  output: "static",

  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  server: {
    port: 4545,
    host: true,
  },
  integrations: [
    sitemap({
  i18n: {
    defaultLocale: "en",
    locales: {
      en: "en",
      es: "es",
    },
  },
  filter: (page) => {
    const pathname = new URL(page).pathname;

    return (
      !pathname.startsWith("/cuentos") &&
      !pathname.startsWith("/es/cuentos") &&
      !pathname.includes("first.chapter")
    );
  },
}),
    starlight({
      title: "WeddinginCartagena",
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        de: { label: "Deutsch", lang: "de" },
        es: { label: "Español", lang: "es" },
        fa: { label: "Persian", lang: "fa", dir: "rtl" },
        fr: { label: "Français", lang: "fr" },
        ja: { label: "日本語", lang: "ja" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      sidebar: [
        {
          label: "Quick Start Guides",
          translations: {
            de: "Schnellstartanleitungen",
            es: "Guías de Inicio Rápido",
            fa: "راهنمای شروع سریع",
            fr: "Guides de Démarrage Rapide",
            ja: "クイックスタートガイド",
            "zh-cn": "快速入门指南",
          },
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          items: [{ autogenerate: { directory: "construction" } }],
        },
        {
          label: "Advanced Topics",
          items: [{ autogenerate: { directory: "advanced" } }],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NicoAndDestroy",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/lemariagectg_weddingplanner?igsh=MXh1aXE0cTM0Y2Nibg==",
        },
        {
          icon: "tiktok",
          label: "TikTok",
          href: "https://www.tiktok.com/@le.mariage.ctg?_t=ZS-8vfhVOohLmK&_r=1",
        },
      ],
      head: [
  {
    tag: "meta",
    attrs: {
      property: "og:image",
      content: "https://weddingincartagena.com/social.webp",
    },
  },
  {
    tag: "meta",
    attrs: {
      property: "og:image:alt",
      content:
        "Luxury wedding planning in Cartagena by Wedding in Cartagena.",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:card",
      content: "summary_large_image",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:image",
      content: "https://weddingincartagena.com/social.webp",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:image:alt",
      content:
        "Luxury wedding planning in Cartagena by Wedding in Cartagena.",
    },
  },
],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
});