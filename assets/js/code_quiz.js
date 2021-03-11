//Selectors goes here
var openScreen = document.querySelector("#box-title")
var openScreenPTag = document.querySelector('p');
var anchor = document.querySelector("a")
var button = document.querySelector('#startBtn')
var input = document.querySelector(".input")
var timeEl = document.querySelector("#timer");



//Global Variables
var secondsLeft = 75;
var score = ""

var quizes = [ 
    {
    questions: "what is a string ?",
    answer: {
        a: "number",
        b: "string",
        c: "booleon"
    },
    correctAnswer: "string"

},
{
questions: "what is a xys ?",
    answer: {
        a: "numbers",
        b: "stringw",
        c: "booleon"
    },
    correctAnswer: "string"

},

]





//start Function Hides the default page 

function start() {

openScreen.style.display = "none";
openScreenPTag.style.display = "none";
button.style.display = "none";

}

//Funtion init


// Selects element by class


// Selects element by id


//Timer Function
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //  sendMessage();
    }
  }, 1000);
}

//game over function
//execute quiz

//store results function
// localStorage.setItem("todos", JSON.stringify(todos));

//get result function
// var storedTodos = JSON.parse(localStorage.getItem("todos"));



//startQuiz Hide Elements
// setTime();
button.addEventListener("click", function() {
   //set attribute to display none
});
setTime();





