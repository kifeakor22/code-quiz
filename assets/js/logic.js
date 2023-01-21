let startBtn = document.getElementById("start")
let timeSpan = document.getElementById("time")
let questionDiv =document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
let choices = document.getElementById("choices")
let end = document.getElementById("end-screen")
let finaScore = document.getElementById("final-score")
let submit = document.getElementById("submit")
let initials = document.getElementById("initials")
let time = 0;
let timeInterval

startBtn.addEventListener("click", function(event){
    event.preventDefault()
    startTimer()
    displayQuestion(questions)
})

// start time function 
function startTimer() {   
  // first set time to start at 0
   time = 60;  
  // Use the `setInterval()` method to set time interval
   timeInterval = setInterval(function () {  // use the setinterval method that takes a function
    time--;  // increment time
    timeSpan.textContent = `${time} seconds`;  // populate html time span with time


    // stop countdown once timer hits 0 or condition to stop timer

if(time === 0) {
      clearInterval(timeInterval); // clearinterval takes setinterval as argument
    }
  },1000);  // set speed of timer
}

let currentQuestionIndex = 0;
let score =0;

displayQuestion = function(questions) {
    questionDiv.setAttribute("class","start")
    document.getElementById("start-screen").setAttribute("class","hide")
    let currentQuestion = questions[currentQuestionIndex];
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
            if(choice.isCorrect) {
                score++;
                currentQuestionIndex++;
                if(currentQuestionIndex < questions.length) {
                    displayQuestion(questions);
                } else {
                    endGame()
                    clearInterval(timeInterval)
                    // all questions have been answered, display final message
                }
            } else {
                // if choice is incorrect
                time-=10
                if(time >0) {
                    currentQuestionIndex++;
                    if(currentQuestionIndex < questions.length){
                        displayQuestion(questions);
                    }else {
                        endGame()
                        clearInterval(timeInterval)
                    }
                }else {
                    endGame()
                    clearInterval(timeInterval)
                }
            }
        });
    } 
   
}

endGame = function () {
    end.setAttribute("class","start")
    questionDiv.setAttribute("class","hide")
    finaScore.textContent  = score
    submit.addEventListener("click",function(){
        let name = initials.value
        localStorage.setItem("name",name)
        localStorage.setItem("score",score)
        window.location = "highscores.html"
    })

}


    
    
    
   



