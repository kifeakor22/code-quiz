let startBtn = document.getElementById("start")
let timeSpan = document.getElementById("time")
let questionDiv =document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
let choices = document.getElementById("choices")
let time = 0;

let score =

startBtn.addEventListener("click", function(event){
    event.preventDefault()
    startTimer()
    displayQuestion(questionTO)
})

// start time function 
function startTimer() {   
  // first set time to start at 0
   time = 60;  
  // Use the `setInterval()` method to set time interval
  var timeInterval = setInterval(function () {  // use the setinterval method that takes a function
    time--;  // increment time
    timeSpan.textContent = `${time} seconds`;  // populate html time span with time


    // stop countdown once timer hits 0 or condition to stop timer

    if(time === 0) {
      clearInterval(timeInterval); // clearinterval takes setinterval as argument
      // run a function here 
    }

    //
    // YOUR CODE HERE
    //
  },1000);  // set speed of timer
}

let currentQuestionIndex = 0

displayQuestion = function(questionTO) {
    questionDiv.setAttribute("class","start")
    document.getElementById("start-screen").setAttribute("class","hide")
    let currentQuestion = questionTO[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choices.textContent = ""; // clear any previous choices
    for(let i = 0; i < currentQuestion.choices.length; i++) {
        let choice = currentQuestion.choices[i];
        let choiceList = document.createElement("ol")
        let choiceBtn = document.createElement("button");
        choiceList.appendChild(choiceBtn)
        choices.appendChild(choiceList)
        choiceBtn.classList.add("choice");
        choiceBtn.textContent = choice.text;
        choiceBtn.addEventListener("click", function() {
            if(choice) {
                currentQuestionIndex++;
                if(currentQuestionIndex < questionTO.length) {
                    displayQuestion(questionTO);
                } else {
                    // all questions have been answered, display final message
                    
                }
            } else {
                // display message for incorrect answer
            }
        });
        choices.appendChild(choiceBtn);
    }
}


    
    //for(i=0;i<questionTO.length ;i++){
       //quest = questionTO[i].question
      //questionTitle.textContent = quest
    
   



// displayQuestion = function(questionTO) {
   // questionDiv.setAttribute("class","start")
    //document.getElementById("start-screen").setAttribute("class","hide")
    //let currentQestion = questionTO[currentQuestionIndex]
    //questionTitle.textContent = currentQestion.prompt;
   // choices.textContent = " "

     // if(quest){
       // choice = questionTO[i].choices
       // for(j=0; j<choice.length;j++){
           // ans = choice[j].text
       //  }
    //  }
//}
    
//}
