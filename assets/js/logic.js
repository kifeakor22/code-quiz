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
let timeInterval;
let currentQuestionIndex = 0;
let score =0;

startBtn.addEventListener("click", function(event){
    event.preventDefault()
    startTimer()
    if(time > 0){
        displayQuestion(questions)
    }else {
        endGame()
    }
    
})

// start time function 
function startTimer() {   
   time = 60;  
   timeInterval = setInterval(function () {
    time--; 
    timeSpan.textContent = `${time} seconds`; 
    if(time === 0) {
      clearInterval(timeInterval); // clearinterval takes setinterval as argument
      endGame()
    }
  },1000);  
}



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
        choiceBtn.addEventListener("click", function(event) {
            event.preventDefault()
            if(choice.isCorrect) {
                score++;
                currentQuestionIndex++;
                if((currentQuestionIndex < questions.length)||(time > 0)) {
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


    
    
    
   



