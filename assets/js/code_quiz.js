//Selectors goes here
var openScreen = document.querySelector("#box-title")
var openScreenPTag = document.querySelector('p');
var answerContainer = document.getElementsByClassName("answers")
var button = document.querySelector('#startBtn')
var input = document.querySelector(".input")
var timeEl = document.querySelector("#timer");
var containerQuiz = document.querySelector("#quizContainer")



//Global Variables
var secondsLeft = 75;
var score = ""
var output = []
var moveQuestion= 0;

var quizQuestion = [ 
    {
    questions: "what is a string ?",
    answers: {
        1: "number",
        2: "string",
        3: "booleon"
    },
    correctAnswer:{ 4: "string"

},
    },
{
questions: "what is a xys ?",
    answers: {
        1: "numbers",
        2: "stringw",
        3: "booleon"
    },
    correctAnswer:{ 4: "string"

  }
},

]





//start Function Hides the default page 

function openingPage(){
openScreen.style.display = "";
openScreenPTag.style.display = "";
button.style.display = "";
}

function start() {

openScreen.style.display = "none";
openScreenPTag.style.display = "none";
button.style.display = "none";

}



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
            `<h3 id="hover" style ="background-color:purple; margin:1em; color:white; padding:7px; font-size: 15px;" data-answer="wrong" class="answers">
              ${letter} :
              ${currentQuestion.answers[letter]};
            </h3>`
          );
         
        }

        for(letter in currentQuestion.correctAnswer){
  
          answers.push(
            `<h3 id="hover" style ="background-color:purple; margin:1em; color:white; padding:7px; font-size: 15px" data-answer="correct" class="answers">
              ${letter} :
              ${currentQuestion.correctAnswer[letter]};
            </h3>`
  
          );
         
        }
//random
        answers.sort()
  
        output.push(
          `<div class="question" style = "font-size:40px; font-weight: bold; padding-top:1em; padding-bottom:1em; padding-left:10%"> ${currentQuestion.questions} </div>
          <div style ="text-align:left"> ${answers.join('')} </div>`
        );
      }
    );
      
      var singleQuestion = output[moveQuestion]
      //call the nextQuestions variable and use += to move to next questions in the array
     
    
    // finally combine our output list into one string of HTML and put it on the page
    containerQuiz.innerHTML = singleQuestion
    // .join('');
   

    for (var i = 0; i < answerContainer.length; i++) {
      answerContainer[i].addEventListener('click', function(){
        alert("testing")
        var clickOption = this.getAttribute("data-answer")
        console.log(clickOption)
        if(clickOption==="correct"){
          var answerResponse = document.createElement("h4");
          answerResponse.textContent = "Correct";
          containerQuiz.append(answerResponse);
        
        }
        else{
          var answerResponse = document.createElement("h4");
          answerResponse.textContent = "Wrong";
          containerQuiz.append(answerResponse);
        }
        moveQuestion +=1;
        createQuiz()
      })

  }
  




    //   if (element.matches(".answers")) {
    //     var selectedAnswer = element.getAttribute("data-answer");
        
    //     if (selectedAnswer !=="correct") {
    //       element.setAttribute("style", "background-color:red");
    //       append
    //     } else {
    //       element.setAttribute("style", "background -color: green");
    //     }
    //   }
      
    // });

  }
// function localStorage(){
// localStorage.setItem("todos", JSON.stringify(todos));


// }

function localStorageGet(){



}
//game over function
//execute quiz

//store results function
// localStorage.setItem("todos", JSON.stringify(todos));

//get result function
// var storedTodos = JSON.parse(localStorage.getItem("todos"));



//startQuiz Hide Elements
// setTime();

openingPage()
button.addEventListener("click", function() {
setTime();
start()
createQuiz()
});






 

