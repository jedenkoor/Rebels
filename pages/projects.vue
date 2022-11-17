<template>
  <section class="section-margin roadmap">
    <div class="container">
      <h1 class="title projects__title">{{ $t('projects.title') }}</h1>
      <p class="projects__text">{{ $t('projects.text') }}</p>
      <ul class="projects__list">
        <li v-for="(item, index) in projects" :key="index" class="projects__item">
          <NuxtLink :to="item.link" class="projects-item__link">
            <div class="projects-item__col">
              <img v-lazy-load :data-src="item.logo" :alt="item.title" class="projects-item__name">
              <p v-if="item.text" class="projects-item__text">{{ item.text }}</p>
              <img v-lazy-load :data-src="item.icons" :alt="item.title" class="projects-item__icons">
            </div>
            <div class="projects-item__box">
              <img v-lazy-load :data-src="item.image" :alt="item.title" class="projects-item__img">
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsPage',
  layout: 'page',
  data () {
    return {
      projects: [
        {
          link: '#',
          title: 'Rebel Run',
          text: 'Mobile Endless Runner',
          logo: '/images/index/projects/game1-name.png',
          image: '/images/index/projects/game1.png',
          icons: '/images/index/projects/game1-icons.svg'
        },
        {
          link: '#',
          title: 'Still Early',
          text: 'Clothing & Apparel',
          logo: '/images/index/projects/game2-name.png',
          image: '/images/index/projects/game2.png',
          icons: '/images/index/projects/game2-icons.svg'
        }
      ]
    }
  },
  head () {
    return {
      title: this.$t('meta.projects.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.projects.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.projects.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.projects.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.projects.description') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__text {
    max-width: 75.8rem;
    margin-bottom: 4rem;
    color: var(--additional-gray);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 37.4rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      grid-template-rows: 32rem;
      grid-auto-rows: 32rem;
      grid-gap: 1.6rem;
    }
    @include w699 {
      grid-template-rows: 17rem;
      grid-auto-rows: 17rem;
    }
  }
  &__item {
    position: relative;
    border-radius: 1.6rem;
    transition: transform 0.2s;
    will-change: transform;
    @include hover {
      &:hover {
        transform: translateY(-0.5rem);
      }
    }
    @include w1199 {
      grid-column: span 12!important;
    }
    @include w699 {
      box-shadow: 0 2rem 8rem rgba(161, 41, 203, 0.25);
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
      grid-column: span 6;
      .projects-item {
        &__col {
          flex: 0 0 29%;
          padding-top: 2.4rem;
        }
        &__name {
          width: 16rem;
          height: 20.2rem;
          object-fit: contain;
          @include w699 {
            margin-top: -2rem;
            margin-bottom: 0;
          }
        }
        &__box {
          filter: drop-shadow(-10rem 5rem 10rem rgba(251, 73, 255, 0.25));
        }
      }
    }
    &:nth-child(2) {
      grid-column: span 6;
      .projects-item {
        &__col {
          flex: 0 0 29%;
        }
        &__name {
          width: 16rem;
          height: 20.2rem;
          object-fit: contain;
        }
      }
    }
    &:nth-child(3) {
      grid-column: span 4;
      .projects-item {
        &__name {
          width: 11.4rem;
          height: 13.6rem;
          object-fit: contain;
          @include w1300 {
            width: 19.1rem;
            height: 13.6rem;
          }
        }
        &__box {
          @include w1300 {
            width: 41%;
          }
        }
      }
    }
    &:nth-child(4) {
      grid-column: span 4;
      .projects-item {
        &__name {
          width: 11.4rem;
          height: 13.6rem;
          object-fit: contain;
          @include w1300 {
            width: 19.1rem;
            height: 13.6rem;
          }
        }
        &__box {
          filter: drop-shadow(-6rem 10rem 10rem rgba(0, 138, 216, 0.25));
          @include w1300 {
            width: 41%;
          }
        }
      }
    }
    &:nth-child(5) {
      grid-column: span 4;
      .projects-item {
        &__name {
          width: 11.4rem;
          height: 13.6rem;
          object-fit: contain;
          @include w1300 {
            width: 19.1rem;
            height: 13.6rem;
          }
        }
        &__box {
          @include w1300 {
            width: 41%;
          }
        }
      }
    }
  }
  &-item {
    &__link {
      position: relative;
      height: 100%;
      display: flex;
      padding: 2rem;
      background-color: var(--main-bg);
      border-radius: 1.6rem;
      overflow: hidden;
    }
    &__col {
      flex: 0 0 26%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      @include w1199 {
        flex: 0 0 32%!important;
      }
      svg {
        width: 7.8rem;
        height: auto;
        flex-shrink: 0;
        @include w1199 {
          margin-top: auto;
        }
      }
    }
    &__name {
      margin-bottom: auto;
      @include w1199 {
        width: 22rem!important;
        height: 15.8rem!important;
        object-fit: contain!important;
      }
      @include w699 {
        margin-bottom: 1rem;
        width: 18.2rem!important;
        height: 9.2rem!important;
      }
    }
    &__text {
      max-width: 19rem;
      margin-bottom: 0.8rem;
      font-size: 1.2rem;
      color: var(--additional-gray);
      @include w699 {
        display: none;
      }
    }
    &__icons {
      margin-bottom: 4rem;
      @include w1199 {
        margin-bottom: 2rem;
      }
      @include w699 {
        margin-bottom: 0;
      }
    }
    &__box {
      position: absolute;
      top: 0;
      right: 0;
      width: 67.4%;
      height: 100%;
      @include w1199 {
        width: 68%!important;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        clip-path: polygon(17% 0, 100% 0, 100% 136%, 0 94%);
        @include w1199 {
          clip-path: polygon(17% 0, 100% 0, 100% 134%, 0 92%);
        }
      }
    }
  }
}
</style>
