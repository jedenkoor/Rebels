<template>
  <canvas class="canvas" id="canvas"/>
</template>

<script>
import { Effect } from '@/canvas/effect'

export default {
  name: 'Background',
  data () {
    return {
      canvas: null,
      ctx: null,
      canvasWidth: null,
      canvasHeight: null,
      gradient: null,
      effect: null,
      lastTime: 0,
      nextFrame: 1000 / 20,
      timer: 0
    }
  },
  mounted () {
    if (process.browser) {
      this.$nextTick(() => {
        this.init()
        this.animate(0)
      })
    }
  },
  methods: {
    init () {
      this.canvas = document.getElementById('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height)
      this.gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)')
      this.gradient.addColorStop(0.5, 'rgba(210, 99, 232, 0.3)')
      this.gradient.addColorStop(1, 'rgba(79, 102, 227, 0.3)')

      this.effect = new Effect(this.canvas.width, this.canvas.height)

      window.addEventListener('resize', this.onWindowResize, false)
    },
    animate (timeStamp) {
      const deltaTime = timeStamp - this.lastTime
      this.lastTime = timeStamp
      if (this.timer > this.nextFrame) {
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.10)'
        const fillGradient = this.ctx.createLinearGradient(0, this.canvas.height / 2 + 20, this.canvas.width, this.canvas.height / 2 - 20)
        fillGradient.addColorStop(0, 'rgba(11, 17, 44, 0.1)') // #0B112C
        fillGradient.addColorStop(0.05, 'rgba(11, 17, 44, 0.1)') // #0B112C
        fillGradient.addColorStop(0.26, 'rgba(6, 7, 10, 0.1)') // #06070A
        fillGradient.addColorStop(0.76, 'rgba(6, 7, 10, 0.1)') // #06070A
        fillGradient.addColorStop(1, 'rgba(33, 9, 32, 0.1)') // #210920
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        this.ctx.fillStyle = fillGradient
        this.ctx.textAlign = 'center'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        // this.ctx.fillStyle = 'rgba(10, 255, 10, 1)'
        this.ctx.fillStyle = this.gradient
        this.ctx.font = this.effect.fontSize + 'px monospace'
        this.effect.symbols.forEach(symbol => symbol.draw(this.ctx))
        this.timer = 0
      } else {
        this.timer += deltaTime
      }
      requestAnimationFrame(this.animate)
    },
    onWindowResize () {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.effect.resize(this.canvas.width, this.canvas.height)
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all;
  overflow: hidden;
}
</style>
