//Selectors goes here
var openScreen = document.querySelector("#box-title")
var openScreenPTag = document.querySelector('p');
var anchor = document.querySelector("a")
var button = document.querySelector('start')
var input = document.querySelector(".input")



//Global Variables
var timer =""
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


/
//startQuiz Hide Elements

//Funtion init
//Timer function

//execute quiz

//store results function
localStorage.setItem("todos", JSON.stringify(todos));

//get result function
var storedTodos = JSON.parse(localStorage.getItem("todos"));









