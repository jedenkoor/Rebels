<template>
  <div class="form__file">
    <label :for="label" class="form-file__label">{{ $t(`form.fields.${label}`) }}</label>
    <label :for="label" class="btn btn-secondary form-file__btn">{{ $t(`form.add`) }}</label>
    <input
      :id="label"
      class="visually-hidden"
      :class="{ 'input-err': valid && valid.$error }"
      :type="field.type"
      v-model="dataValue"
      placeholder=" "
    >
  </div>
</template>

<script>
export default {
  name: 'FormFile',
  props: {
    field: {
      type: Object,
      default: () => {}
    },
    valid: {
      type: Object,
      default: () => {}
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    dataValue: {
      get () {
        return this.field.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__file {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.2rem;
  }
  &-file {
    &__label {
      margin-bottom: 1.3rem;
      padding-left: 0.4rem;
      color: var(--additional-gray);
      cursor: pointer;
    }
    &__btn {
      width: 100%;
      padding: 2.2rem 0;
    }
  }
}
</style>
