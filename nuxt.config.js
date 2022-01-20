export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:5000/api'
  },

  head: {
    title: 'main',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/styles.scss',
    'hooper/dist/hooper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/ymapPlugin.js',
      mode: 'client'
    },
    {
      src: '~/plugins/clickOutside',
      mode: 'client'
    },
    {
      src: '~/plugins/vuejsPagination.js',
      mode: 'client'
    },
    '~/http/api-client.js',
    '~/repositories/index.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/fontawesome'
  ],

  optimizedImages: {
    optimizeImages: true,
    responsive: {
      sizes: [
        // 576,
        768,
        // 992,
        1200
        // 1590
      ],
      placeholder: true,
      placeholderSize: 20
    }
  },

  fontawesome: {
    component: 'icon',
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  server: {
    port: process.env.VUE_APP_PORT || 3000,
    host: '0.0.0.0'
  },

  router: {
    middleware: ['banner']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
