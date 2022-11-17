export class Symbol {
  constructor (x, y, fontSize, canvasHeight) {
    this.characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.x = x
    this.y = y
    this.fontSize = fontSize
    this.text = ''
    this.canvasHeight = canvasHeight
  }

  draw (context) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0
    } else {
      this.y += 1
    }
  }
}
