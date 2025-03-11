import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-08",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxtjs/kinde",
    "@nuxthub/core",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  fonts: {
    experimental: {
      processCSSVariables: true,
      disableLocalFallbacks: true,
    },
  },
  hub: {
    database: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});