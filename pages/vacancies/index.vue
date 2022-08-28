<template>
  <section class="section-margin vacancies">
    <div class="container">
      <h1 class="title vacancies__title">{{ $t('vacancies.title') }}</h1>
      <p class="vacancies__text">{{ $t('vacancies.text') }}</p>
      <ul class="vacancies__list">
        <li v-for="(item, index) in vacancies" :key="index" class="vacancies__item">
          <NuxtLink :to="`/vacancies/${item.link}`" class="vacancies-item__link">
            <div class="vacancies-item__info">
              <h2 class="vacancies-item__title">{{ item.title }}</h2>
              <p class="vacancies-item__text">{{ item.shortDescription }}</p>
            </div>
            <div class="btn btn-secondary vacancies-item__btn">{{ $t('vacancies.more') }}</div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import vacancies from '~/data/vacancies.js'

export default {
  name: 'VacanciesPage',
  data () {
    return {
      vacancies
    }
  },
  head () {
    return {
      title: this.$t('meta.vacancies.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.vacancies.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('meta.vacancies.keywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('meta.vacancies.title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.vacancies.description') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.vacancies {
  &__title {
    margin-bottom: 1.6rem;
    text-align: center;
  }
  &__text {
    max-width: 72.4rem;
    margin: 0 auto 4rem;
    text-align: center;
    color: var(--additional-gray);
  }
  &__list {
    max-width: 97.4rem;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
  }
  &__item {
    & + & {
      margin-top: 2rem;
    }
  }
  &-item {
    &__link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3.2rem;
      background-color: var(--additional-hardblue);
      border-radius: 2.4rem;
      @include hover {
        &:hover,
        &:focus {
          .vacancies-item__btn {
            background-color: var(--additional-violet);
          }
        }
      }
      @include active {
        &:active {
          .vacancies-item__btn {
            background-color: var(--additional-violet);
          }
        }
      }
      @include w699 {
        padding: 2.4rem;
      }
    }
    &__title {
      margin-top: 0;
      margin-bottom: 2rem;
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.33;
      color: #F8F7F8;
      @include w699 {
        margin-bottom: 0.8rem;
        font-size: 1.6rem;
        line-height: 1.5;
      }
    }
    &__text {
      color: var(--additional-gray);
    }
    &__btn {
      margin-left: 1rem;
      padding: 1.5rem 2.4rem;
      white-space: nowrap;
      @include w699 {
        padding: 1rem 1.5rem;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
