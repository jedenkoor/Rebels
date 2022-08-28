<template>
  <div class="form__file">
    <label :for="label" class="form-file__label">{{ $t(`form.fields.${label}`) }}</label>
    <label v-if="!field.value" :for="label" class="btn btn-secondary form-file__btn">{{ $t(`form.add`) }}</label>
    <button v-else class="btn btn-secondary form-file__btn" @click.prevent="openedLoaded = !openedLoaded">{{ field.value.name }}</button>
    <input
      :id="label"
      class="visually-hidden"
      :type="field.type"
      ref="file"
      @change="loadFile"
    >
    <span v-if="errorMessage" class="form-file__error" v-html="errorMessage"/>
    <transition name="fade">
      <div v-if="openedLoaded" class="form-file__loaded" v-click-outside="() => openedLoaded = false">
        <label :for="label" class="btn btn-secondary form-file__replace">Replace</label>
        {{ field.value.name }}
        <button class="form-file__delete" @click.prevent="deleteFile">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </transition>
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
  data () {
    return {
      openedLoaded: false,
      errorMessage: '',
      requiredSize: 20 * 1024 * 1024,
      requiredExtension: ['doc', 'docx', 'xls', 'xlsx', 'txt', 'rtf', 'pdf', 'png', 'jpeg', 'jpg', 'gif']
    }
  },
  methods: {
    checkFile (file) {
      this.errorMessage = ''
      const ext = file.name.split('.').pop()
      if (!this.requiredExtension.includes(ext)) {
        this.errorMessage += 'Invalid file type<br>'
      }
      if (file.size > this.requiredSize) {
        this.errorMessage += `File size exceeds ${this.requiredSize / 1024 / 1024}Mb<br>`
      }
      if (!this.errorMessage) {
        return true
      }
      this.$emit('loadFile', '', this.label)
    },
    loadFile (event) {
      const file = event.target.files[0]
      if (file && this.checkFile(file)) {
        this.$emit('loadFile', file, this.label)
      }
    },
    deleteFile () {
      this.openedLoaded = false
      this.$refs.file.value = ''
      this.$emit('loadFile', '', this.label)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__file {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.2rem;
  }
  &-file {
    &__wrap {
      position: relative;
      width: 100%;
    }
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
    &__loaded {
      position: absolute;
      top: calc(100% + 0.3rem);
      left: -0.1rem;
      z-index: 2;
      width: calc(100% + 0.2rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7rem 2rem 2rem;
      background-color: var(--main-bg);
      border: 0.1rem solid var(--additional-black);
      border-radius: 0.8rem;
    }
    &__replace {
      position: absolute;
      top: 2rem;
      padding: 0.5rem 4rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
    &__delete {
      display: flex;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      svg {
        width: 2rem;
      }
    }
    &__error {
      position: absolute;
      left: 0;
      top: calc(100% + 0.3rem);
      font-size: 1.2rem;
      color: var(--error);
    }
  }
}
</style>
