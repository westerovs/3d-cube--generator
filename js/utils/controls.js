const initControls = () => {
  const box = document.querySelector('.box')
  let rotateY = 20
  let rotateX = 40
  let rotateZ = 0
  
  box.style.transform = `rotateY(${ +rotateY }deg) rotateX(${ +rotateX }deg) `
  
  document.onkeydown = (key) => {
    if (key.code === 'KeyW')      rotateX += 5 // вверх
    else if (key.code === 'KeyS') rotateX -= 5 // вниз
    else if (key.code === 'KeyQ') rotateY -= 5 // вниз
    else if (key.code === 'KeyE') rotateY += 5 // вниз
    else if (key.code === 'KeyA') rotateZ -= 5 // влево
    else if (key.code === 'KeyD') rotateZ += 5 // вправо
    
    box.style.transform = `
      rotateY(${ +rotateY }deg)
      rotateX(${ +rotateX }deg)
      rotateZ(${ +rotateZ }deg)`
  }
}

export {
  initControls
}
