import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-08",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/ui", "@nuxtjs/kinde"],
  css: ["~/assets/css/main.css"],
  fonts: {
    experimental: {
      processCSSVariables: true,
      disableLocalFallbacks: true,
    },
  },
  vite: {
    plugins: [
      // @ts-expect-error bc types not updated
      tailwindcss(),
    ],
  },
});
