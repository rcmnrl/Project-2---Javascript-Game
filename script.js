function startGame() {
   
    document.addEventListener("keydown", event => {
        if(event.key==="ArrowLeft"){moveLeft();}
        if(event.key==="ArrowRight"){moveRight();}
      });
      
      var character = document.getElementById("character");
      function moveLeft(){
          let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
          left -= 100;
          if(left>=0){
              character.style.left = left + "px";
          }
      }
      function moveRight(){
          let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
          left += 100;
          if(left<300){
              character.style.left = left + "px";
          }
      }

     
    var block = document.getElementById("block");
    var counter = 0;
    block.addEventListener("animationiteration", () => {
      var random = Math.floor(Math.random() * 3);
      let left = random * 100;
      block.style.left = left + "px";
      counter++;
    
    });
  
    setInterval(function () {
      var characterLeft = parseInt(
        window.getComputedStyle(character).getPropertyValue("left")
      );
      var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
      );
      var blockTop = parseInt(
        window.getComputedStyle(block).getPropertyValue("top")
      );
      if (
        characterLeft == blockLeft &&
        blockTop < 500 &&
        blockTop > 370
      ) {
        alert("Game over. Bounty Rush Score: " + counter);
        block.style.animation = "none";
         stopAudio();
         gameOverSound.play();
      }
    }, 1);
  }
  

  var audio = document.getElementById("myAudio");


  function playAudio() {
    audio.play();
  }
  
 
  function pauseAudio() {
    audio.pause();
    
  }
  
  function setVolume(volume) {
    audio.volume = volume;
  }
 
  document.getElementById("startButton").addEventListener("click", function () {
    console.log("Start button clicked");
    startGame();
    audio.play();
 
  });


  function stopAudio() {
    audio.pause();          
    audio.currentTime = 0;  
  }
  
  
  var instructionsModal = document.getElementById("instructions-modal");
  var instructionsButton = document.getElementById("instructions-button");
  var closeButton = document.querySelector(".close-button");
  
  // Open the modal when the button is clicked
  instructionsButton.onclick = function() {
      instructionsModal.style.display = "block";
  }
  
  // Close the modal when the close button is clicked
  closeButton.onclick = function() {
      instructionsModal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
      if (event.target == instructionsModal) {
          instructionsModal.style.display = "none";
      }
  }


  document.getElementById("right").addEventListener("touchstart", moveRight);
  document.getElementById("left").addEventListener("touchstart", moveLeft);