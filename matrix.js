const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

var randCharArray = []
  
for (let i=0; i < 30;i++) {
  randCharArray.push(chars.charAt(Math.random() * 30))
}

// console.log(randCharArray)

// basic function looping through the Array of characters based on a random starting index
function digiStream(newChars) {
  //starting character index
  let startChar = Math.round(Math.random() * 30)
  // start loop
  for (let i=startChar;i < 30;i++) {
    console.log(newChars[i])
    if (i==29) {
      for (let i=0;i < startChar;i++) {
        console.log(newChars[i])
      }
    }
  }
}


digiStream(randCharArray)

