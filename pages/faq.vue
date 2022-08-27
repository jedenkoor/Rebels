<template>
  <section class="section-margin faq">
    <div class="container">
      <h1 class="title faq__title">{{ $t('faq.title') }}</h1>
      <p class="faq__text">{{ $t('faq.text') }}</p>
      <ul class="faq__list">
        <li v-for="(item, index) in faq" :key="index" ref="faqItems" :class="['faq__item', { 'active': index === activeIndex }]">
          <button class="faq-item__area" @click.prevent="openFaq(index)"/>
          <div class="faq-item__top">
            <h2>{{ item.title }}</h2>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.232 15.0001L9.11593 5.88398L10.8837 4.11621L21.7676 15.0001L10.8837 25.884L9.11593 24.1162L18.232 15.0001Z" fill="#A4A1A4"/>
            </svg>
          </div>
          <p class="faq-item__content" :style="{ height: index === activeIndex ? $refs.faqItems[index].querySelector('.faq-item__content').scrollHeight + 'px' : 0}">
            {{ item.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqPage',
  data () {
    return {
      activeIndex: null,
      faq: [
        {
          title: 'What is Rebel’s Club?',
          text: 'A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe. DeGods can be converted to DeadGods with DUST. A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe. DeGods can be converted to DeadGods with DUST.'
        },
        {
          title: 'What do I get with Genesis pass?',
          text: 'A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe. DeGods can be converted to DeadGods with DUST. A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe. DeGods can be converted to DeadGods with DUST.'
        }
      ]
    }
  },
  head () {
    return {
      title: this.$t('meta.faq.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.faq.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.faq.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.faq.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.faq.description') }
      ]
    }
  },
  methods: {
    openFaq (index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  &__title {
    margin-bottom: 0.8rem;
    text-align: center;
  }
  &__text {
    max-width: 86.1rem;
    margin: 0 auto 4rem;
    text-align: center;
    color: var(--additional-gray);
  }
  &__list {
    max-width: 97.4rem;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
    @include w1300 {
      max-width: 101rem;
    }
  }
  &__item {
    position: relative;
    padding: 4rem 3.2rem 3.2rem;
    background-color: var(--additional-hardblue);
    border-radius: 2.4rem;
    overflow: hidden;
    transition: padding-bottom 0.3s, box-shadow 0.2s;
    @include hover {
      &:hover,
      &:focus {
        box-shadow: 0 0.2rem 1.6rem rgba(255, 255, 255, 0.12);
      }
    }
    @include active {
      &:active {
        box-shadow: 0 0.2rem 1.6rem rgba(255, 255, 255, 0.12);
      }
    }
    @include w699 {
      padding: 2.4rem 1.6rem 1rem;
    }
    & + & {
      margin-top: 1.6rem;
      @include w699 {
        margin-top: 0.8rem;
      }
    }
    &.active {
      padding-bottom: 4rem;
      @include w699 {
        padding-bottom: 2.4rem;
      }
      svg {
        width: 3rem;
        transform: translateZ(0) rotate(-90deg);
      }
    }
  }
  &-item {
    &__area {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    &__top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.8rem;
      padding: 0;
      background: none;
      border: none;
      @include w699 {
        margin-bottom: 1.4rem;
      }
      h2 {
        margin: 0;
        font-weight: 900;
        font-size: 2.4rem;
        line-height: 1.33;
        @include w699 {
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 1.5;
        }
      }
    }
    &__content {
      pointer-events: none;
      height: 0;
      overflow: hidden;
      transition: height 0.3s;
      color: var(--additional-gray);
    }
  }
}
</style>
