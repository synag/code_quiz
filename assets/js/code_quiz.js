//Selectors goes here
var openScreen = document.querySelector("#box-title")
var openScreenPTag = document.querySelector('p');
var button = document.querySelector('#startBtn')
var timeEl = document.querySelector("#timer");
var containerQuiz = document.querySelector("#quizContainer");
var answerContainer = document.getElementsByClassName("answers");
// var form = document.querySelector(".formElement");
var initialsInput = document.querySelector("#initials");
var initialsSubmit = document.querySelector("#formSubmit");
var endScore = document.querySelector("#score");
var backbtn = document.querySelector("#backBtn")



//Global Variables
var secondsLeft = 75;
var score = ""
var output = [];
var moveQuestion= 0;
var initialInput =[];
var highlightPage =[];


//quiz questions and answers
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





//opening page is the default page for the program

function openingPage(){
// highScoreH1.style.display ="none";
// backBtn.style.display ="none";
// highScoreBtn.style.display ="none";
openScreen.style.display = "";
openScreenPTag.style.display = "";
button.style.display = "";
// form.style.display ="none";

}

//Start function hides the opening default page 
function start() {

openScreen.style.display = "none";
openScreenPTag.style.display = "none";
button.style.display = "none";
// form.style.display = "none";
// highScoreH1.style.display ="none";
// backBtn.style.display ="none";
// highScoreBtn.style.display ="none";

}


//Set timer function
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
//creates quiz and displays the input your initials and see your score
async function createQuiz(){
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

        output.push(
          `<div class="question" style = "font-size:40px; font-weight: bold; padding-top:1em; padding-bottom:1em; padding-left:10%"> ${currentQuestion.questions} </div>
          <div style ="text-align:left"> ${answers.join('')} </div>`
        );
      }
    );
      
          
      var singleQuestion = output[moveQuestion];
      
    
    //  }
     
    if (typeof singleQuestion === "undefined"){ 

      initialInput.push(
        '<h1 class="formElement">"All Done"</h1>'

      
      );
      
      
       containerQuiz.innerHTML = initialInput;
      // initialsInput.addEventListener("click", function(event) {
      // event.preventDefault();
      var doneMessage = document.createElement('h1')
      var button = document.createElement('input');
      var inputBox = document.createElement('input')
      var element=document.createElement('h2')
      var finalTime = " Your final Score is "+ secondsLeft;
      var doneH1 = "All Done"
         doneMessage.setAttribute("class", "formElement");
         inputBox.setAttribute("type", "text");
        button.setAttribute("type", "submit");
        //  button.setAttribute("type", "submit");
        doneMessage.textContent = doneH1;
        element.textContent = finalTime;
        containerQuiz.append(doneMessage);
        containerQuiz.append(element);
        containerQuiz.append(inputBox);
        containerQuiz.append(button);
     

      // });
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
          score = 2;
          
        }
        else{
          var answerResponse = document.createElement("h4");
          answerResponse.innerHTML = "wrong";
          containerQuiz.appendChild(answerResponse);
          secondsLeft = secondsLeft -10;
          
        
        }
        
       
        moveQuestion +=1

          setTimeout(function(){createQuiz();}, 1000);
          
      })

  }
  
        
  }

//Last page with the score 
  async function highlightScreen() {
    await createQuiz()

    highlightPage.push(
      ' <h1 class="highscorePage">Highscores</h1><button  id ="backBtn">Back </button><button  id ="highScore">Highscore</button>' 
    );
    
    containerQuiz.innerHTML = highlightPage;
//button to the home screen
    backBtn.addEventListener("click", function() {
      openingPage();
    });
    
  }


//Store into local storage function 
// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));


//Get items from local storage function 
// var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
// if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   } else {
//     return;
//   }
// }




openingPage();

//buttons

button.addEventListener("click", function(event) {
  event.preventDefault()
  
setTime();
start()
createQuiz()




});






 

