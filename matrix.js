const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var randCharArray = []

// generate random character array
function genRandCharArray() {
  for (let i=0; i < 30;i++) {
    randCharArray.push(chars.charAt(Math.random() * 30))
  }
  return randCharArray
}  

genRandCharArray()
// console.log(randCharArray)

// basic function looping through the Array of characters based on a random starting index
function digiStream(charList) {
  //starting character index
  let startChar = Math.round(Math.random() * 30)
  function addCharToDOM(char) {
    let container = document.querySelector('.container')
    let newDigit = document.createTextNode(char)
    container.appendChild(newDigit)
  }
  // start loop
  for (let i=startChar;i < 30;i++) {
    console.log(charList[i])
    addCharToDOM(charList[i])
    if (i==29) {
      for (let i=0;i < startChar;i++) {
        console.log(charList[i])
        addCharToDOM(charList[i])
      }
    }
  }
}


digiStream(randCharArray)

