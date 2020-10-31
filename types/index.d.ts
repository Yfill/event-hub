declare type Handler = (...arg: any[]) => void;
export default class EventHub {
    static on: Function;
    static off: Function;
    static emit: Function;
    static create(): EventHub;
    private id;
    private status;
    constructor();
    on(type: string, handler: Handler): EventHub;
    off(type: string, handler?: Handler): EventHub;
    emit(type: string, ...arg: any[]): EventHub;
    destroy(): void;
}
export {};
