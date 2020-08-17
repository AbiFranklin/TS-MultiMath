import { Player } from "./player";
import { GameOne, GameTwo } from "./game";
import { getValue } from "./utility";

let newGameOne: GameOne;
let newGameTwo: GameTwo;

if (document.getElementById("startGame")) {
  document.getElementById("startGame")!.addEventListener("click", () => {
    const player: Player = new Player();
    player.name = getValue("playername");

    const problemCount: number = Number(getValue("problemCount"));
    const factor: number = Number(getValue("factor"));

    newGameOne = new GameOne(player, problemCount, factor);
    newGameOne.displayGame();
  });
} else {
  document.getElementById("startGameTwo")!.addEventListener("click", () => {
    const player: Player = new Player();
    player.name = getValue("playername");

    const problemCount: number = Number(getValue("problemCount"));
    const factor: number = Number(getValue("factor"));

    newGameTwo = new GameTwo(player, problemCount, factor, []);
    newGameTwo.displayGame();
  });
}

document.getElementById("calculate")!.addEventListener("click", () => {
  if (document.getElementById('startGame')) {
    newGameOne.calculateScore();
  } else {
    newGameTwo.calculateScore();
  }
});
