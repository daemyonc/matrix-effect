var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

var randCharArray = []
  
for (let i=0; i < 30;i++) {
  randCharArray.push(chars.charAt(Math.random() * 30))
}

console.log(randCharArray)