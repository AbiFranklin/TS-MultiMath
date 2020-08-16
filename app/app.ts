import { Player } from "./player";
import { Game } from "./game";
import { getValue } from "./utility";

let newGame: Game;

document.getElementById("startGame")!.addEventListener("click", () => {
  const player: Player = new Player();
  player.name = getValue("playername");

  const problemCount: number = Number(getValue("problemCount"));
  const factor: number = Number(getValue("factor"));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

document.getElementById("calculate")!.addEventListener("click", () => {
  newGame.calculateScore();
});
