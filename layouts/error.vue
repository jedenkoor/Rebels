<template>
  <div class="notfound">
    <p class="notfound__text">404</p>
    <nuxt-link to="/" class="notfound__btn">На главную</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  &__text {
    margin-bottom: 6rem;
    font-size: 2.1rem;
    letter-spacing: 0.11em;
    color: #CDCDCD;
    @include w1023 {
      font-size: 2.4rem;
    }
    @include w699 {
      margin-bottom: 4rem;
      font-size: 1.4rem;
    }
  }
  &__btn {
    padding: 1.8rem 4.7rem;
    font-size: 1.5rem;
    @include w699 {
      padding: 1.4rem 3.2rem;
      font-size: 1.4rem;
    }
  }
}
</style>
