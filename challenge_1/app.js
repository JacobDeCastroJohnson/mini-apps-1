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

var classClick = document.querySelectorAll('.test');

classClick.forEach(item => {
  var clicked = false;
  item.addEventListener('click', event => {
    if (gameValues.length >= 1 && !clicked) {
      var nextClickValue = gameValues.shift()
      item.innerHTML = nextClickValue;
      clicked = true;
    }
  })
})

//================== Tic Tac Toe Rules ===================









/*================== PROJECT SANDBOX ======================

Conditionals on input

//Array of possible click outputs
FreshGame = [X, O, X, O, X, O, X, O, X] --> Maybe think about for every click, iterate through this array and return array[index] to display on the table screen

*/