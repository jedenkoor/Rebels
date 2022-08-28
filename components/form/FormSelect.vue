<template>
  <div class="form__select">
    <label :for="label">{{ $t(`form.fields.${label}`) }}</label>
    <v-select
      class="vs"
      :class="{ 'error': valid && valid.$error }"
      :id="label"
      :multiple="field.multiple"
      :options="options"
      :reduce="item => item.link"
      label="title"
      :deselect-from-dropdown="true"
      :searchable="false"
      :clearable="false"
      v-model="dataValue"
    />
  </div>
</template>

<script>
import vacancies from '~/data/vacancies.js'

export default {
  name: 'FormSelect',
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
  data () {
    return {
      options: vacancies
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
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$route.query.position) {
        this.$emit('input', this.$route.query.position)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__select {
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
    .v-select {
      width: 100%;
    }
  }
}
</style>
