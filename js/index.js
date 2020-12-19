const box = document.querySelector('.box');
let rotateY = 80;
let rotateX = 10;
let rotateZ = 10;

(function () {
    box.style.transform =
        `rotateY(${+rotateY}deg) rotateX(${+rotateX}deg) `

    document.onkeydown = function (item) {
        if (item.keyCode === 37) rotateZ -= 2;     // влево
        else if (item.keyCode === 39) rotateZ += 2; // вправо
        else if (item.keyCode === 38) rotateX += 2; // вверх
        else if (item.keyCode === 40) rotateX -= 2; // вниз

        box.style.transform =
            `rotateY(${+rotateY}deg)
             rotateX(${+rotateX}deg)
             rotateZ(${+rotateZ}deg)
             `
    };
})();

let xxx = 0
const container = document.querySelector('.container')

function flight () {
    xxx += 0.0001

    container.style.transform = `
            translateY(${ Math.sin(xxx / 100) * 100 }px)
            translateX(${ xxx++ }px)`

    box.style.transform = `
        rotateY(${ +rotateY  + -Math.sin(xxx / 100) * 10 }deg)
        rotateX(${ +rotateX}deg)
        rotateZ(${ rotateZ + Math.sin(xxx / 1000) * 10 }deg)`

    window.scrollBy((xxx), 0)

    requestAnimationFrame(flight)
}

flight()

class Create3dBox {
    constructor(
        height = 50,
        length = 175
    ) {
        // параметры
        this.height = height
        this.length = length

        this.sides      = document.querySelectorAll('.box__side')
        this.sideFront  = document.querySelector('.box__side--front')
        this.sideBack   = document.querySelector('.box__side--back')
        this.sideRight  = document.querySelector('.box__side--right')
        this.sideLeft   = document.querySelector('.box__side--left')
        this.sideTop    = document.querySelector('.box__side--top')
        this.sideBottom = document.querySelector('.box__side--bottom')

        this.translate = 50
        this.rotateY   = 90

        this.sideFront.style.transform = `translateZ(${ this.translate }px)`
    }

    setHeight = () => {
        this.sides.forEach(side => side.style.height = `${this.height}px`)
    }

    setLength = () => {
        this.sideLeft.style.width    = `${this.length}px`
        this.sideRight.style.width   = `${this.length}px`
        this.sideTop.style.height    = `${this.length}px`
        this.sideBottom.style.height = `${this.length}px`

        this.sideLeft.style.transform = `
            rotateY(   -${  this.rotateY }deg) 
            translateX(-${ (this.length / 2) - this.translate }px) 
            translateZ( ${  this.length / 2 }px)`

        this.sideRight.style.transform = `
            rotateY(${ this.rotateY }deg)
            translateX(${ (this.length / 2) - this.translate }px)
            translateZ(${ (this.length / 2) - (this.length - 100)}px)`

        this.sideBack.style.transform  = `
            translateZ(-${ this.length - this.translate}px)
             rotateY(180deg)`

        this.sideTop.style.transform  = `
             translateZ(-${ (this.length / 2) - 50}px)
             translateY(-${ (this.length / 2) }px)
             rotateX(90deg)`

        this.sideBottom.style.transform  = `
             translateZ(-${ (this.length / 2) - 50}px)
             translateY(-${ (this.length / 2) - 50}px)
             rotateX(90deg)`

    }

    init = () => {
        this.setHeight()
        this.setLength()
    }

}

const create3dBox = new Create3dBox()
create3dBox.init()