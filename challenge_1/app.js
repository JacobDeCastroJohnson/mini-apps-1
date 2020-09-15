//============== TEST =====================
// onsole.log("Hello, World! -Love, Jacob");

function myTest() {
  console.log('It Is working here!');
  document.getElementById("test").innerHTML = "Hola, Mundo!";
  console.log(document.getElementById("test").innerHTML);
};

//Invoke the myTest function
myTest();


//================== ClassClick Check ===================

let allValues = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

var gameValues; //Each game will extract values from this array

//initialize the fisrt game with new values via slice
var newGameVals = function () {
  gameValues = allValues.slice();
};
newGameVals();


// var nextClickValue = gameValues.shift(); //removes and returns first item of array

var classClick = document.querySelectorAll('.test');

classClick.forEach(item => {
  // var clicked = false;

  item.addEventListener('click', event => {
    if (gameValues.length >= 1) {
      var nextClickValue = gameValues.shift()
      item.innerHTML = nextClickValue;
      // clicked = true;
    }
  })
})

//================== Tic Tac Toe Rules ===================



//================== Refresh Button Check ===================
// const refreshButton = document.getElementById('refresh');

// refreshButton.addEventListener('click', function(event) {
//   alert('Refresh Button has been clicked via app.js!');
// });

const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', function(event) {
  // alert('Refresh Button has been clicked via app.js!');

  document.querySelectorAll('.test').forEach(item => {
    var clicked = false; //re-initialize click state to false
    item.innerHTML = 'New Game';
  })
  newGameVals(); //re-populate the gameValues array
  console.log(gameValues);
});





/*================== PROJECT SANDBOX ======================

Conditionals on input

//Array of possible click outputs
FreshGame = [X, O, X, O, X, O, X, O, X] --> Maybe think about for every click, iterate through this array and return array[index] to display on the table screen

*/