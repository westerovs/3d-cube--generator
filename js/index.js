const box = document.querySelector('.box');
let rotateY = 40;
let rotateX = 40;
let rotateZ = 0;

(function () {
  box.style.transform = `rotateY(${ +rotateY }deg) rotateX(${ +rotateX }deg) `

  document.onkeydown = function (item) {
    console.log(item)

      if (item.code === 'KeyW') rotateX += 2; // вверх
      else if (item.code === 'KeyS') rotateX -= 2; // вниз
      else if (item.code === 'KeyQ') rotateY -= 2; // вниз
      else if (item.code === 'KeyE') rotateY += 2; // вниз
      else if (item.code === 'KeyA') rotateZ -= 2;     // влево
      else if (item.code === 'KeyD') rotateZ += 2; // вправо

    box.style.transform =
      `rotateY(${ +rotateY }deg)
             rotateX(${ +rotateX }deg)
             rotateZ(${ +rotateZ }deg)
             `
  };
})();


class Create3dBox {
  constructor(
    height = 50,
    length = 175
  ) {
    // параметры
    this.height = height
    this.length = length
    
    this.sides = document.querySelectorAll('.box__side')
    this.sideFront = document.querySelector('.box__side--front')
    this.sideBack = document.querySelector('.box__side--back')
    this.sideRight = document.querySelector('.box__side--right')
    this.sideLeft = document.querySelector('.box__side--left')
    this.sideTop = document.querySelector('.box__side--top')
    this.sideBottom = document.querySelector('.box__side--bottom')
    
    this.translate = 50
    this.rotateY = 90
    
    this.sideFront.style.transform = `translateZ(${ this.translate }px)`
  }
  
  setHeight = () => {
    this.sides.forEach(side => side.style.height = `${ this.height }px`)
  }
  
  setLength = () => {
    this.sideLeft.style.width = `${ this.length }px`
    this.sideRight.style.width = `${ this.length }px`
    this.sideTop.style.height = `${ this.length }px`
    this.sideBottom.style.height = `${ this.length }px`
    
    this.sideLeft.style.transform = `
            rotateY(   -${ this.rotateY }deg)
            translateX(-${ (this.length / 2) - this.translate }px)
            translateZ( ${ this.length / 2 }px)`
    
    this.sideRight.style.transform = `
            rotateY(${ this.rotateY }deg)
            translateX(${ (this.length / 2) - this.translate }px)
            translateZ(${ (this.length / 2) - (this.length - 100) }px)`
    
    this.sideBack.style.transform = `
            translateZ(-${ this.length - this.translate }px)
             rotateY(180deg)`
    
    this.sideTop.style.transform = `
             translateZ(-${ (this.length / 2) - 50 }px)
             translateY(-${ (this.length / 2) }px)
             rotateX(90deg)`
    
    this.sideBottom.style.transform = `
             translateZ(-${ (this.length / 2) - 50 }px)
             translateY(-${ (this.length / 2) - 50 }px)
             rotateX(90deg)`
    
  }
  
  init = () => {
    this.setHeight()
    this.setLength()
  }
  
}

const create3dBox = new Create3dBox()
create3dBox.init()
