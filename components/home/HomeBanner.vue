<template>
  <section class="banner section-margin">
    <div class="container banner__container">
      <div class="banner__logo">
        <SvgLogo/>
      </div>
      <div class="banner__title">
        One stop access to
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
  name: 'HomeBanner'
}
</script>

<style lang="scss" scoped>
.banner {
  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    @include w1023 {
      align-items: flex-start;
      padding-top: 4rem;
    }
  }
  &__logo {
    width: 17.2rem;
    @include w1023 {
      display: none;
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
      align-items: flex-start;
      text-align: left;
      font-size: 4.8rem;
    }
    @include w699 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 1.33;
    }
  }
  &__text {
    max-width: 82.2rem;
    margin-bottom: 4rem;
    font-size: 1.6rem;
    color: var(--additional-gray);
    text-align: center;
    @include w1023 {
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
