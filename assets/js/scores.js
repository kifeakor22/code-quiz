let highscores = document.getElementById("highscores")
 let highScore = JSON.parse(localStorage.getItem("storedScores"))
 let clear = document.getElementById("clear")


for(i=0; i< highScore.length; i++){
    li = document.createElement("li")
    li.textContent = `${highScore[i].player} scored ${highScore[i].scor}`
    highscores.appendChild(li)
}


clear.addEventListener("click", function(event){
    localStorage.clear()
    highscores.textContent = ""
})