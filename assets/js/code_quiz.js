var openScreen = document.querySelector("#box-title");
var openScreenPTag = document.querySelector('#description');
var button = document.querySelector('#startBtn');
var timeEl = document.querySelector("#timer");
var containerQuiz = document.querySelector("#quizContainer");
var answerContainer = document.getElementsByClassName("answers");
// var form = document.querySelector(".formElement");
 var initialsInput = document.querySelector("#initial");
//  var initialsSubmit = document.querySelector("#formSubmit");
var endScore = document.querySelector("#score");
var backbtn = document.querySelector("#backBtn"); //Maybe
var containerAll = document.querySelector(".containerAll") //good


//Global Variables
var secondsLeft = 75;
var score = "";
var output = [];
var moveQuestion= 0;
var initialInput =[];
var highlightPage =[];


//quiz questions and answers
var quizQuestion = [ 
    {
    questions: "Which html tag defines and article?",
    answers: {
        1: "aside",
        2: "b",
        3: "header"
    },
    correctAnswer:{ 4: "article"

},
    },
{
questions: "what does the background-color css do?",
    answers: {
        1: "sets color of image",
        2: "sets the image pixel",
        3: "it sets the text color"
    },
    correctAnswer:{ 4: "sets background color of an element"

  }
},
{
  questions: "what create space around elements, outside of any defined borders ?",
      answers: {
          1: "padding",
          2: "border",
          3: "element"
      },
      correctAnswer:{ 4: "margin"
  
    }
  },
  {
    questions: "what properties are used to generate space around an element's content, inside of any defined borders?",
        answers: {
            1: "border",
            2: "margin",
            3: "element"
        },
        correctAnswer:{ 4: "padding"
    
      }
    },
    {
      questions: "which operator assigns value to variable?",
          answers: {
              1: "+",
              2: "-",
              3: "*"
          },
          correctAnswer:{ 4: "="
      
        }
      },

]

var results = {
        initial: initialsInput.value,
      score: finalScore
   };

//opening page is the default page for the program

function openingPage(){

openScreen.style.display = "";
openScreenPTag.style.display = "";
button.style.display = "";

}

//Start function hides the opening default page 
function start() {

openScreen.style.display = "none";
openScreenPTag.style.display = "none";
button.style.display = "none";
}

//Set timer function
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearTimeout(timerInterval);
      endGame();
      secondsLeft = "";
      // Calls function to create and append image
    //  sendMessage();
    }
  }, 1000);
}
//creates quiz and displays the input your initials and see your score
 function createQuiz(){
    // variable to store the HTML output
     output = [];
    // for each question...
    quizQuestion.forEach(
      (currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){

          answers.push(
            `<h3 id="hover" style ="background-color:purple; margin:1em; color:white; padding:7px; width:fit-content;font-size: 25px;margin-left: 49px" data-answer="wrong" class="answers">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </h3>`
          );
         
        }

        for(letter in currentQuestion.correctAnswer){
  
          answers.push(
            `<h3 id="hover" style ="background-color:purple; margin:1em; color:white; padding:7px; font-size: 25px; width:fit-content; margin-left: 49px" data-answer="correct" class="answers">
              ${letter} :
              ${currentQuestion.correctAnswer[letter]}
            </h3>`
          );
        }

        output.push(
          `<div class="question" style = "font-size:40px; font-weight: bold; padding-top:1em; padding-bottom:1em; padding-left:10%"> ${currentQuestion.questions} </div>
          <div style ="text-align:left; width:max-content"> ${answers.join('')} </div>`
        );
      }
    );
      
          
      var singleQuestion = output[moveQuestion];
     
    if (typeof singleQuestion === "undefined"|| secondsLeft <=0){ 

      endGame()
    }

    else{
      containerQuiz.innerHTML = singleQuestion
    }
  
//Need to fix bug of mulitple answer apearing
    for (var i = 0; i < answerContainer.length; i++) {
      answerContainer[i].addEventListener('click', function(){
        var clickOption = this.getAttribute("data-answer");
    
        if(clickOption==="correct"){
          var answerResponse = document.createElement("h4");
          answerResponse.innerHTML = "correct";
          containerQuiz.appendChild(answerResponse);
          
          
        }
        else{
          var answerResponse = document.createElement("h4");
          answerResponse.innerHTML = "wrong";
          containerQuiz.appendChild(answerResponse);
          secondsLeft = secondsLeft -10;
        }
        moveQuestion +=1;

          setTimeout(function(){createQuiz();}, 1000);
          
      });
  }     
  }


//Store into local storage function 
function storeItem() {

 localStorage.setItem("results", JSON.stringify(results));

}

function getItem(){
//Get items from local storage function 
// var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
// if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   } else {
//     return;
//   }
}
var enterScore = document.querySelector(".enterScore");
var finalScoreText = document.querySelector("#finalScore");
var submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(){
storeItem()
});






function endGame(){
 var finalScore = secondsLeft;
 containerQuiz.style.display =("none");
 enterScore.style.display =("block");
 
 finalScoreText.textContent = ("Your final score is " + finalScore);
};


openingPage();

//buttons

button.addEventListener("click", function(event) {
  event.preventDefault();
  
setTime();
start();
createQuiz();

});

// need to update listener and storage
//clean up bad code
// document.querySelector("#formSubmit").addEventListener("click", function(event) {

 

//   var results = {
//     initials: initialsInput.value,
//     score: ""
//  };
//     event.preventDefault();

// // var initialsInput = document.querySelector("#initials");
// // var initialsSubmit = document.querySelector("#formSubmit");
// //   storeItem();
 
//   });



 








 

