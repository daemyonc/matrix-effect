const chars = 'AZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ123456789'
const emCount = window.innerWidth /
  parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
const columnCount = Math.floor(emCount / 1.5);

// Generate empty columns based on width
function insertColumns() {
  for (let c = 0; c < columnCount; c++) {
    let elem = document.getElementById('matrix');
    let newColDiv = document.createElement('div');
    newColDiv.id = ('col' + c);
    elem.appendChild(newColDiv);
  }
}

insertColumns();


var randCharArray = [];

// generate random character array
function genRandCharArray(len) {
  randCharArray = [];
  for (let i = 0; i < len; i++) {
    randCharArray.push(chars.charAt(Math.random() * 36))
  }
  return randCharArray
}

function addCharToDOM(char, contName, idx) {
  const container = document.getElementById(contName)
  // console.log("container [addCharToDOM]", container, container.children.item(idx), contName)
  const element = document.createElement('div')
  const newDigit = document.createTextNode(char)
  element.appendChild(newDigit)
  if (container.children.item(idx) != null) {
    oldElement = container.children[idx]
    newElement = container.appendChild(element)
    container.replaceChild(newElement, oldElement)
  } else {
    container.appendChild(element)  
  }
}

// basic function looping through the Array of characters
function digiStream(charList, col) {

  // index variable for our timed loop
  var idx = 0
  // start loop
  const timedLoop = setInterval(() => {
    const container = String('col' + col);
    addCharToDOM(charList[idx], container , idx)
    const currentElement = document.getElementById(container);
    // console.log( `current element/container [digiStream]: ${currentElement}`)
    currentElement.children[idx].classList.add('glow')

    if (idx > 0) {
      currentElement.children[idx - 1].classList.remove('glow');
      if (idx >= 42) {
        currentElement.children[idx].classList.remove('glow');
      }

      let bow = Math.round((Math.random() * 10));
      let randElem = Math.round((Math.random() * 47));
      let currentElementChild = currentElement.children[randElem];

      // console.log(currentElement);
      if (bow === 3 && currentElementChild) {
        currentElementChild.style.color = 'black';
      }
    }
    if (idx === 43) {
      idx = 0;
      // clearInterval(timedLoop)
    }
    idx++
  }, 50)
}


// Add digiStream to a column randomly every 50ms
var iCol = 0;
setInterval(() => {
  let randColumn = Math.floor((Math.random() * columnCount));
  // console.log("[addCol loop] random column: ", randColumn);
  genRandCharArray(60);
  digiStream(randCharArray, randColumn);


  iCol++;
}, 50)