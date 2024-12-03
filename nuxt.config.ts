// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        style: "background-color: #111; color: #f0f0f0;"
      }
    }
  },
  modules: [
    "@nuxt/test-utils/module"
  ]
})
