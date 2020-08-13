"use strict";
var _a;
var startGame = function () {
    var playerName = getInpuVariable('playername');
    postScore(5, playerName);
};
var getInpuVariable = function (elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
};
var postScore = function (score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMathPlayer'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
};
var logError = function (err) {
    console.log("ERROR: " + err);
};
var logMessage = function (message) { return console.log("MESSAGE: " + message); };
(_a = document.getElementById('startGame')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);
//# sourceMappingURL=app.js.map