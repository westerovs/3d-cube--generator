import { initControls } from './utils/controls.js'
initControls()

class Cube {
  constructor(height) {
    // параметры
    this.height = height

    this.container = document.querySelector('.container')
    this.box = this.container.querySelector('.box')
  
    this.sides = this.box.querySelectorAll('.box__side')
    this.sideFront = this.box.querySelector('.box__side--front')
    this.sideBack = this.box.querySelector('.box__side--back')
    this.sideTop = this.box.querySelector('.box__side--top')
    this.sideBottom = this.box.querySelector('.box__side--bottom')
    this.sideLeft = this.box.querySelector('.box__side--left')
    this.sideRight = this.box.querySelector('.box__side--right')
  }

  init = () => {
    this.setWidth()
    this.setTranslate()
  }
  
  setWidth = () => {
    this.container.style.width = `${ this.height }px`
    this.container.style.height = `${ this.height }px`
    this.box.style.width = `${ this.height }px`
    this.box.style.height = `${ this.height }px`
    
    this.sides.forEach(side => {
      side.style.width = `${ this.height }px`
      side.style.height = `${ this.height }px`
    })
  }
  
  setTranslate = () => {
    this.sideFront.style.transform = `translateZ(${ this.height / 2 }px)`
    this.sideBack.style.transform = `translateZ(${ -this.height / 2 }px) rotateY(180deg)`
  
    this.sideTop.style.transform = `translateZ(${ 0 }px) translateY(-${ this.height / 2 }px) rotateX(90deg)`
    this.sideBottom.style.transform = `translateZ(${ 0 }px) translateY(${ this.height / 2 }px) rotateX(-90deg)`
  
    this.sideLeft.style.transform = `translateX(-${ this.height / 2 }px) rotateY(-90deg)`
    this.sideRight.style.transform = `translateX(${ this.height / 2 }px) rotateY(90deg)`
  }
  
}

new Cube(200).init()
