declare type Handler = (...arg: any[]) => void;
export default class EventHub {
    static on: (type: string, handler: Handler) => void;
    static once: (type: string, handler: Handler) => void;
    static off: (type: string, handler?: Handler | undefined) => void;
    static emit: (type: string, ...arg: any[]) => void;
    static create(): EventHub;
    private id;
    private status;
    constructor();
    on(type: string, handler: Handler): EventHub;
    once(type: string, handler: Handler): EventHub;
    off(type: string, handler?: Handler): EventHub;
    emit(type: string, ...arg: any[]): EventHub;
    destroy(): void;
}
export {};
