<template>
  <a :href="game.link" target="_blank" class="game__link">
    <img :src="`/images/roadmap/games/game${roadmapIndex + 1}-${gameIndex + 1}.jpg`" :alt="game.title" class="game__img">
    <div class="game__info">
      <div class="game__title">{{ game.title }}</div>
      <p class="game__text">{{ game.text }}</p>
      <div class="game__status">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" :fill="statuses[game.status - 1]"/>
        </svg>
        {{ $t(`roadmap.statuses[${game.status - 1}]`) }}
      </div>
    </div>
    <svg class="game__arr" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8453 8.82129L10.4883 11.1783L19.3098 19.9998L10.4883 28.8213L12.8453 31.1783L24.0238 19.9998L12.8453 8.82129ZM21.1786 8.82129L18.8216 11.1783L27.6431 19.9998L18.8216 28.8213L21.1786 31.1783L32.3572 19.9998L21.1786 8.82129Z" fill="#A4A1A4"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'RoadmapGame',
  props: {
    game: {
      type: Object,
      default: () => {}
    },
    statuses: {
      type: Array,
      default: () => []
    },
    gameIndex: {
      type: Number,
      default: 0
    },
    roadmapIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  &__link {
    position: relative;
    display: flex;
    align-items: center;
    @include hover {
      &:hover,
      &:focus {
        .game__arr {
          transform: translateX(2rem);
        }
      }
    }
    @include active {
      &:active {
        .game__arr {
          transform: translateX(2rem);
        }
      }
    }
  }
  &__img {
    width: 12rem;
    height: 12rem;
    border-radius: 1.2rem;
    margin-right: 4rem;
    @media screen and (min-width: 1024px) and (max-width: 1199px) {
      width: 10rem;
      height: 10rem;
    }
    @include w699 {
      position: absolute;
      top: 0;
      left: 0;
      width: 6.4rem;
      height: 6.4rem;
      margin-right: 0;
      border-radius: 0.8rem;
    }
  }
  &__info {
    margin-right: auto;
  }
  &__title {
    margin-bottom: 0.4rem;
    font-weight: 900;
    font-size: 2.4rem;
    line-height: 1.33;
    @media screen and (min-width: 1024px) and (max-width: 1199px) {
      font-size: 2rem;
    }
    @include w699 {
      margin-bottom: 0.6;
      padding-left: 7.2rem;
      font-size: 1.6rem;
    }
  }
  &__text {
    margin-bottom: 1.6rem;
    color: var(--additional-gray);
    @media screen and (min-width: 1024px) and (max-width: 1199px) {
      margin-bottom: 1rem;
    }
    @include w699 {
      margin-bottom: 2.8rem;
      padding-left: 7.2rem;
    }
  }
  &__status {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 1.6rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.8rem;
    @media screen and (min-width: 1024px) and (max-width: 1199px) {
      padding: 0.8rem 1.6rem;
    }
    svg {
      width: 1rem;
      height: auto;
      margin-right: 1.2rem;
    }
  }
  &__arr {
    width: 4rem;
    height: auto;
    margin-right: 4rem;
    transition: transform 0.2s ease;
    will-change: transform;
    @include w699 {
      margin-right: 0;
    }
    @include w389 {
      width: 3rem;
    }
  }
}
</style>
