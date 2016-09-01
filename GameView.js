

const context = document.querySelector("#context");
const text = document.querySelector("#text");
const choices = document.querySelector("#choices");


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
  }
};

const moveTo = function(room) {
  newContext(room.context)
  newText(room.text)
  newChoices(room.choices)
};
