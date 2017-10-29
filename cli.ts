import * as model from "./model";
import * as yargs from "yargs";
export default () => {
    const argv = yargs
        .command("start", "", a => a, a => {
            model.start();
        })
        .command("stop", "", a => a, a => {
            model.stop();
        })
        .command("stopall", "", a => a, a => {
            model.stopAll();
        })
        .command("list", "", a => a, a => {
            model.list();
        })
        .command("show", "", a => a, a => {
            model.show();
        })
        .argv;
    if (argv._.length < 1 && !argv.help && !argv.version) {
        model.start();
    }
};