//============== TEST =====================
// onsole.log("Hello, World! -Love, Jacob");

function myTest() {
  console.log('It Is working here!');
  document.getElementById("test").innerHTML = "Hola, Mundo!";
};

//Invoke the myTest function
myTest();

//================== Button Click Check ===================
const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', function(event) {
  alert('Refresh Button has been clicked via app.js!');
});

//================== Cell Click Check ===================

let gameValues = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

// var nextClickValue = gameValues.shift(); //removes and returns first item of array


//Cell 1
const cellClick = document.getElementById('cellTest');

cellClick.addEventListener('click', function(event) {

  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClick.innerHTML = nextClickValue;
  }
});

//Cell 2
const cellClickTwo = document.getElementById('cellTest2');

cellClickTwo.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickTwo.innerHTML = nextClickValue;
  }
});

//Cell 3
const cellClickThree = document.getElementById('cellTest3');

cellClickThree.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickThree.innerHTML = nextClickValue;
  }
});

//Cell 4
const cellClickFour = document.getElementById('cellTest4');

cellClickFour.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickFour.innerHTML = nextClickValue;
  }
});

//Cell 5
const cellClickFive = document.getElementById('cellTest5');

cellClickFive.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickFive.innerHTML = nextClickValue;
  }
});

//Cell 6
const cellClickSix = document.getElementById('cellTest6');

cellClickSix.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickSix.innerHTML = nextClickValue;
  }
});

//Cell 7
const cellClickSeven = document.getElementById('cellTest7');

cellClickSeven.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickSeven.innerHTML = nextClickValue;
  }
});

//Cell 8
const cellClickEight = document.getElementById('cellTest8');

cellClickEight.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickEight.innerHTML = nextClickValue;
  }
});

//Cell 9
const cellClickNine = document.getElementById('cellTest9');

cellClickNine.addEventListener('click', function(event) {
  if (gameValues.length >= 1) {
    var nextClickValue = gameValues.shift()
    cellClickNine.innerHTML = nextClickValue;
  }
});


//================== Class Click Check ===================
// const classClick = document.getElementsByClassName('one');
// console.log(classClick);
// // classClick.addEventListener('click', function(event) {
// //   // alert('This Cell has been clicked via app.js!');
// //   var nextClickValue = gameValues.shift()
// //   classClick.innerHTML = nextClickValue;
// // });
//===========================================================








/*  ========== PROJECT SANDBOX ======================

Conditionals on input

//Array of possible click outputs
FreshGame = [X, O, X, O, X, O, X, O, X] --> Maybe think about for every click, iterate through this array and return array[index] to display on the table screen

*/