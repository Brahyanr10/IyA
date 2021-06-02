export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "I-y-A",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["element-ui/lib/theme-chalk/index.css", "swiper/dist/css/swiper.css"],
  plugins: [
    "~/plugins/element",
    { src: "~/plugins/typed.js", ssr: true },
    { src: "~/plugins/countryFlags.js", ssr: false },
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
    { src: "@/plugins/i18n" }
  ],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [],
  build: {}
};
