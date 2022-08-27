<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <SvgLogo/>
      </NuxtLink>
      <div :class="['header__wrap', { 'opened': openedMenu }]" v-scroll-lock="openedMenu">
        <nav class="header__nav">
          <ul class="header__menu">
            <li v-for="(item, index) in menu" :key="index" class="header-menu__item">
              <a v-if="item.includes('http')" :href="item" target="_blank" class="header-menu__link">
                {{ $t(`header.menu[${index}]`) }}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82745 7.99581L11.0816 3.74162V6.41667H12.2483V1.75H7.58164V2.91667H10.2567L6.0025 7.17086L6.82745 7.99581ZM11.0833 11.0833V8.16667H9.91667V11.0833H2.91667V4.08333H5.83333V2.91667H2.91667C2.27233 2.91667 1.75 3.439 1.75 4.08333V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H9.91667C10.561 12.25 11.0833 11.7277 11.0833 11.0833Z" fill="#A4A1A4"/>
                </svg>
              </a>
              <NuxtLink v-else :to="item" class="header-menu__link">
                {{ $t(`header.menu[${index}]`) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="header__info">
          <a href="#" class="header-info__social discord"/>
          <a href="#" class="header-info__social twitter"/>
          <div class="header-info__dropdown" v-click-outside="() => openedDropdown = false">
            <button class="btn btn-secondary header-info-dropdown__btn" @click.prevent="openedDropdown = !openedDropdown">
              {{ $t('header.buy') }}
              <svg v-if="!openedDropdown" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 8.50829L11.2541 4.2541L12.0791 5.07906L6.99996 10.1582L1.92081 5.07906L2.74577 4.2541L6.99996 8.50829Z" fill="currentColor"/>
              </svg>
              <svg v-if="openedDropdown" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.46448 3.53546L10.5355 10.6065" stroke="white"/>
                <path d="M3.4646 10.6066L10.5357 3.5355" stroke="currentColor"/>
              </svg>
            </button>
            <transition name="fade">
              <ul v-if="openedDropdown" class="header-info-dropdown__list">
                <li class="header-info-dropdown__item">
                  <a href="#" class="header-info-dropdown__link">Opensea</a>
                </li>
                <li class="header-info-dropdown__item">
                  <a href="#" class="header-info-dropdown__link">Looksrare</a>
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
      <button :class="['header__burger', { 'active': openedMenu }]" @click.prevent="openedMenu = !openedMenu"/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      openedDropdown: false,
      openedMenu: false,
      menu: [
        '/',
        '/roadmap/',
        '/create-with-us/',
        '/vacancies/',
        '/faq/',
        'https://google.com'
      ]
    }
  },
  watch: {
    $route () {
      this.openedDropdown = false
      this.openedMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 10;
  border-bottom: 0.1rem solid rgba(164, 161, 164, 0.2);
  &__container {
    display: flex;
    align-items: center;
    height: 8rem;
  }
  &__logo {
    position: relative;
    z-index: 3;
    transform: translateY(0.5rem);
    flex-shrink: 0;
    width: 5.9rem;
    display: flex;
    margin-right: 4.5rem;
    transition: opacity 0.2s;
    @include hover {
      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }
    @include active {
      &:active {
        opacity: 0.8;
      }
    }
  }
  &__wrap {
    display: flex;
    align-items: center;
    flex: 1;
    @include w1023 {
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--main-bg);
      transition: clip-path 0.6s cubic-bezier(.645,.045,.355,1), visibility 0s 0s;
      clip-path: polygon(0 0,calc(100% + 100vw) 0,100% 100%,-100vw 100%);
      visibility: visible;
    }
    &:not(.opened) {
      @include w1023 {
        clip-path: polygon(100% 0, 100% 0, 0 100%, 0 100%);
        visibility: hidden;
        transition: clip-path 0.6s cubic-bezier(.645,.045,.355,1), visibility 0s 0.6s;
      }
    }
  }
  &__nav {
    @include w1023 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    @include w699 {
      top: auto;
      bottom: 15%;
      transform: translateX(-50%);
    }
    @include w389 {
      bottom: 10%;
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      flex-direction: column;
    }
  }
  &-menu {
    &__item {
      &:not(:last-child) {
        margin-right: 3.2rem;
        @include w1199 {
          margin-right: 2.4rem;
        }
        @include w1023 {
          margin-right: 0;
          margin-bottom: 3.2rem;
        }
      }
    }
    &__link {
      position: relative;
      height: 8rem;
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      @include hover {
        &:hover,
        &:focus {
          color: var(--additional-gray);
        }
      }
      @include active {
        &:active {
          color: var(--additional-gray);
        }
      }
      @include w1023 {
        height: auto;
        font-weight: 900;
        font-size: 3.2rem;
        line-height: 1.25;
        white-space: nowrap;
      }
      @include w389 {
        font-size: 2.8rem;
      }
      &.nuxt-link-exact-active {
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.2rem;
          background: var(--gradient-violet);
          border-radius: 1rem 1rem 0 0;
          @include w1023 {
            display: none;
          }
        }
      }
      svg {
        width: 1.4rem;
        height: auto;
        margin-left: 0.8rem;
        @include w1023 {
          width: 2.4rem;
        }
      }
    }
  }
  &__info {
    display: flex;
    align-items: center;
    margin-left: auto;
    @include w1023 {
      position: absolute;
      top: 12rem;
      right: 3.2rem;
      left: 3.2rem;
    }
    @include w699 {
      top: 11.2rem;
      right: 1.6rem;
      left: 1.6rem;
    }
  }
  &-info {
    &__social {
      width: 4rem;
      height: 4rem;
      margin-right: 1.6rem;
      transition: opacity 0.2s;
      @include hover {
        &:hover,
        &:focus {
          opacity: 0.8;
        }
      }
      @include active {
        &:active {
          opacity: 0.8;
        }
      }
      &.discord {
        background: url('/images/discord.png') center/contain no-repeat;
      }
      &.twitter {
        background: url('/images/twitter.png') center/contain no-repeat;
        @include w1023 {
          margin-right: 0;
        }
      }
    }
    &__dropdown {
      position: relative;
      @include w1023 {
        order: -1;
        margin-right: auto;
      }
    }
    &-dropdown {
      &__btn {
        padding: 0.8rem 1.1rem 0.8rem 1.5rem;
        font-weight: 400;
        @include hover {
          &:hover,
          &:focus {
            background-color: var(--additional-black);
          }
        }
        @include active {
          &:active {
            background-color: var(--additional-black);
          }
        }
        svg {
          width: 1.4rem;
          height: auto;
          margin-left: 0.8rem;
        }
      }
      &__list {
        position: absolute;
        top: calc(100% + 0.4rem);
        min-width: 12.8rem;
        padding: 0.4rem 0;
        list-style: none;
        background-color: var(--main-bg);
        border: 0.1rem solid var(--additional-black);
        border-radius: 0.8rem;
        @include w1610 {
          right: 0;
        }
        @include w1023 {
          right: auto;
          left: 0;
        }
      }
      &__item {
        & + & {
          border-top: 0.1rem solid var(--additional-black);
        }
      }
      &__link {
        display: flex;
        padding: 0.8rem;
        transition: background-color 0.2s;
        @include hover {
          &:hover,
          &:focus {
            background-color: var(--additional-black);
          }
        }
        @include active {
          &:active {
            background-color: var(--additional-black);
          }
        }
      }
    }
  }
  &__burger {
    position: relative;
    z-index: 3;
    width: 4rem;
    height: 4rem;
    display: none;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    border: 0.1rem solid var(--additional-black);
    border-radius: 0.8rem;
    background: none;
    cursor: pointer;
    @include w1023 {
      display: flex;
    }
    &.active {
      &:before {
        transform: translate(0, 0.2rem) rotate(45deg);
      }
      &:after {
        transform: translate(0, -0.2rem) rotate(-45deg);
        width: 1.8rem;
      }
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 1rem;
      height: 0.2rem;
      border-radius: 1rem;
      background-color: var(--main-text);
      transition: 0.3s;
    }
    &:before {
      top: 1.6rem;
      width: 1.8rem;
    }
    &:after {
      top: 2rem;
      width: 1rem;
    }
  }
}
</style>
