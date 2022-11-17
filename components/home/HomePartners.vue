<template>
  <section class="section-margin companies">
    <div class="container">
      <div class="companies__top">
        <h2 class="h2title companies__title">{{ $t('index.residents') }}</h2>
        <a href="#" class="btn btn-secondary companies__btn">
          {{ $t('index.residents-btn') }}
        </a>
      </div>
      <ul class="section-margin companies__list residents">
        <li v-for="(item, index) in residents" :key="index" class="companies__item">
          <img v-lazy-load :data-src="item" :alt="`resident${++index}`" class="companies-item__img">
        </li>
        <li class="companies__item">25+</li>
      </ul>
      <div class="companies__top">
        <h2 class="h2title companies__title">{{ $t('index.partners') }}</h2>
        <a href="#" class="btn btn-secondary companies__btn">
          {{ $t('index.partners-btn') }}
        </a>
      </div>
      <ul class="companies__list partners">
        <li v-for="(item, index) in partners" :key="index" class="companies__item">
          <img v-lazy-load :data-src="item" :alt="`partner${++index}`" class="companies-item__img">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePartners',
  data () {
    return {
      partners: [
        '/images/index/partners/partner1.png',
        '/images/index/partners/partner2.png',
        '/images/index/partners/partner3.png',
        '/images/index/partners/partner3.png'
      ],
      residents: [
        '/images/index/residents/residents1.png',
        '/images/index/residents/residents2.png',
        '/images/index/residents/residents3.png',
        '/images/index/residents/residents4.png',
        '/images/index/residents/residents5.png',
        '/images/index/residents/residents6.png',
        '/images/index/residents/residents7.png',
        '/images/index/residents/residents8.png',
        '/images/index/residents/residents9.png',
        '/images/index/residents/residents10.png',
        '/images/index/residents/residents11.png',
        '/images/index/residents/residents12.png',
        '/images/index/residents/residents13.png'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.companies {
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
  &__title {
    margin: 0;
  }
  &__btn {
    padding: 1.5rem 2.4rem;
    @include w699 {
      display: none;
    }
  }
  &__list {
    display: grid;
    grid-gap: 2rem 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      grid-gap: 0 1.6rem;
    }
    @include w699 {
      grid-gap: 0.8rem 1rem;
    }
    &.partners {
      grid-template-columns: repeat(4, 1fr);
      margin-right: auto;
      margin-left: auto;
    }
    &.residents {
      grid-template-columns: repeat(7, 1fr);
      @include w1023 {
        grid-template-columns: repeat(4, 1fr);
      }
      @include w389 {
        grid-template-columns: repeat(3, 1fr);
      }
      .companies__item {
        &:nth-child(9),
        &:nth-child(13) {
          @include w1023 {
            display: none;
          }
        }
        &:last-child {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 4rem;
          line-height: 1.4;
          @include w1023 {
            font-weight: 900;
            font-size: 2.4rem;
            line-height: 1.33rem;
          }
        }
      }
    }
  }
  &-item {
    &__img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
