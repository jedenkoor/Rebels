<template>
  <div class="wrapper">
    <Background/>
    <Header/>
    <main class="content">
      <div class="notfound">
        <div class="notfound__col">
          <span class="notfound__title">404</span>
          <p class="notfound__text">{{ $t('error.text') }}</p>
          <NuxtLink to="/" class="btn btn-primary notfound__btn">
            <span>{{ $t('error.btn') }}</span>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: this.$t('meta.error.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.error.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.error.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.error.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.error.description') },
        { hid: 'og:url', property: 'og:url', content: `${this.$nuxt.context.$config.prodUrl}${this.$nuxt.$route.path}` },
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include hover {
    padding-right: 0.6rem;
  }
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.9rem;
  padding-bottom: 10rem;
  @include w1023 {
    padding-top: 0;
    padding-bottom: 0;
  }
  @include w767 {
    padding-bottom: 8rem;
  }
}
.notfound {
  display: flex;
  align-items: center;
  justify-content: center;
  @include w1199 {
    flex-direction: column;
  }
  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    margin-bottom: 0.8rem;
    font-weight: 700;
    font-size: 16rem;
    line-height: 1;
    @include w1023 {
      font-size: 11rem;
    }
    @include w767 {
      font-size: 6.4rem;
    }
  }
  &__text {
    margin-bottom: 6.4rem;
    font-size: 1.6rem;
  }
  &__btn {
    padding: 0.8rem 1.6rem;
  }
  img {
    width: 50rem;
    margin-left: 14.7rem;
    @include w1199 {
      margin-top: 5rem;
      margin-left: 8.7rem;
    }
    @include w767 {
      display: none;
    }
  }
}
</style>
