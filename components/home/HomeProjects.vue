<template>
  <section class="section-margin projects">
    <div class="container">
      <h1 class="title projects__title">{{ $t('index.projects') }}</h1>
      <p class="projects__text">{{ $t('index.projects') }}</p>
      <ul class="projects__list">
        <li v-for="(item, index) in projects" :key="index" class="projects__item">
          <NuxtLink :to="item.link" class="projects-item__link">
            <div class="projects-item__col">
              <img v-lazy-load :data-src="item.logo" :alt="$t('index.projects')" class="projects-item__name">
              <p v-if="item.text" class="projects-item__text">{{ item.text }}</p>
              <svg width="79" height="33" viewBox="0 0 79 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.377319" y="0.452393" width="78.2454" height="32.0002" rx="16.0001" fill="#232228"/>
                <path d="M15.9815 16.0553H8.37732V8.45239H15.9815V16.0553Z" fill="white"/>
                <path d="M24.3773 16.0553H16.7733V8.45239H24.3773V16.0553Z" fill="white"/>
                <path d="M15.9813 24.4526H8.37732V16.8497H15.9813V24.4526Z" fill="white"/>
                <path d="M24.3773 24.4526H16.7733V16.8497H24.3773V24.4526Z" fill="white"/>
                <path d="M45.572 20.9214C45.33 21.4804 45.0436 21.995 44.7117 22.4681C44.2594 23.113 43.889 23.5594 43.6036 23.8073C43.1612 24.2142 42.6871 24.4226 42.1795 24.4344C41.815 24.4344 41.3755 24.3307 40.864 24.1204C40.3507 23.911 39.879 23.8073 39.4477 23.8073C38.9954 23.8073 38.5103 23.911 37.9914 24.1204C37.4717 24.3307 37.053 24.4403 36.7329 24.4512C36.2461 24.4719 35.7609 24.2576 35.2766 23.8073C34.9675 23.5377 34.5808 23.0754 34.1176 22.4207C33.6206 21.7214 33.2121 20.9106 32.892 19.9862C32.5492 18.9877 32.3773 18.0208 32.3773 17.0847C32.3773 16.0124 32.609 15.0876 33.0731 14.3126C33.4378 13.6901 33.923 13.1991 34.5303 12.8386C35.1376 12.4781 35.7938 12.2944 36.5004 12.2827C36.8871 12.2827 37.3941 12.4023 38.0243 12.6373C38.6526 12.8732 39.056 12.9928 39.2329 12.9928C39.3651 12.9928 39.8133 12.8529 40.5731 12.5741C41.2916 12.3156 41.898 12.2085 42.3948 12.2507C43.7409 12.3593 44.7522 12.89 45.4248 13.846C44.2209 14.5755 43.6254 15.5972 43.6372 16.9078C43.6481 17.9287 44.0184 18.7783 44.7463 19.4528C45.0762 19.7659 45.4446 20.0079 45.8544 20.1797C45.7655 20.4375 45.6717 20.6844 45.572 20.9214ZM42.4847 8.77267C42.4847 9.57285 42.1923 10.32 41.6096 11.0115C40.9064 11.8336 40.0559 12.3087 39.1335 12.2337C39.1218 12.1377 39.115 12.0367 39.115 11.9305C39.115 11.1623 39.4494 10.3402 40.0432 9.66805C40.3397 9.32771 40.7168 9.04473 41.1741 8.81899C41.6304 8.59661 42.0619 8.47364 42.4679 8.45258C42.4797 8.55955 42.4847 8.66653 42.4847 8.77266V8.77267Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.4794 8.64722C58.4663 9.00468 57.1148 9.57682 56.6841 9.83047C56.5383 9.91636 56.4256 10.0124 56.3847 10.0857C56.3487 10.1503 56.0643 10.7687 55.7528 11.46C54.9519 13.2369 54.4044 14.377 54.1091 14.8831L53.8544 15.3194L54.0018 15.4049C54.2138 15.5277 55.0028 15.8593 56.1555 16.3099C56.7071 16.5255 57.23 16.7304 57.3177 16.7653L57.477 16.8287L57.486 20.6406L57.495 24.4526H62.2386H66.9821L66.9912 20.6406L67.0002 16.8287L67.1595 16.7652C67.2471 16.7302 67.7648 16.5276 68.31 16.315C69.4419 15.8734 70.261 15.5291 70.4753 15.4049L70.6227 15.3194L70.368 14.8831C70.0738 14.3789 69.5298 13.2458 68.7246 11.46C68.413 10.7687 68.1285 10.1503 68.0924 10.0857C67.9837 9.8909 67.4593 9.61894 66.2036 9.10625C65.7453 8.91915 64.765 8.5578 64.4816 8.47152C64.4157 8.45145 64.3919 8.47825 64.2981 8.6788C64.0924 9.11832 63.7145 9.4316 63.1539 9.62733C62.831 9.74005 62.808 9.74292 62.2386 9.74214C61.6725 9.74136 61.6442 9.73779 61.3232 9.62652C60.7642 9.43273 60.385 9.11882 60.1796 8.67994C60.1206 8.5539 60.0619 8.45159 60.0491 8.45258C60.0364 8.45357 59.78 8.54116 59.4794 8.64722Z" fill="white"/>
              </svg>
            </div>
            <div class="projects-item__box">
              <img v-lazy-load :data-src="item.image" :alt="$t('index.projects')" class="projects-item__img">
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeProjects',
  data () {
    return {
      projects: [
        {
          link: '#',
          text: 'A mobile endless runner',
          logo: '/images/index/projects/game1-name.png',
          image: '/images/index/projects/game1.png'
        },
        {
          link: '#',
          text: 'What benefits do i get with genesis pass?',
          logo: '/images/index/projects/game2-name.png',
          image: '/images/index/projects/game2.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 37.4rem;
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      grid-template-rows: 29.4rem;
      grid-auto-rows: 29.4rem;
      grid-gap: 1.6rem;
    }
    @include w699 {
      grid-template-rows: 17.4rem;
      grid-auto-rows: 17.4rem;
    }
  }
  &__item {
    position: relative;
    border-radius: 1.6rem;
    box-shadow: 0 2rem 8rem rgba(161, 41, 203, 0.25);
    @include w1023 {
      grid-column: span 12!important;
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
          @include w1300 {
            flex: 0 0 43%;
            padding-top: 0;
          }
        }
        &__name {
          width: 16rem;
          height: 20.2rem;
          object-fit: contain;
          @include w1300 {
            width: 23.8rem;
            height: 25.2rem;
          }
          @include w699 {
            margin-top: -1.7rem;
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
          @include w1300 {
            flex: 0 0 43%;
          }
        }
        &__name {
          width: 16rem;
          height: 20.2rem;
          object-fit: contain;
          @include w1300 {
            width: 23.8rem;
            height: 25.2rem;
          }
        }
        &__box {
          filter: drop-shadow(-10rem 5rem 10rem rgba(47, 179, 36, 0.25));
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
      @include w1300 {
        flex: 0 0 56%;
      }
      @include w1023 {
        flex: 0 0 48%!important;
      }
      @include w699 {
        flex: 0 0 57% !important;
      }
      svg {
        width: 7.8rem;
        height: auto;
        flex-shrink: 0;
        @include w1023 {
          margin-top: auto;
        }
      }
    }
    &__name {
      margin-bottom: 1rem;
      @include w1023 {
        width: 22rem!important;
        height: 15.8rem!important;
        object-fit: contain!important;
      }
      @include w699 {
        width: 18.2rem!important;
        height: 9.2rem!important;
      }
    }
    &__text {
      max-width: 19rem;
      margin-bottom: 0.8rem;
      font-size: 1.2rem;
      color: var(--additional-gray);
    }
    &__box {
      position: absolute;
      top: 0;
      right: 0;
      width: 67.4%;
      height: 100%;
      @include w1300 {
        width: 53%;
      }
      @include w1023 {
        width: 49%!important;
      }
      @include w699 {
        width: 38% !important;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        clip-path: polygon(17% 0, 100% 0, 100% 136%, 0 94%);
        @include w1023 {
          clip-path: polygon(17% 0, 100% 0, 100% 134%, 0 92%);
        }
      }
    }
  }
}
</style>
