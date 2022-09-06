<template>
  <section class="banner">
    <div class="container banner__container">
      <div class="banner__col">
        <h1 class="banner__title">
          <span>{{ $t('index.banner.title.span1') }}</span>
          <span>{{ $t('index.banner.title.span2') }}</span>
        </h1>
        <p class="banner__text">{{ $t('index.banner.text') }}</p>
        <div class="banner__btns">
          <a href="#" class="btn btn-tertiary banner__btn opensea">
            <img v-lazy-load data-src="/images/index/opensea.png" alt="Opensea">
            Opensea
          </a>
          <a href="#" class="btn btn-secondary banner__btn discord">
            <img v-lazy-load data-src="/images/index/discord.png" alt="Discord">
            Discord
          </a>
        </div>
      </div>
      <img v-lazy-load data-src="/images/index/banner.png" :alt="`${$t('index.banner.title.span1')} ${$t('index.banner.title.span2')}`" class="banner__img">
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexBanner'
}
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 16rem;
  @include w1023 {
    margin-top: -3.9rem;
    margin-bottom: 10.3rem;
  }
  @include w699 {
    margin-top: -3.3rem;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include w1023 {
      flex-direction: column-reverse;
    }
  }
  &__title {
    margin-top: 0;
    margin-bottom: 1.6rem;
    font-weight: 900;
    font-size: 6.4rem;
    line-height: 1.12;
    @include w1300 {
      font-size: 4.8rem;
      line-height: 1.17;
    }
    @include w1023 {
      text-align: center;
    }
    @include w699 {
      font-size: 3.2rem;
      line-height: 1.25;
      text-align: left;
    }
    span {
      display: block;
      &:first-child {
        background: linear-gradient(92.55deg, #9671FF 0.41%, #BB63FF 64.03%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
  &__text {
    max-width: 66.6rem;
    margin-bottom: 4rem;
    font-size: 1.6rem;
    color: var(--additional-gray);
    @include w1023 {
      text-align: center;
    }
    @include w699 {
      margin-bottom: 3.5rem;
      text-align: left;
    }
  }
  &__btns {
    display: flex;
    @include w1023 {
      justify-content: center;
    }
    @include w699 {
      flex-direction: column;
    }
  }
  &__btn {
    padding: 0.9rem 3.1rem;
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
  &__img {
    width: 59.9rem;
    height: auto;
    @include w1300 {
      width: 48.9rem;
    }
    @include w1023 {
      width: 50.6rem;
      height: auto;
      object-fit: contain;
      margin-bottom: -0.5rem;
    }
    @include w699 {
      margin-bottom: 3.7rem;
    }
  }
}
</style>
