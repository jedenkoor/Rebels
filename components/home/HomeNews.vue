<template>
  <section class="section-margin news">
    <div class="container">
      <div class="news__top">
        <h2 class="h2title news__title">{{ $t('index.news.title') }}</h2>
        <a href="#" class="btn btn-secondary news__btn">
          {{ $t('index.news.more') }}
        </a>
      </div>
      <ul class="news__list">
        <li v-for="(item, index) in news" :key="index" class="news__item">
          <NuxtLink :to="item.link" class="news-item__link">
            <img v-lazy-load :data-src="item.image" :alt="item.title" class="news-item__img">
            <p class="news-item__title">{{ item.title }}</p>
            <p class="news-item__text">{{ item.text }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeNews',
  data () {
    return {
      news: [
        {
          link: '#',
          title: 'Rebel Run Alpha Pass',
          text: 'Integrate your collection in our metaverse. Cross-IP games are the future!',
          image: '/images/index/news.jpg'
        },
        {
          link: '#',
          title: 'Launch web3 projects with us',
          text: 'News',
          image: '/images/index/news.jpg'
        },
        {
          link: '#',
          title: 'Our vision on sustainable tokenomics in gaming',
          text: 'News',
          image: '/images/index/news.jpg'
        },
        {
          link: '#',
          title: 'Rebel’s club manifesto',
          text: 'News',
          image: '/images/index/news.jpg'
        },
        {
          link: '#',
          title: 'How to naviagate our discord',
          text: 'News',
          image: '/images/index/news.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    @include w1023 {
      margin-bottom: 1.6rem;
    }
    @include w699 {
      margin-bottom: 4rem;
    }
  }
  &__title {
    margin-bottom: 0;
  }
  &__btn {
    padding: 1.5rem 2.4rem;
    @include w699 {
      display: none;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 12.4rem;
    grid-auto-rows: 12.4rem;
    grid-gap: 2.4rem 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      grid-gap: 1rem;
    }
    @include w699 {
      grid-template-rows: 10.8rem;
      grid-auto-rows: 10.8rem;
    }
  }
  &__item {
    position: relative;
    grid-column: span 5;
    border-radius: 1.6rem;
    @include w1300 {
      grid-column: span 6;
    }
    @include w1023 {
      grid-column: 1 / -1;
    }
    &:before {
      content: '';
      position: absolute;
      top: -0.1rem;
      left: -0.1rem;
      z-index: -1;
      width: calc(100% + 0.2rem);
      height: calc(100% + 0.2rem);
      border-radius: 1.6rem;
      background: linear-gradient(104.94deg, #694AC2 0%, rgba(255, 255, 255, 0) 100%);
    }
    &:nth-child(1) {
      grid-column: span 7;
      grid-row: span 4;
      @include w1300 {
        grid-column: span 12;
      }
      @include w1023 {
        grid-row: span 3;
      }
      @include w699 {
        grid-row: span 2;
      }
      .news-item {
        &__link {
          padding-right: 3.2rem;
          padding-bottom: 3.2rem;
          @include w1023 {
            padding-right: 2.4rem;
            padding-bottom: 2.4rem;
          }
        }
        &__title {
          margin-top: auto;
          margin-bottom: 0.8rem;
          position: relative;
          font-size: 4.8rem;
          line-height: 1.2;
          @include w699 {
            font-size: 2.4rem;
            line-height: 1.33;
          }
        }
        &__text {
          position: relative;
          font-size: 1.7rem;
          @include w699 {
            font-size: 1.6rem;
          }
        }
        &__img {
          left: 0;
          width: 100%;
          border-radius: 1.6rem;
          clip-path: none;
        }
      }
    }
  }
  &-item {
    &__link {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 34% 0 3.2rem;
      background-color: var(--main-bg);
      border-radius: 1.6rem;
      overflow: hidden;
      @include w1023 {
        padding: 0 34% 0 2.4rem;
      }
      @include w699 {
        padding: 0 39% 0 1.6rem;
      }
    }
    &__title {
      margin-bottom: 0.4rem;
      font-weight: 900;
      font-size: 2rem;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @include w699 {
        font-size: 1.6rem;
      }
    }
    &__text {
      margin-bottom: 0;
      color: var(--additional-gray);
      @include w699 {
        font-size: 1.6rem;
      }
    }
    &__img {
      position: absolute;
      top: 0;
      right: 0;
      width: 32%;
      height: 100%;
      object-fit: cover;
      clip-path: polygon(17% 0, 100% 0, 100% 136%, 0 94%);
      @include w699 {
        width: 35%;
      }
    }
  }
}
</style>
