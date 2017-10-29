"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forever = require("forever");
var shelljs = require("shelljs");
var path = require("path");
exports.startPath = path.resolve(__dirname, "./verdaccio-cli.js");
function start() {
    forever.startDaemon(exports.startPath);
}
exports.start = start;
function stop() {
    forever.stop(exports.startPath);
}
exports.stop = stop;
function stopAll() {
    forever.stopAll();
}
exports.stopAll = stopAll;
function list() {
    var foreverBinPath = path.resolve(__dirname, "./node_modules/.bin/forever");
    shelljs.exec("\"" + foreverBinPath + "\" list");
}
exports.list = list;
function show() {
    var nodePath = process.argv0;
    shelljs.exec("\"" + nodePath + "\" \"" + exports.startPath + "\"");
}
exports.show = show;
exports.default = start;
//# sourceMappingURL=model.js.map