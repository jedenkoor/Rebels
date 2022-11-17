<template>
  <div class="wrapper">
    <Background/>
    <Header/>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include hover {
    padding-right: 0.6rem;
  }
}
</style>
