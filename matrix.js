const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var randCharArray = []

// generate random character array
function genRandCharArray() {
  for (let i=0; i < 30;i++) {
    randCharArray.push(chars.charAt(Math.random() * 30))
  }
  return randCharArray
}  

// console.log(randCharArray)

// basic function looping through the Array of characters based on a random starting index
function digiStream(charList) {

  function addCharToDOM(char) {
    let container = document.querySelector('.container')
    let column = document.createElement('div')
    let newDigit = document.createTextNode(char)
    column.appendChild(newDigit)
    // container.appendChild(column)
    container.insertBefore(column,container.childNodes[0])
  }

  // index variable for our timed loop
  var i = 0
  // start loop
  var timedLoop = setInterval( function() {
    console.log(charList[i])
    addCharToDOM(charList[i])
    i++
    if (i === 30) { 
      clearInterval(timedLoop)
    } 
  }, 100)
}

genRandCharArray()

digiStream(randCharArray)

