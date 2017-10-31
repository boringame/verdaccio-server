"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forever = require("forever");
var shelljs = require("shelljs");
var startPath = require.resolve("./verdaccio-cli.js");
var nodePath = process.argv0;
var foreverBinPath = require.resolve("forever/bin/forever");
function start() {
    forever.startDaemon(startPath);
}
exports.start = start;
function stop() {
    forever.stop(startPath);
}
exports.stop = stop;
function stopAll() {
    forever.stopAll();
}
exports.stopAll = stopAll;
function list() {
    shelljs.exec("\"" + nodePath + "\" \"" + foreverBinPath + "\" list");
}
exports.list = list;
function show() {
    shelljs.exec("\"" + nodePath + "\" \"" + startPath + "\"");
}
exports.show = show;
var runasPath = require.resolve("./winsw/runas.vbs");
var winswPath = require.resolve("./winsw/winsw.exe");
function serviceInstall() {
    shelljs.exec("\"" + runasPath + "\" \"" + winswPath + "\" install");
}
exports.serviceInstall = serviceInstall;
function serviceUninstall() {
    shelljs.exec("\"" + runasPath + "\" \"" + winswPath + "\" uninstall");
}
exports.serviceUninstall = serviceUninstall;
function serviceStart() {
    shelljs.exec("\"" + runasPath + "\" \"" + winswPath + "\" start");
}
exports.serviceStart = serviceStart;
function serviceStop() {
    shelljs.exec("\"" + runasPath + "\" \"" + winswPath + "\" stop");
}
exports.serviceStop = serviceStop;
function serviceRestart() {
    shelljs.exec("\"" + runasPath + "\" \"" + winswPath + "\" restart");
}
exports.serviceRestart = serviceRestart;
function serviceStatus() {
    shelljs.exec("\"" + runasPath + "\" \"" + winswPath + "\" status");
}
exports.serviceStatus = serviceStatus;
var yargs = require("yargs");
function cli() {
    var argv = yargs
        .command("start", "", function (a) { return a; }, function (a) {
        start();
    })
        .command("stop", "", function (a) { return a; }, function (a) {
        stop();
    })
        .command("stop-all", "", function (a) { return a; }, function (a) {
        stopAll();
    })
        .command("list", "", function (a) { return a; }, function (a) {
        list();
    })
        .command("show", "", function (a) { return a; }, function (a) {
        show();
    })
        .command("service-install", "", function (a) { return a; }, function (a) {
        serviceInstall();
    })
        .command("service-uninstall", "", function (a) { return a; }, function (a) {
        serviceUninstall();
    })
        .command("service-start", "", function (a) { return a; }, function (a) {
        serviceStart();
    })
        .command("service-stop", "", function (a) { return a; }, function (a) {
        serviceStop();
    })
        .command("service-restart", "", function (a) { return a; }, function (a) {
        serviceRestart();
    })
        .command("service-status", "", function (a) { return a; }, function (a) {
        serviceStatus();
    })
        .argv;
    if (argv._.length < 1 && !argv.help && !argv.version) {
        start();
    }
}
exports.cli = cli;
;
//# sourceMappingURL=index.js.map