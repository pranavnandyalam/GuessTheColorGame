var buttons = document.getElementsByClassName('colorButton');
var heading;
heading = document.getElementById("colorValue");
var answerMessage = document.getElementById('answer');
var answerButton = Math.round(Math.random() * (buttons.length - 1));
function makeColorValue() {
    return Math.round(Math.random() * 255);
  }
  
  function setButtonColor(button, red, green, blue) {
    button.setAttribute('style','background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
  }
  
  
  
  var buttons = document.getElementsByClassName('colorButton');
  
  var heading = document.getElementById('colorValue');
  
  var answerMessage = document.getElementById('answer');
  
  var answerButton = Math.round(Math.random() * (buttons.length - 1));
  
  
for (var i = 0; i < buttons.length; i++) {
    var red = makeColorValue();
    var green = makeColorValue();
    var blue = makeColorValue();
    var count = 0;
    
    setButtonColor(buttons[i], red, green, blue);
    if (i === answerButton) {
        heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }
    buttons[i].addEventListener('click', function() {
        
        //for (var x = 0; x < 2; x++) {
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
            } else { 
                answerMessage.innerHTML = "Wrong answer! Guess again! 1 Chance Left!";
                count++;
                if (count == 2) {
                    gameOverFunction(count);
                }
                
            }
        
            
            
            //answerMessage.innerHTML = "Game Over";
        //}
    });
  
}

function gameOverFunction(counter) {
    if (counter === 2) {
        answerMessage.innerHTML = "Game Over!";
    }
}

