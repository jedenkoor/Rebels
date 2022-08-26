import { Symbol } from '@/canvas/symbol'

export class Effect {
  constructor (canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.fontSize = 15
    this.columns = this.canvasWidth / this.fontSize
    this.symbols = []
    this.#initialize()
  }

  #initialize () {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, -(Math.floor(Math.random() * 100)), this.fontSize, this.canvasHeight)
    }
  }

  resize (width, height) {
    this.canvasWidth = width
    this.canvasHeight = height
    this.columns = this.canvasWidth / this.fontSize
    this.symbols = []
    this.#initialize()
  }
}
