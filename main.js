// Gameboard object
function Gameboard (){
  //store the gameboard as an array
  var board = ["","","","","","","","",""];
  //players are also going to be stored in objects,

  function Players(name){
    return {
        Playersname(){
          `${name}`
        }
    }
  }
}
const player1 = Players(Bright)
player1.Playersname()


/*function myFunction() {
    let person = prompt("Please enter your name", " ");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! have fun.";
    }
  }
  
function Game(){
     gameboard = document.querySelector("#board")
      
     let gameboard = ["","","",
                       "","","",
                       "","", ""];

 
 function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.gameControl = function() {
    return  gameboard
  };

}

}
const player1 = new Player(' getValue()', 'X');
const player2 = new Player('also steve', 'O');

function getValue() {
  // Get the input element by its ID
  var inputElement = document.getElementById('username');

  // Get the value of the input
  var inputValue = inputElement.value;

  // Display the value (for demonstration purposes)
  alert('Input value: ' + inputValue);
}

 function gameOver(winningPlayer){
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winner!");
}*/