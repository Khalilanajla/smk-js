// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [ "@nuxtjs/tailwindcss", "@vite-pwa/nuxt" ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwindcss.config.ts",
  },

  pwa: {
    manifest: {
      name: "SMKCoding",
      short_name: "smkcoding",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "../public/images/icons/img.png",
          sizes:"128x128",
          type: "image/png"        
        },
        {
          src: "../public/images/icons/download.jpeg",
          sizes:"128x128",
          type: "image/jpeg"        
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
})

