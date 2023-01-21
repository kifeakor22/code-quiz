let highscores = document.getElementById("highscores")
li = document.createElement("li")
li.textContent =`${localStorage.getItem("name")} - ${localStorage.getItem("score")}`
highscores.appendChild(li)