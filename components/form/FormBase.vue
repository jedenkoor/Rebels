<template>
  <form v-if="mounted" class="form">
    <template v-for="(field, key) in fields">
      <component
        v-if="field.page.includes(page)"
        :key="key"
        :label="key"
        :is="`Form${field.template}`"
        :field="field"
        :valid="validObj.fields[key]"
        v-model="field.value"
        @loadFile="loadFile"
      />
    </template>
    <button class="btn btn-primary form__submit" type="submit" @click.prevent.stop="submit">
      <span>{{ $t(`form.btn.${page}`) }}</span>
    </button>
  </form>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'FormBase',
  props: {
    page: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mounted: false,
      fields: {
        position: {
          template: 'Select',
          value: '',
          type: 'select',
          page: ['vacancy'],
          vuelidate: {
            required
          }
        },
        name: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy'],
          vuelidate: {
            required
          }
        },
        email: {
          template: 'Input',
          value: '',
          type: 'email',
          page: ['vacancy', 'contact'],
          vuelidate: {
            required,
            email: val => /^[0-9a-z\-._]+@[0-9a-z\-_]{2,}.[a-z]{2,}$/i.test(val)
          }
        },
        companyName: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['contact']
        },
        companyType: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['contact']
        },
        describe: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['contact']
        },
        number: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy'],
          vuelidate: {
            required
          }
        },
        portfolioLink: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy']
        },
        previousWork: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy']
        },
        stack: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy']
        },
        salary: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy']
        },
        howLearn: {
          template: 'Input',
          value: '',
          type: 'text',
          page: ['vacancy']
        },
        portfolioFile: {
          template: 'File',
          value: '',
          type: 'file',
          page: ['vacancy']
        },
        agreeTerms: {
          template: 'Terms',
          value: false,
          type: 'checkbox',
          page: ['vacancy', 'contact'],
          vuelidate: {
            required,
            sameAs: sameAs(() => true)
          }
        }
      }
    }
  },
  validations () {
    const obj = {
      fields: {}
    }
    for (const key in this.fields) {
      if (this.fields[key].vuelidate) {
        obj.fields[key] = {
          value: this.fields[key].vuelidate
        }
      }
    }
    return obj
  },
  computed: {
    validObj () {
      return this.$v ? this.$v : false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = true
    })
  },
  methods: {
    loadFile (file, fieldName) {
      this.fields[fieldName].value = file
    },
    submit () {
      this.$v.fields.$reset()
      this.$v.fields.$touch()
      setTimeout(() => {
        if (this.$v.$invalid) {
          this.$scrollTo('.error', { offset: -100 })
        } else {
          console.log('Форма отправлена')
        }
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 47.4rem;
  margin-right: auto;
  margin-left: auto;
  @include w1300 {
    max-width: 39rem;
  }
  @include w1023 {
    max-width: 43rem;
  }
  @include w699 {
    max-width: none;
  }
  &__submit {
    width: 100%;
    display: block;
    margin-top: 6.4rem;
    padding: 2.3rem 0;
    border: none;
  }
}
</style>
