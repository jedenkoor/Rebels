<template>
  <section class="section-margin roadmap">
    <div class="container">
      <h1 class="title roadmap__title">{{ $t('roadmap.title') }}</h1>
      <p class="roadmap__text">{{ $t('roadmap.text') }}</p>
      <ul class="roadmap__items" ref="roadmapItemsContainer">
        <li v-for="(item, index) in items" :key="index" class="roadmap__item">
          <div class="roadmap-item__scalable" :class="{ 'active': index === activeIndex }" ref="roadmapItems">
            <div class="roadmap-item__overflow">
              <button v-if="index !== activeIndex" class="roadmap-item__area" @click.prevent="activationItem(index)"/>
              <img class="roadmap-item__img" v-lazy-load :data-src="item.image" :alt="item.title">
              <div class="roadmap-item__content">
                <h2 class="roadmap-item__title">{{ item.title }}</h2>
                <transition name="fade">
                  <div v-if="index === activeIndex && showedContent">
                    <button class="roadmap-item__close" @click.prevent="closeItem(index)">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" fill="currentColor"/>
                      </svg>
                    </button>
                    <div class="roadmap-item__text" v-html="item.text"/>
                    <ul v-if="item.games" class="roadmap-item__games">
                      <li v-for="(game, gameIndex) in item.games" :key="gameIndex" class="roadmap-item__game">
                        <RoadmapGame :game="game"/>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RoadmapPage',
  layout: 'page',
  data () {
    return {
      showedContent: false,
      heightBlock: null,
      activeIndex: null,
      items: [
        {
          image: '/images/roadmap/item1.png',
          title: 'Web3 launchpad',
          text: '<b>What kind of project we launch and how can we help?</b><p>Rebel\'s Club\'s launchpad aspires to build one of the largest community-driven Web3 incubators in the world. Guided by a Council of Rebels comprised of individuals who respect both the entrepreneurial spirit and the company-building process, Rebel\'s Club aims to steer founders and their projects to the forefront of their industries. Our goal is to guide and connect entrepreneurs, investors, executives, academics, and engineers, amongst others, using the network we\'ve built and the experience we\'ve acquired throughout our journey. Rebel\'s Club will leverage every tool in its arsenal to support its incubatees. Right now we are focused on gaming idustry & </p>',
          games: [
            {
              title: 'Rebel Run Meta Mania',
              text: 'Mobile endless runner game with sustainable tokonomics. A hypothesis to show how game studios  can utilize blockchain sustainably to boost revenue & retention, as well as give value back to players',
              status: {
                text: 'Beta',
                color: '#407FDB'
              }
            },
            {
              title: 'Arfland platform',
              text: 'Platform for game studios and players.',
              status: {
                text: 'In progress',
                color: '#C87A04'
              }
            },
            {
              title: 'Still Early brand',
              text: 'Clothign & Apparel brand focused on web3 culture',
              status: {
                text: 'In progress',
                color: '#C87A04'
              }
            },
            {
              title: 'SEB energy projecy',
              text: 'Tokenized security of solar energy plant with divendends payout in stables',
              status: {
                text: 'In progress',
                color: '#C87A04'
              }
            }
          ]
        },
        {
          image: '/images/roadmap/item2.png',
          title: 'GameFi & Metaverse',
          text: ''
        },
        {
          image: '/images/roadmap/item3.png',
          title: 'Market Insights',
          text: ''
        },
        {
          image: '/images/roadmap/item4.png',
          title: 'Community & Networking',
          text: ''
        },
        {
          image: '/images/roadmap/item5.png',
          title: 'IRL',
          text: ''
        },
        {
          image: '/images/roadmap/item6.png',
          title: 'Brand',
          text: ''
        }
      ]
    }
  },
  head () {
    return {
      title: this.$t('meta.roadmap.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.roadmap.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.roadmap.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.roadmap.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.roadmap.description') }
      ]
    }
  },
  mounted () {
    this.recalculation()
    this.$nextTick(() => {
      this.$nuxt.$on('win-resize', ({ winW }) => {
        this.recalculation()
        if (this.activeIndex !== null) {
          this.closeItem('resize')
        }
      })
    })
  },
  destroyed () {
    this.$nuxt.$off('win-resize')
  },
  methods: {
    recalculation () {
      this.heightBlock = document.querySelector('.roadmap__item').offsetHeight
      this.$refs.roadmapItems.forEach((item) => {
        const container = item.closest('.roadmap__item')
        item.style.top = `${container.offsetTop}px`
        item.style.left = `${container.offsetLeft}px`
        item.style.height = `${this.heightBlock}px`
      })
    },
    activationItem (index) {
      this.activeIndex = index
      this.$refs.roadmapItems[index].style.height = `${this.$refs.roadmapItemsContainer.offsetHeight + 1}px`
      this.$refs.roadmapItems[index].style.zIndex = 10
      setTimeout(() => {
        this.showedContent = true
      }, 400)
    },
    closeItem (type) {
      this.showedContent = false
      if (type === 'resize') {
        this.$refs.roadmapItems[this.activeIndex].style.height = `${this.heightBlock}px`
        this.$refs.roadmapItems[this.activeIndex].style.zIndex = 1
        this.activeIndex = null
      } else {
        setTimeout(() => {
          this.$refs.roadmapItems[this.activeIndex].style.height = `${this.heightBlock}px`
          this.$refs.roadmapItems[this.activeIndex].style.zIndex = 1
          this.activeIndex = null
        }, 200)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.roadmap {
  &__text {
    max-width: 75.8rem;
    margin-bottom: 4rem;
    color: var(--additional-gray);
  }
  &__statuses {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 4.8rem;
    padding-left: 0;
    list-style: none;
    @include w699 {
      margin-bottom: 2.4rem;
    }
  }
  &__status {
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    padding: 1.2rem 1.6rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.8rem;
    &:not(:last-child) {
      margin-right: 1.6rem;
    }
    svg {
      width: 1rem;
      height: auto;
      margin-right: 1.2rem;
    }
  }
  &__items {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w699 {
      grid-gap: 1.6rem;
    }
    @include w389 {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    padding-bottom: 100%;
    &:nth-child(1) {
      .roadmap-item__scalable.active {
        .roadmap-item__img {
          width: 57.5%;
          @include w1300 {
            bottom: -14%;
          }
        }
      }
    }
    &:nth-child(2) {
      .roadmap-item__scalable.active {
        .roadmap-item__img {
          width: 48%;
        }
      }
    }
    &:nth-child(3) {
      .roadmap-item__img {
        width: 78%;
        right: 14%;
        bottom: 6%;
      }
      .roadmap-item__scalable.active {
        .roadmap-item__img {
          width: 40.3%;
          right: 1%;
        }
      }
    }
    &:nth-child(4) {
      .roadmap-item__img {
        width: 82%;
        right: 10%;
        bottom: 5%;
      }
      .roadmap-item__scalable.active {
        .roadmap-item__img {
          width: 44%;
          right: 3%;
        }
      }
    }
    &:nth-child(5) {
      .roadmap-item__scalable.active {
        .roadmap-item__img {
          width: 50%;
        }
      }
    }
    &:nth-child(6) {
      .roadmap-item__scalable.active {
        .roadmap-item__img {
          width: 51%;
        }
      }
    }
  }
  &-item {
    &__scalable {
      position: absolute;
      width: calc((100% - 4.8rem) / 3);
      padding-bottom: calc((100% - 4.8rem) / 3);
      border-radius: 1.6rem;
      background: var(--gradient-stroke);
      transition: 0.5s ease;
      @include w1023 {
        width: calc((100% - 2.4rem) / 2);
        padding-bottom: calc((100% - 2.4rem) / 2);
      }
      @include w699 {
        border-radius: 0.8rem;
      }
      @include w389 {
        width: 100%;
        padding-bottom: 100%;
      }
      &.active {
        top: 0!important;
        left: 0!important;
        width: 100%;
        .roadmap-item {
          &__overflow {
            padding: 4rem;
            @include w1023 {
              padding: 3.2rem;
            }
            @include w699 {
              padding: 1.6rem;
              overflow-y: auto;
            }
          }
          &__title {
            font-size: 3.2rem;
            @include w1199 {
              font-size: 2rem;
            }
            @include w1023 {
              font-size: 2.4rem;
            }
            @include w699 {
              font-size: 1.6rem;
            }
          }
          &__img {
            @include w1199 {
              opacity: 0!important;
            }
            @include w699 {
              bottom: 0!important;
            }
          }
        }
      }
    }
    &__overflow {
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
      width: calc(100% - 0.2rem);
      height: calc(100% - 0.2rem);
      padding: 2.4rem;
      border-radius: 1.6rem;
      overflow: hidden;
      background-color: var(--main-bg);
      transition: padding 0.5s;
      will-change: transform;
      @include w699 {
        padding: 1.6rem;
        border-radius: 0.8rem;
      }
    }
    &__area {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
      cursor: pointer;
      @include hover {
        &:hover,
        &:focus {
          & + .roadmap-item__img {
            transform: scale(1.05);
          }
        }
      }
      @include active {
        &:active {
          & + .roadmap-item__img {
            transform: scale(1.05);
          }
        }
      }
    }
    &__img {
      position: absolute;
      right: 0;
      bottom: -2.9rem;
      width: 100%;
      transition: transform 0.3s ease, opacity 0.3s, width 0.5s, right 0.5s, bottom 0.5s;
      will-change: transform;
      opacity: 0;
      @include w699 {
        bottom: -1rem;
      }
      &.isLoaded {
        opacity: 1;
      }
    }
    &__content {
      position: relative;
    }
    &__title {
      margin-top: 0;
      margin-bottom: 1.6rem;
      font-weight: 900;
      font-size: 2.6rem;
      line-height: 1.2;
      transition: font-size 0.5s;
      will-change: transform;
      @include w1199 {
        font-size: 1.6rem;
      }
      @include w699 {
        margin-bottom: 0.8rem;
        font-weight: 700;
      }
    }
    &__close {
      position: absolute;
      top: -1.5rem;
      right: -1.5rem;
      display: flex;
      padding: 1rem;
      background: none;
      border: none;
      color: var(--main-text);
      cursor: pointer;
      svg {
        width: 4rem;
        height: auto;
        @include w1199 {
          width: 3rem;
        }
        @include w699 {
          width: 2rem;
        }
      }
    }
    &__text {
      max-width: 77rem;
      color: var(--additional-gray);
    }
    &__games {
      max-width: 77rem;
      padding-left: 0;
      list-style: none;
    }
    &__game {
      margin-top: 2.4rem;
    }
  }
}
</style>
