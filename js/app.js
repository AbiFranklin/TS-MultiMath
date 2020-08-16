"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var utility_1 = require("./utility");
var newGame;
document.getElementById("startGame").addEventListener("click", function () {
    var player = new player_1.Player();
    player.name = utility_1.getValue("playername");
    var problemCount = Number(utility_1.getValue("problemCount"));
    var factor = Number(utility_1.getValue("factor"));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.diplayGame();
});
document.getElementById("calculate").addEventListener("click", function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map