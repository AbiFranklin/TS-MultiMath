"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
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
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map