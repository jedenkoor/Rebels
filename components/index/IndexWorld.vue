<template>
  <section class="section-margin world">
    <h2 class="h2title world__title">{{ $t('index.world') }}</h2>
    <img v-lazy-load data-src="/images/index/world.png" alt="World" class="world__img">
  </section>
</template>

<script>
export default {
  name: 'IndexWorld'
}
</script>

<style lang="scss" scoped>
.world {
  &__title {
    margin-bottom: 1rem;
    text-align: center;
  }
  &__img {
    width: 100%;
  }
}
</style>
