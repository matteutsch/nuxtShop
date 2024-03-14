// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "assets/main.css"],
  app: {
    head: {
      title: "Nuxt-3-Shop",
      meta: [
        {
          name: "description",
          content: "Everything about Nuxt3",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
        },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
