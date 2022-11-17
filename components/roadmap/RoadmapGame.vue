<template>
  <div class="game__block">
    <div class="game__top">
      <p class="game__title">{{ game.title }}</p>
      <div class="game__status" :style="`background-color: ${game.status.color}`">{{ game.status.text }}</div>
    </div>
    <p class="game__text">{{ game.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'RoadmapGame',
  props: {
    game: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    @include w389 {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__title {
    margin-right: 2rem;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.6rem;
    @include w389 {
      margin-bottom: 0.8rem;
    }
  }
  &__text {
    color: var(--additional-gray);
  }
  &__status {
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
  }
}
</style>
