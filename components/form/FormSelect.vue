<template>
  <div class="form__row">
    <label class="form__checkbox" v-for="(item, index) in field.list" :key="index">
      <input
        class="visually-hidden"
        type="checkbox"
        :value="item.name"
        :checked="item.selected"
        @change="changeCheck(item.name)"
      >
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormRadio',
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeCheck (value) {
      this.$emit('changeCheck', value)
    }
  }
}
</script>
