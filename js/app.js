var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputVariable = function (elementID) {
        var inputElement = document.getElementById(elementID);
        return inputElement.value;
    };
    return Utility;
}());
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = "<h2>Scoreboard</h2>";
        for (var i = 0; i < this.results.length; i++) {
            var result = this.results[i];
            output += "<h4> " + result.playerName + " : " + result.score + " / " + result.problemCount + " for factor " + result.factor + " </h4>";
        }
        var scoresElement = document.getElementById("scores");
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.diplayGame = function () {
        var gameForm = "";
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += "<div class=\"form-group\"> <label for=\"answer" + i + "\" class=\"col-sm-2 control-label\"> " + String(this.factor) + " x " + i + " </label> <div class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer" + i + "\" size=\"5\"</div></div>";
        }
        var gameElement = document.getElementById("game");
        gameElement.innerHTML = gameForm;
        document.getElementById("calculate").removeAttribute("disabled");
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(Utility.getInputVariable("answer" + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor,
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById("calculate").setAttribute("disabled", "true");
    };
    return Game;
}());
var newGame;
document.getElementById("startGame").addEventListener("click", function () {
    var player = new Player();
    player.name = Utility.getInputVariable("playername");
    var problemCount = Number(Utility.getInputVariable("problemCount"));
    var factor = Number(Utility.getInputVariable("factor"));
    newGame = new Game(player, problemCount, factor);
    newGame.diplayGame();
});
document.getElementById("calculate").addEventListener("click", function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map