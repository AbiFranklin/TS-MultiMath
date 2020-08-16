"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getValue = void 0;
function getInputVariable(elementID) {
    var inputElement = (document.getElementById(elementID));
    return inputElement.value;
}
exports.getValue = getInputVariable;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map