<template>
  <section class="section-margin team">
    <div class="container">
      <h2 class="h2title team__title">{{ $t('index.team') }}</h2>
      <ul class="team__list">
        <li v-for="(item, index) in team" :key="index" class="team__item">
          <img :src="item.image" :alt="item.name" class="team-item__img">
          <span class="team-item__name">{{ item.name }}</span>
          <span class="team-item__text">{{ item.text }}</span>
          <a :href="item.link" class="team-item__link">Twitter</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexTeam',
  data () {
    return {
      team: [
        {
          image: '/images/index/team/team1.jpg',
          name: 'RebelJedi.eth',
          text: 'asdsd',
          link: '#'
        },
        {
          image: '/images/index/team/team2.jpg',
          name: 'RamaPijama',
          text: 'Iron man',
          link: '#'
        },
        {
          image: '/images/index/team/team3.jpg',
          name: 'Tiger Nagual',
          text: 'Unites the ingenious creators into incredible gaming universe',
          link: '#'
        },
        {
          image: '/images/index/team/team4.jpg',
          name: 'RebelJedi.eth',
          text: 'Believes in economics. In search for sustainable tokenomics for games. Loves civ games',
          link: '#'
        },
        {
          image: '/images/index/team/team1.jpg',
          name: 'RebelJedi.eth',
          text: 'smoke weed everyday',
          link: '#'
        },
        {
          image: '/images/index/team/team2.jpg',
          name: 'RamaPijama',
          text: 'Iron man',
          link: '#'
        },
        {
          image: '/images/index/team/team3.jpg',
          name: 'Tiger Nagual',
          text: 'Unites the ingenious creators into incredible gaming universe',
          link: '#'
        },
        {
          image: '/images/index/team/team4.jpg',
          name: 'Klim',
          text: 'Believes in economics. In search for sustainable tokenomics for games. Loves civ games',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w699 {
      grid-gap: 4rem 1.6rem;
    }
    @include w389 {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @include w699 {
      font-size: 1.6rem;
    }
  }
  &-item {
    &__img {
      width: 100%;
      margin-bottom: 1.6rem;
      border-radius: 1.6rem;
    }
    &__name {
      margin-bottom: 0.8rem;
      font-weight: 700;
    }
    &__text {
      margin-bottom: auto;
      color: var(--additional-gray);
    }
    &__link {
      margin-top: 2.4rem;
      color: var(--additional-violet);
    }
  }
}
</style>
