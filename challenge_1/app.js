//============== TEST =====================
// onsole.log("Hello, World! -Love, Jacob");

function myTest() {
  console.log('It Is working here!');
  document.getElementById("test").innerHTML = "Hola, Mundo!";
};

//Invoke the myTest function
myTest();

//================== Button Check ===================
const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', function(event) {
  alert('Refresh Button has been clicked via app.js!');
});







/*  ========== PROJECT SANDBOX ======================

Conditionals on input

//Array of possible click outputs
FreshGame = [X, O, X, O, X, O, X, O, X] --> Maybe think about for every click, iterate through this array and return array[index] to display on the table screen

*/