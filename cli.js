"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model = require("./model");
var yargs = require("yargs");
exports.default = function () {
    var argv = yargs
        .command("start", "", function (a) { return a; }, function (a) {
        model.start();
    })
        .command("stop", "", function (a) { return a; }, function (a) {
        model.stop();
    })
        .command("stopall", "", function (a) { return a; }, function (a) {
        model.stopAll();
    })
        .command("list", "", function (a) { return a; }, function (a) {
        model.list();
    })
        .command("show", "", function (a) { return a; }, function (a) {
        model.show();
    })
        .argv;
    if (argv._.length < 1 && !argv.help && !argv.version) {
        model.start();
    }
};
//# sourceMappingURL=cli.js.map