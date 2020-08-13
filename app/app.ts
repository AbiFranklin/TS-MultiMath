function startGame() {
    //starting a new game
  var messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "Test new message";
}

document.getElementById("startGame")!.addEventListener("click", startGame);
