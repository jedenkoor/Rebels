<template>
  <section class="section-margin create">
    <div class="container">
      <h1 class="title create__title">{{ $t('create-with-us.title') }}</h1>
      <p class="create__text">{{ $t('create-with-us.text') }}</p>
      <FormBase page="contact"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreatePage',
  layout: 'page',
  head () {
    return {
      title: this.$t('meta.create-with-us.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.create-with-us.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.create-with-us.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.create-with-us.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.create-with-us.description') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.create {
  &__title {
    margin-bottom: 1.6rem;
    text-align: center;
  }
  &__text {
    max-width: 86.1rem;
    margin: 0 auto 6rem;
    text-align: center;
    color: var(--additional-gray);
  }
}
</style>
