import * as forever from "forever";
import * as shelljs from "shelljs";
import * as path from "path";

export const startPath = path.resolve(__dirname, "./verdaccio-cli.js");

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
    const foreverBinPath = path.resolve(__dirname, "./node_modules/.bin/forever");
    shelljs.exec(`"${foreverBinPath}" list`);
}

export function show(): void {
    const nodePath = process.argv0;
    shelljs.exec(`"${nodePath}" "${startPath}"`);
}

export default start;