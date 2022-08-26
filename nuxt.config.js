const isDev = process.env.NODE_ENV !== 'production'
const prodUrl = 'https://rebels.com'

export default {
  target: 'static',
  publicRuntimeConfig: {
    prodUrl
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rebels',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },

      { hid: 'og:title', property: 'og:title', content: 'Rebels' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Rebels' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/share.jpg' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1446' },
      { hid: 'og:image:height', property: 'og:image:height', content: '936' },

      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#ffffff' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~/assets/styles/variables/mixins.scss',
    '~/assets/styles/global.scss'
  ],

  styleResources: {
    scss: ['@/assets/styles/variables/mixins.scss']
  },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: [400, 900]
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/scrollto.js',
    '~/plugins/router',
    { src: '~/plugins/v-click-outside.js', mode: 'client' },
    { src: '~/plugins/v-scroll-lock.js', mode: 'client' },
    { src: '~/plugins/vuelidate', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/svg/', prefix: 'svg' },
    { path: '~/components/index/', prefix: 'index' },
    { path: '~/components/roadmap/', prefix: 'roadmap' }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-healthcheck',
    '@nuxtjs/robots',
    'vue-scrollto/nuxt',
    ['nuxt-lazy-load', {
      images: true,
      videos: false,
      audios: false,
      iframes: false,
      native: false,
      polyfill: true,
      directiveOnly: true,

      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      defaultImage: '/images/placeholder.png',

      observerConfig: {
        rootMargin: '800px 0px 800px 0px'
      }
    }],
    ['@nuxtjs/i18n', {
      skipSettingLocaleOnNavigate: true,
      baseUrl: prodUrl,
      locales: [
        {
          code: 'en',
          name: 'English',
          iso: 'en'
        }
      ],
      // strategy: 'prefix',
      defaultLocale: 'en',
      vueI18n: {
        messages: {
          en: require('./locales/en.json')
        }
      }
    }],
    '@nuxtjs/sitemap'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Rebels',
      lang: 'ru'
    }
  },

  healthcheck: {
    path: '/healthz',
    contentType: 'text/plain'
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
    Sitemap: `${prodUrl}/sitemap.xml`
  },

  sitemap: {
    hostname: prodUrl,
    defaults: {
      lastmod: new Date()
    },
    trailingSlash: true
  },

  render: {
    static: {
      maxAge: '1y'
    },
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },

  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ['script', 'style', 'font'].includes(type)
    }
  },

  cache: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: !isDev,
    standalone: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  },

  extend (config, ctx) {
    // eslint-disable-next-line no-param-reassign
    config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
  }
}
