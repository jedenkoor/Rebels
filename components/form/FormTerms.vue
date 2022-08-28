<template>
  <label class="form__checkbox">
    <input
      class="visually-hidden"
      :class="{ 'error': valid && valid.$error }"
      :type="field.type"
      v-model="dataValue"
    >
    <span/>
    <span>{{ $t(`form.fields.${label}`) }}</span>
  </label>
</template>

<script>
export default {
  name: 'FormTerms',
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
  &__checkbox {
    display: flex;
    align-items: center;
    color: var(--additional-gray);
    cursor: pointer;
  }
  input {
    &:checked {
      & + span {
        background: none;
        &:before {
          background: var(--additional-violet)
        }
        &:after {
          content: '';
          position: absolute;
          top: 0.6rem;
          left: 0.5rem;
          width: 2rem;
          height: 1.2rem;
          border-bottom: 0.3rem solid var(--main-text);
          border-left: 0.3rem solid var(--main-text);
          border-radius: 0.2rem;
          transform: rotate(-45deg);
        }
      }
    }
    &.error {
      & + span {
        &:before {
          background: var(--error);
        }
      }
    }
  }
  span {
    &:first-of-type {
      position: relative;
      display: flex;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      margin-right: 1.6rem;
      border-radius: 0.6rem;
      background: var(--main-bg);
      &:before {
        content: '';
        position: absolute;
        top: -0.1rem;
        left: -0.1rem;
        width: calc(100% + 0.2rem);
        height: calc(100% + 0.2rem);
        z-index: -1;
        background: var(--gradient-stroke);
        border-radius: 0.6rem;
      }
    }
  }
}
</style>
