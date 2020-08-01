let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/Fig.jpg') {
      myImage.setAttribute('src','images/Fig-eaten.jpg')
    } else {
      myImage.setAttribute('src','images/Fig.jpg')
    }
}

let myButton = document.querySelector('button')
let myHeader = document.querySelector('h1')
let myHeaderBaseText = 'Van egy szép fügefánk'

function setUserName() {
  let myName = prompt('Kérlek mondd meg a neved!')
  localStorage.setItem('name', myName)
  myHeader.textContent = getHeaderText(myName)
}

function getHeaderText(name) {
  if (name) {
    return myHeaderBaseText + ', ' + name
  } else {
    return myHeaderBaseText
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  myHeader.textContent = getHeaderText(localStorage.getItem('name'))
}

myButton.onclick = function() {
  setUserName()
}