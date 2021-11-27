const initControls = () => {
  const box = document.querySelector('.box')
  let rotateY = 40
  let rotateX = 40
  let rotateZ = 0
  
  box.style.transform = `rotateY(${ +rotateY }deg) rotateX(${ +rotateX }deg) `
  
  document.onkeydown = (key) => {
    if (key.code === 'KeyW') rotateX += 2 // вверх
    else if (key.code === 'KeyS') rotateX -= 2 // вниз
    else if (key.code === 'KeyQ') rotateY -= 2 // вниз
    else if (key.code === 'KeyE') rotateY += 2 // вниз
    else if (key.code === 'KeyA') rotateZ -= 2     // влево
    else if (key.code === 'KeyD') rotateZ += 2 // вправо
    
    box.style.transform = `
      rotateY(${ +rotateY }deg)
      rotateX(${ +rotateX }deg)
      rotateZ(${ +rotateZ }deg)`
  }
}

export {
  initControls
}
