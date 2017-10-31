import * as forever from "forever";
import * as shelljs from "shelljs";

const startPath = require.resolve("./verdaccio-cli.js");
const nodePath = process.argv0;
const foreverBinPath = require.resolve("forever/bin/forever");

export function start(): void {
    forever.startDaemon(startPath);
}

export function stop(): void {
    forever.stop(startPath);
}

export function stopAll(): void {
    forever.stopAll();
}

export function list(): void {
    shelljs.exec(`"${nodePath}" "${foreverBinPath}" list`);
}

export function show(): void {
    shelljs.exec(`"${nodePath}" "${startPath}"`);
}

const runasPath = require.resolve("./winsw/runas.vbs");
const winswPath = require.resolve("./winsw/winsw.exe");

export function serviceInstall(): void {
    shelljs.exec(`"${runasPath}" "${winswPath}" install`);
}

export function serviceUninstall(): void {
    shelljs.exec(`"${runasPath}" "${winswPath}" uninstall`);
}

export function serviceStart(): void {
    shelljs.exec(`"${runasPath}" "${winswPath}" start`);
}

export function serviceStop(): void {
    shelljs.exec(`"${runasPath}" "${winswPath}" stop`);
}

export function serviceRestart(): void {
    shelljs.exec(`"${runasPath}" "${winswPath}" restart`);
}

export function serviceStatus(): void {
    shelljs.exec(`"${runasPath}" "${winswPath}" status`);
}

import * as yargs from "yargs";

export function cli(): void {
    const argv = yargs
        .command("start", "", a => a, a => {
            start();
        })
        .command("stop", "", a => a, a => {
            stop();
        })
        .command("stop-all", "", a => a, a => {
            stopAll();
        })
        .command("list", "", a => a, a => {
            list();
        })
        .command("show", "", a => a, a => {
            show();
        })
        .command("service-install", "", a => a, a => {
            serviceInstall();
        })
        .command("service-uninstall", "", a => a, a => {
            serviceUninstall();
        })
        .command("service-start", "", a => a, a => {
            serviceStart();
        })
        .command("service-stop", "", a => a, a => {
            serviceStop();
        })
        .command("service-restart", "", a => a, a => {
            serviceRestart();
        })
        .command("service-status", "", a => a, a => {
            serviceStatus();
        })
        .argv;
    if (argv._.length < 1 && !argv.help && !argv.version) {
        start();
    }
};