 highScore = document.querySelector("#scoreDisplay");
 highScoreBtn = document.querySelector("#highScore")
 

  function getItem(){
    var keyValueArray = [];
    for (let i = 0; i < localStorage.length; i++) {
     var key = Object.keys(localStorage);
     var storageValue = localStorage.getItem(key[i]);
     var sortStorageValue =[];
     
     
   if(sortStorageValue.length!==localStorage.length){
        keyValueArray[i] = storageValue +" : "+ key[i];
      }
  }
       for (let i = 0; i < localStorage.length; i++){
        var scoreEl = document.createElement("h3");
       scoreEl.textContent = ((1+i)+") "+keyValueArray[i]);
       highScore.appendChild(scoreEl);
      }
   //need two for loops - last one sorts and appends to page 
  
  }
 
 backBtn.addEventListener("click", function(event) {
   event.preventDefault()
   window.location.href = "./index.html";

  });
  
  highScoreBtn.addEventListener("click", function(event) {
    event.preventDefault()
   
    getItem()
   });

 