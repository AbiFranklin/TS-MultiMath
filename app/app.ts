/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

document.getElementById("startGame")!.addEventListener("click", () => {
  const player: Player = new Player();
  player.name = Utility.getInputVariable("playername");

  const problemCount: number = Number(Utility.getInputVariable("problemCount"));
  const factor: number = Number(Utility.getInputVariable("factor"));

  newGame = new Game(player, problemCount, factor);
  newGame.diplayGame();
});

document.getElementById("calculate")!.addEventListener("click", () => {
  newGame.calculateScore();
});
