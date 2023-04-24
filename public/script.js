(function () {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");

  var startButton = document.querySelector(".start");
  var pauseButton = document.querySelector(".pause");
  var resetButton = document.querySelector(".reset");

  var countDownTimer = null;

  // Start Timer Button - START
  startButton.addEventListener("click", function () {
    if (+hour.value === 0 && +min.value === 0 && +sec.value === 0) {
      return;
    }

    function startInterval() {
      startButton.style.display = "none";
      pauseButton.style.display = "initial";
      countDownTimer = setInterval(function () {
        Timer();
      }, 1000);
    }
    startInterval();
  });

  // Start Timer Button - END

  function stopInterval(state) {
    startButton.innerHTML = state === "pause" ? "Continue" : "Start";
    startButton.style.display = "initial";
    pauseButton.style.display = "none";

    clearInterval(countDownTimer);
  }

  function Timer() {
    console.log(countDownTimer, "countDownTimer");

    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value - 59);
    }
    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value - 60);
    }

    if (+hour.value === 0 && +min.value === 0 && +sec.value === 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      startButton.style.display = "initial";
      pauseButton.style.display = "none";
      stopInterval();
    } else if (+sec.value !== 0) {
      sec.value = `${+sec.value - 1}`;
    } else if (+min.value !== 0 && +sec.value === 0) {
      sec.value = 59;
      min.value = `${+min.value - 1}`;
    } else if (+hour.value !== 0 && +min.value === 0) {
      min.value = 60;
      hour.value = `${+hour.value - 1}`;
    }
  }

  // Stop Timer Button - START
  pauseButton.addEventListener("click", function () {
    stopInterval("pause");
  });
  // Start Timer Button - END



  
  // Reset Timer Button - START
  resetButton.addEventListener("click", function () {
    hour.value = "";
    min.value = "";
    sec.value = "";
    startButton.style.display = "initial";
    pauseButton.style.display = "none";
    stopInterval();
  });
  // Reset Timer Button - END
})();

//  WE used IIFE which helps to secure data, help to secure private information and variables
