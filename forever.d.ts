declare module "forever" {
    export function startDaemon(id: string, options?: object);
    export function stop(id: string, options?: object);
    export function stopAll();
    export function list();
    export function start(id: string, options?: object);
}