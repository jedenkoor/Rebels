<template>
  <div class="wrapper">
    <Background/>
    <Header/>
    <main class="content">
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      timer: null,
      scrollY: null,
      direction: null,
      winW: null
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        class: this.loading ? '' : 'loaded',
        ...i18nHead.htmlAttrs
      },
      title: this.$t('meta.index.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.index.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.index.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.index.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.index.description') },
        { hid: 'og:url', property: 'og:url', content: `${this.$nuxt.context.$config.prodUrl}${this.$nuxt.$route.path}` },
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  },
  mounted () {
    if (process.browser) {
      setTimeout(() => {
        this.loading = false
      }, 500)
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleScroll () {
      const scrollDirection = this.scrollY > window.scrollY ? 'up' : 'down'
      this.scrollY = window.scrollY
      this.$nuxt.$emit('win-scroll', { scrollY: this.scrollY, direction: scrollDirection })
    },
    handleResize () {
      clearTimeout(this.timer)
      document.documentElement.classList.add('resizing')
      this.timer = setTimeout(() => {
        document.documentElement.classList.remove('resizing')
      }, 300)
      this.winW = window.innerWidth
      this.$nuxt.$emit('win-resize', { winW: this.winW })
    }
  }
}
</script>
