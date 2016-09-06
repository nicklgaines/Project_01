

const context = document.querySelector("#context");
const text = document.querySelector("#text");
const choices = document.querySelector("#choices");
const button = document.getElementsByTagName("button")

let winCounterBox = document.querySelector("#winCounter");
let winCounterText = document.createElement('h2')
winCounterBox.appendChild(winCounterText);

let winCounter= -1;
winCounterText.innerHTML= winCounter;





const newContext = function newContext(media) {
  context.style.backgroundImage = "url(" + media + ")";
};

const newText = function newText(words) {
  text.innerHTML = words.replace();
};


const newChoices = function(choicesList) {
  choices.innerHTML = "";
  for (let i = 0; i < choicesList.length; i++) {
    choices.innerHTML += "<button onClick="+choicesList[i][1]+">"
                          + choicesList[i][0] + "</button>";
    if (choicesList[i][0]) {
      button.className = 'Obey';
    } else if (choicesList[i][1]) {
      button.className = 'Disobey';
    }
  }
};



const moveTo = function(room) {
  newContext(room.context)
  newText(room.text)
  newChoices(room.choices)
  if (room.secret) {
    winCounter += 1;
    winCounterText.innerHTML= 'Endings Found: ' + winCounter;
    if (winCounter === 10) {
      let overMessage;
      overMessage = document.createElement('h4');
      winCounterBox.appendChild(overMessage);
      overMessage.innerHTML = "CONGRATULATIONS! <br> You found ten endings. <br> You truly are a winner. <br> Now...find the rest...";
    }
  }


};
