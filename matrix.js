const chars = 'AZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ123456789'
const emCount = window.innerWidth /
  parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
const columnCount = Math.floor(emCount / 2);


var randCharArray = [];

// generate random character array
function genRandCharArray(len) {
  randCharArray = [];
  for (let i=0; i < len;i++) {
    randCharArray.push(chars.charAt(Math.random() * 36))
  }
  return randCharArray
}
genRandCharArray(32);

const addCharToDOM = (char,contName) => {
  console.log(contName);
  let container = document.querySelector(contName)
  let column = document.createElement('div')
  let newDigit = document.createTextNode(char)
  
  column.appendChild(newDigit)
  container.appendChild(column)
}  

// basic function looping through the Array of characters
function digiStream(charList,col) {

  // index variable for our timed loop
  var idx = 0
  // start loop
  const timedLoop = setInterval( () => {
    
    addCharToDOM(charList[idx],'.col'+col)
    
    if (idx > 1) {
      let bow = Math.round((Math.random() * 10));
      let currentElement = document.querySelector('.col'+col);
      let currentElementChild = currentElement.firstChild;
      if (bow === 3) {
        currentElementChild.style.color = 'black'
      }
    }
    if (idx === 30) { 
      clearInterval(timedLoop)
    }
    idx++ 
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
var iCol = 0;
const addCol = setInterval(() => {
  let randColumn = Math.floor((Math.random() * columnCount));
  genRandCharArray(32);
  digiStream(randCharArray,randColumn);
  
  console.log(iCol);
  if (iCol === columnCount) { 
    clearInterval(addCol);
    iCol = 0;
  } 
  iCol++;
},500)




