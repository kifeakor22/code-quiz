// variables
let startBtn = document.getElementById("start")
let timeSpan = document.getElementById("time")
let questionDiv =document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
let choices = document.getElementById("choices")
let end = document.getElementById("end-screen")
let finaScore = document.getElementById("final-score")
let submit = document.getElementById("submit")
let initials = document.getElementById("initials")
let feedback = document.getElementById("feedback")
let questImage = document.getElementById("questImage")
let time = 0;
let timeInterval;
let currentQuestionIndex = 0;
let score =0;


// start game with start button click event

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

// display question function 

displayQuestion = function(questions) {
    questionDiv.setAttribute("class","start") // show question div
    document.getElementById("start-screen").setAttribute("class","hide") // hide start page div
    let currentQuestion = questions[currentQuestionIndex]; // get current question
    questionTitle.textContent = currentQuestion.question; // display current question title on question title div
    // check if current question contains an image and display it
    if(currentQuestion.image){
        questImage.src = currentQuestion.image
    }
    // clear any previous choices 
    choices.textContent = ""; 

    // loop through Currrent question choices and display them as buttons 

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
                 feedback.setAttribute("class", "correct")
                 feedback.textContent = "Correct"
                score++;
                currentQuestionIndex++;
                 setTimeout(function(){
                    feedback.textContent = "";
                    feedback.setAttribute("class", "hide")
                 }, 1500);

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
                    feedback.setAttribute("class", "wrong")
                    feedback.textContent = "Wrong!"
                    currentQuestionIndex++;
                    setTimeout(function(){
                        feedback.textContent = "";
                        feedback.setAttribute("class", "hide");
                    },1500);
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
// show feedback div
function showFeedback() {
    if(choice.isCorrect){
        feedback.setAttribute("class", "start")
        feedback.textContent = "Correct"
    } else if(!choice.isCorrect) {
        feedback.setAttribute("class", "start")
        feedback.textContent = "incorrect"
    }else {
        feedback.setAttribute("class", "hide")
    }
     
}

// End game function 

endGame = function () {
    end.setAttribute("class","start")
    questionDiv.setAttribute("class","hide")
    finaScore.textContent  = score

}

// submit button event 
submit.addEventListener("click",function(){
        let name = initials.value
        storedScores = JSON.parse(localStorage.getItem("storedScores")) || []
        let  newScore ={
            scor: score,
            player: name
        }
        storedScores.push(newScore)
        localStorage.setItem("storedScores", JSON.stringify(storedScores))
       
        window.location = "highscores.html"
    })


   


