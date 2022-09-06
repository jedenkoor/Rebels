<template>
  <kinesis-container tag="section" class="promo">
    <h2 class="promo__title">{{ $t('index.promo') }}</h2>
    <div class="promo__box">
      <img src="/images/index/promo/promo.png" :alt="$t('index.promo')" class="promo__img">
      <kinesis-element
        tag="img"
        src="/images/index/promo/promo-left.png"
        :alt="$t('index.promo')"
        class="promo__left"
        :strength="-10"
      />
      <kinesis-element
        tag="img"
        src="/images/index/promo/promo-right.png"
        :alt="$t('index.promo')"
        class="promo__right"
        :strength="-10"
      />
    </div>
  </kinesis-container>
</template>

<script>
export default {
  name: 'IndexPromo'
}
</script>

<style lang="scss" scoped>
.promo {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    font-weight: 900;
    font-size: 6.8rem;
    line-height: 1.2;
    text-align: center;
    @include w1023 {
      margin-bottom: -3.6rem;
      font-size: 3.2rem;
      line-height: 1.25;
    }
  }
  &__box {
    position: relative;
    width: max-content;
    margin: 0 auto;
    @include w699 {
      width: 100%;
    }
  }
  &__img {
    width: 57.7rem;
    height: auto;
    @include w1023 {
      width: 65.5rem;
    }
  }
  &__left {
    position: absolute;
    bottom: 34%;
    left: 0;
    width: 32%;
    height: auto;
  }
  &__right {
    position: absolute;
    bottom: 33%;
    right: 2rem;
    width: 34%;
    height: auto;
  }
}
</style>
