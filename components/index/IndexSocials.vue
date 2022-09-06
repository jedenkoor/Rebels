<template>
  <section class="socials">
    <div class="container">
      <div class="gradient-border socials__content">
        <div class="socials__col">
          <p class="socials__text">{{ $t('index.socials.text') }}</p>
          <p class="socials__title">{{ $t('index.socials.title') }}</p>
        </div>
        <div class="socials__btns">
          <a href="#" class="btn btn-tertiary socials__btn opensea">
            <img v-lazy-load data-src="/images/index/opensea.png" alt="Opensea">
            Opensea
          </a>
          <a href="#" class="btn btn-secondary socials__btn discord">
            <img v-lazy-load data-src="/images/index/discord.png" alt="Discord">
            Discord
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexSocials'
}
</script>

<style lang="scss" scoped>
.socials {
  margin-top: 0.1rem;
  margin-bottom: 12rem;
  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6.4rem 4rem;
    background: var(--main-bg);
    border-radius: 1.6rem;
    @include w1023 {
      flex-direction: column;
      text-align: center;
    }
    @include w699 {
      padding: 1.6rem;
    }
    &:before {
      border-radius: 1.6rem;
    }
  }
  &__text {
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    color: var(--additional-violet);
  }
  &__title {
    max-width: 80%;
    font-weight: 900;
    font-size: 3.2rem;
    line-height: 1.25;
    @include w1300 {
      max-width: 94%;
    }
    @include w1023 {
      max-width: none;
      margin-bottom: 6.4rem;
      font-size: 2.4rem;
      line-height: 1.33;
    }
  }
  &__btns {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    @include w699 {
      width: 100%;
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
}
</style>
