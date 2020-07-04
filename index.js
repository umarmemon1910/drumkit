let numberOfDrums = document.querySelectorAll(".drum").length;
for (let index = 0; index < numberOfDrums; index++) {
  document
    .querySelectorAll("button")
    [index].addEventListener("click", function () {
      playSound(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

function playSound(keyText) {
  switch (keyText) {
    case "w":
      let audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;
    case "a":
      let audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;
    case "s":
      let audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;
    case "d":
      let audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;
    case "j":
      let audioJ = new Audio("sounds/crash.mp3");
      audioJ.play();
      break;
    case "k":
      let audioK = new Audio("sounds/kick-bass.mp3");
      audioK.play();
      break;
    case "l":
      let audioL = new Audio("sounds/snare.mp3");
      audioL.play();
      break;
    default:
      break;
  }
  buttonClickAnimation(keyText);
}

function buttonClickAnimation(keyText) {
  let activeButton = document.querySelector("." + keyText);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
