<template>
  <footer class="footer">
    <NuxtLink to="/" class="footer__logo">
      <SvgLogo/>
    </NuxtLink>
    <NuxtLink to="/terms/" class="footer__text footer__link">{{ $t('footer.terms') }}</NuxtLink>
    <span class="footer__text">{{ $t('footer.copyright') }}</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8rem;
  &__logo {
    width: 19.2rem;
    display: flex;
    margin-bottom: 4rem;
  }
  &__link {
    margin-bottom: 0.8rem;
    @include hover {
      &:hover,
      &:focus {
        color: var(--main-text);
      }
    }
    @include active {
      &:active {
        color: var(--main-text);
      }
    }
  }
  &__text {
    font-size: 1.7rem;
    line-height: 1.41;
    color: var(--additional-gray);
    text-decoration: underline;
  }
}
</style>
