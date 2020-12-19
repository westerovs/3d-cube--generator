(function () {
    const container = document.querySelector('.jet');

    let rotateY = 20;
    let rotateX = -60;

    container.style.transform =
        `rotateY(${+rotateY}deg) rotateX(${+rotateX}deg) `

    document.onkeydown = function (item) {
        if (item.keyCode === 37) rotateY -= 2;
        else if (item.keyCode === 38) rotateX += 2;
        else if (item.keyCode === 39) rotateY += 2;
        else if (item.keyCode === 40) rotateX -= 2;

        container.style.transform =
            `rotateY(${+rotateY}deg) rotateX(${+rotateX}deg) `
    };
})();


class Create3dBox {
    constructor(
        width  = 100,
        height = 90
    ) {
        // параметры
        this.height = height
        this.length = 100

        this.sides     = document.querySelectorAll('.side')
        this.sideFront = document.querySelector('.side-front')
        this.sideBack  = document.querySelector('.side-back')
        this.sideRight = document.querySelector('.side-right')
        this.sideLeft  = document.querySelector('.side-left')

        this.translate = 50
        this.rotateY   = 90

        this.sideFront.style.transform = `translateZ(${ this.translate }px)`
    }

    setHeight = () => {
        this.sides.forEach(side => side.style.height = `${this.height}px`)
    }

    setLength = () => {
        this.sideLeft.style.width  = `${ this.length}px`
        this.sideRight.style.width = `${ this.length}px`

        this.sideLeft.style.transform = `
            rotateY(   -${  this.rotateY }deg) 
            translateX(-${ (this.length / 2) - this.translate }px) 
            translateZ( ${  this.length / 2 }px)`

        this.sideRight.style.transform = `
            rotateY(${ this.rotateY }deg)
            translateX(${ (this.length / 2) - this.translate }px)
            translateZ(${ (this.length / 2) - (this.length - 100)}px)`

        this.sideRight.style.background = 'red'

        this.sideBack.style.transform  = `
            translateZ(-${ this.length - this.translate}px)
             rotateY(180deg)`
    }

    init = () => {
        this.setHeight()
        this.setLength()
    }

}

const create3dBox = new Create3dBox()
create3dBox.init()