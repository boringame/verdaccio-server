declare module "winsw" {
    interface IWinswConfig {
        id: string;
        name: string;
        description: string;
        executable: string;
        arguments: string;
        logmode: string;
    }

    type WinswExecCallback = (error, stdout) => void;
    type WinswExec = (...args: (string | WinswExecCallback)[]) => void;

    class Winsw {
        createWrapper();
        removeWrapper();
        install: WinswExec;
        uninstall: WinswExec;
        start: WinswExec;
        stop: WinswExec;
        restart: WinswExec;
        status: WinswExec;
    }
    const use: (config: IWinswConfig) => Winsw;
    export = use;
}
