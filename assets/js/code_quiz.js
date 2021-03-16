//Selectors goes here
var openScreen = document.querySelector("#box-title")
var openScreenPTag = document.querySelector('p');
var button = document.querySelector('#startBtn')
var timeEl = document.querySelector("#timer");
var containerQuiz = document.querySelector("#quizContainer");
var answerContainer = document.getElementsByClassName("answers");
var form = document.querySelector(".formElement");
var initialsInput = document.querySelector("#initials");
var initialsSubmit = document.querySelector("#formSubmit");
var endScore = document.querySelector("#score");
var highScoreH1 = document.querySelector(".highscorePage")
var backBtn = document.querySelector('#backBtn')
var highScoreBtn =document.querySelector("#highScore")




//Global Variables
var secondsLeft = 75;
var score = ""
var output = [];
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
form.style.display ="none";
highScoreH1.style.display ="none";
backBtn.style.display ="none";
highScoreBtn.style.display ="none";
}

function start() {
 ;

openScreen.style.display = "none";
openScreenPTag.style.display = "none";
button.style.display = "none";
form.style.display = "none";
highScoreH1.style.display ="none";
backBtn.style.display ="none";
highScoreBtn.style.display ="none";

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
        answers.sort()
        output.push(
          `<div class="question" style = "font-size:40px; font-weight: bold; padding-top:1em; padding-bottom:1em; padding-left:10%"> ${currentQuestion.questions} </div>
          <div style ="text-align:left"> ${answers.join('')} </div>`
        );
      }
    );
      
          
      var singleQuestion = output[moveQuestion]
      
    
    //  }
     
    if (typeof singleQuestion === "undefined"){ // finally combine our output list into one string of HTML and put it on the page
      // return
      endGame()
      containerQuiz.innerHTML = "All Done";
      containerQuiz.setAttribute("class", "form-container");
      var inputButton = document.createElement("input")
      containerQuiz.appendChild(inputButton);
      var button = document.createElement("button")
      
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
        
        // if (typeof output === "undefined"){
        //   endGame()
        //   stopPropagation()
        // }
        moveQuestion +=1

          setTimeout(function(){ createQuiz(); }, 1000);
          

          
      })

  }
  
        
  }


 function endGame(){
  
  form.style.display =""; 


  var userResults = {
    userInitial: initialsInput.value.trim(),
    highScore: " "
    };
     
    localStorage.setItem("userResults", JSON.stringify(userResults));

     initialsSubmit.addEventListener("submit", function() {
      
    
      });
      // if (userResults === "") {
      //  alert("please add credentials")
      //  }

       
    
      //  endScore.innerHTML = score;

      // if(event!=null) {
      //   form.style.display = "none";
      //   highLightScreen()
      // }
      }
 
 function highLightScreen(){
    highScoreH1.style.display ="";
    backBtn.style.display ="";
    highScoreBtn.style.display ="";
    backBtn.addEventListener("click", function() {
      openingPage();
    
  });
  backBtn.addEventListener("click", function() {
    //display user score below
  });

}   











openingPage();

button.addEventListener("click", function() {
setTime();
start()
createQuiz()
endGame()
highLightScreen()

});






 

