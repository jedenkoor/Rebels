<template>
  <section class="banner">
    <div class="container banner__container">
      <div class="banner__logo">
        <img src="/images/logo-images.png" alt="Logo">
      </div>
      <div class="banner__title">
        One-stop access to
        <client-only>
          <vue-typer
            :text="['find like minded people', 'launch web3 projects', 'get market insights', 'reach web3 audience', 'get project airdrops']"
            erase-style="backspace"
            :erase-delay="50"
          />
        </client-only>
      </div>
      <p class="banner__text">{{ $t('index.banner.text') }}</p>
      <div class="banner__btns">
        <a href="#" class="btn btn-secondary banner__btn opensea">
          <img v-lazy-load data-src="/images/index/opensea.png" alt="Opensea">
          Membership
        </a>
        <a href="#" class="btn btn-secondary banner__btn discord">
          <img v-lazy-load data-src="/images/index/discord.png" alt="Discord">
          Discord
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'home',
  data () {
    return {
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
      this.syncHeight()
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
      this.syncHeight()
      this.winW = window.innerWidth
      this.$nuxt.$emit('win-resize', { winW: this.winW })
    },
    syncHeight () {
      document.documentElement.style.setProperty('--height', `${window.innerHeight * 0.01}px`)
    }
  }
}
</script>

<style lang="scss">
.banner {
  height: calc((var(--vh, 1vh) * 100) - 8.2rem);
  min-height: 67rem;
  display: flex;
  align-items: center;
  @include w699 {
    min-height: 72rem;
    overflow-x: hidden;
  }
  &__container {
    transform: translateY(-2rem);
    display: flex;
    align-items: center;
    flex-direction: column;
    @include w1023 {
      padding-top: 4rem;
    }
  }
  &__logo {
    width: 23rem;
    @include w1400 {
      width: 20rem;
    }
    @include w699 {
      margin-bottom: 3rem;
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 1.6rem;
    font-weight: 900;
    font-size: 6.4rem;
    line-height: 1.12;
    text-align: center;
    @include w1023 {
      font-size: 4.8rem;
    }
    @include w699 {
      width: 100%;
      align-items: flex-start;
      font-size: 2.8rem;
      line-height: 1.33;
      text-align: left;
      white-space: nowrap;
    }
  }
  &__text {
    max-width: 82.2rem;
    margin-bottom: 4rem;
    font-size: 1.6rem;
    color: var(--additional-gray);
    text-align: center;
    @include w699 {
      text-align: left;
    }
    @include w389 {
      font-size: 1.4rem;
    }
  }
  &__btns {
    display: flex;
    @include w699 {
      width: 100%;
      flex-direction: column;
    }
  }
  &__btn {
    width: 24rem;
    height: 6rem;
    padding: 0.9rem 3.2rem;
    text-transform: uppercase;
    @include w699 {
      width: 100%;
    }
    &:not(:last-child) {
      margin-right: 1.6rem;
      @include w699 {
        margin-right: 0;
        margin-bottom: 1.6rem;
      }
    }
    img {
      width: 4rem;
      height: auto;
      margin-right: 1.6rem;
    }
  }
}
</style>
