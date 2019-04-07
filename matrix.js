const chars = 'AZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ123456789'
const emCount = window.innerWidth /
  parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
const columnCount = Math.floor(emCount / 1.5);

function insertColumns() {
  // Generate empty columns based on width

  for(let c=0;c < columnCount;c++) {
    let elem = document.querySelector('.container');
    let newColDiv = document.createElement('div');
    elem.appendChild(newColDiv).classList.add('col'+c);
  }
}

insertColumns();


var randCharArray = [];

// generate random character array
function genRandCharArray(len) {
  randCharArray = [];
  for (let i=0; i < len;i++) {
    randCharArray.push(chars.charAt(Math.random() * 36))
  }
  return randCharArray
}
genRandCharArray(60);

function addCharToDOM(char,contName) {
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
    let randElem = Math.round((Math.random() * 47));
    let currentElement = document.querySelector('.col'+col);
    let currentElementChild = currentElement.children[randElem];
    // let currentSibling = currentElementChild.children[randElem];
    // let current2ndChild = currentSibling.firstChild;
    // console.log(current2ndChild);      
    // console.log(currentSibling);
    console.log(currentElement);
      if (bow === 3) {
        currentElementChild.style.color = 'black';
      }
    }
    if (idx === 48) { 
      clearInterval(timedLoop)
    }
    idx++ 
  }, 50)
}


// Add digiStream to a column randomly every 50ms
var iCol = 0;
const addCol = setInterval(() => {
  let randColumn = Math.floor((Math.random() * columnCount));
  genRandCharArray(50);
  digiStream(randCharArray,randColumn);
  
  // console.log(iCol);
  if (iCol === columnCount*2) { 
    clearInterval(addCol);
    iCol = 0;
  } 
  iCol++;
},100)




