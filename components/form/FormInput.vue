<template>
  <div class="form__block">
    <label :for="label">{{ $t(`form.fields.${label}`) }}</label>
    <input
      :id="label"
      :class="[{ 'error': valid && valid.$error }, { 'filled': field.value }]"
      :type="field.type"
      v-model="dataValue"
    >
    <span/>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
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
  &__block {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.2rem;
    label {
      margin-bottom: 1.3rem;
      padding-left: 0.4rem;
      color: var(--additional-gray);
      cursor: pointer;
    }
    input {
      width: 100%;
      height: 7rem;
      padding: 0 2.4rem;
      background: var(--additional-hardblue);
      border-radius: 0.8rem;
      border: none;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        box-shadow: 0 0 0 1000px var(--additional-hardblue) inset;
        -webkit-box-shadow: 0 0 0 1000px var(--additional-hardblue) inset;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: var(--main-text);
      }
      &:focus {
        & + span {
          opacity: 1;
          background: var(--gradient-stroke)!important;
        }
      }
      &.filled {
        & + span {
          opacity: 1;
          background: rgba(255, 255, 255, 0.3);
        }
      }
      &.error {
        & + span {
          opacity: 1;
          background: var(--error);
        }
      }
    }
    span {
      position: absolute;
      z-index: -1;
      bottom: -0.1rem;
      left: -0.1rem;
      width: calc(100% + 0.2rem);
      height: 7.2rem;
      border-radius: 0.8rem;
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
}
</style>
