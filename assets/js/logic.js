let startBtn = document.getElementById("start")
let timeSpan = document.getElementById("time")
let time = 0;

startBtn.addEventListener("click", function(event){
    event.preventDefault()
    startTimer()
})

// start time function 
function startTimer() {   
  // first set time to start at 0
   time = 0;  
  // Use the `setInterval()` method to set time interval
  var timeInterval = setInterval(function () {  // use the setinterval method that takes a function
    time++;  // increment time
    timeSpan.textContent = `${time} seconds`;  // populate html time span with time


    // stop countdown once timer hits 0 or condition to stop timer

    if(timeLeft === 27) {
      clearInterval(timeInterval); // clearinterval takes setinterval as argument
      // run a function here 
    }

    //
    // YOUR CODE HERE
    //
  },1000);  // set speed of timer
}