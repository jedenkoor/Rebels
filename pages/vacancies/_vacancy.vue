<template>
  <section class="section-margin vacancy">
    <div class="container">
      <h1 class="title vacancy__title">{{ vacancy.title }}</h1>
      <div class="vacancy__content" v-html="vacancy.content"/>
      <NuxtLink :to="`/vacancies/form?position=${$route.params.vacancy}`" class="btn btn-primary vacancy__btn">
        <span>{{ $t('vacancies.apply') }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import vacancies from '~/data/vacancies.js'

export default {
  name: 'VacancyPage',
  data () {
    return {
      vacancies
    }
  },
  head () {
    return {
      title: `Vacancy | ${this.vacancy.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.vacancy.shortDescription },
        { hid: 'og:title', property: 'og:title', content: `Vacancy | ${this.vacancy.title}` },
        { hid: 'og:description', property: 'og:description', content: this.vacancy.shortDescription }
      ]
    }
  },
  computed: {
    vacancy () {
      return vacancies.find(item => item.link === this.$route.params.vacancy)
    }
  }
}
</script>

<style lang="scss" scoped>
.vacancy {
  &__title {
    margin-bottom: 3.2rem;
    text-align: center;
  }
  &__content {
    max-width: 72.4rem;
    margin: 0 auto;
    color: var(--additional-gray);
  }
  &__btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 30rem;
    max-width: 100%;
    padding: 2.3rem 0;
    margin-top: 8rem;
  }
}
</style>
