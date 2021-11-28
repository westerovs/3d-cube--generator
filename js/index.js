import { initControls } from './utils/controls.js'
initControls()

class Cube {
  constructor(height) {
    // параметры
    this.height = height

    this.sides = document.querySelectorAll('.box__side')
    this.sideFront = document.querySelector('.box__side--front')
    this.sideBack = document.querySelector('.box__side--back')
    this.sideTop = document.querySelector('.box__side--top')
    this.sideBottom = document.querySelector('.box__side--bottom')
    this.sideLeft = document.querySelector('.box__side--left')
    this.sideRight = document.querySelector('.box__side--right')
  }

  init = () => {
    // this.sideTop.style.height = `${ this.height}px`
    // this.sideBottom.style.height = `${ this.height}px`
    // this.sideLeft.style.width = `${ this.height }px`
    // this.sideRight.style.width = `${ this.height }px`

    this.sideFront.style.transform = `translateZ(${ this.height / 2 }px)`
    this.sideBack.style.transform = `translateZ(${ -this.height / 2 }px) rotateY(180deg)`

    this.sideTop.style.transform = `translateZ(${ 0 }px) translateY(-${ this.height / 2 }px) rotateX(90deg)`
    this.sideBottom.style.transform = `translateZ(${ 0 }px) translateY(${ this.height / 2 }px) rotateX(-90deg)`

    this.sideLeft.style.transform = `translateX(-${ this.height / 2 }px) rotateY(-90deg)`
    this.sideRight.style.transform = `translateX(${ this.height / 2 }px) rotateY(90deg)`
  }
}

new Cube(100).init()
