const chars = 'AZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ123456789'
const emCount = window.innerWidth /
  parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
const columnCount = Math.round(emCount / 2);
var randCharArray = []

// generate random character array
function genRandCharArray(len) {
  for (let i=0; i < len;i++) {
    randCharArray.push(chars.charAt(Math.random() * 36))
  }
  return randCharArray
}
genRandCharArray(32);

function addCharToDOM(char,contName) {
  console.log(contName);
  let container = document.querySelector(contName)
  let column = document.createElement('div')
  let newDigit = document.createTextNode(char)
  
  column.appendChild(newDigit)
  container.insertBefore(column,container.childNodes[0])
}  

// basic function looping through the Array of characters
function digiStream(charList,col) {

  

  // index variable for our timed loop
  var i = 0
  // start loop
  var timedLoop = setInterval( function() {
    
    addCharToDOM(charList[i],'.col'+col)
    
    if (i > 1) {
      let bow = Math.round((Math.random() * 10));
      let currentElement = document.querySelector('.col'+col);
      let currentElementChild = currentElement.firstChild;
      if (bow === 3) {
        currentElementChild.style.color = 'black'
      }
    }
    i++
    if (i === 30) { 
      clearInterval(timedLoop)
    } 
  }, 50)
}
function insertColumns() {
  // Generate empty columns based on width

  for(let c=0;c < columnCount;c++) {
    let elem = document.querySelector('.container');
    let newColDiv = document.createElement('div');
    elem.appendChild(newColDiv).classList.add('col'+c);
  }
}

insertColumns();

// Add digiStream to a column randomly every 50ms
let i;
const addCol = setInterval(() => {
  let randColumn = Math.round((Math.random() * columnCount));
  
  digiStream(randCharArray,randColumn);
  i++;
  if (i === 100) { 
    clearInterval(addCol);
    i = 0;
  } 
},500)




