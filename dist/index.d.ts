type options = (content: string) => string;
declare class color {
    static black(content: string): string;
    static red(content: string): string;
    static green(content: string): string;
    static yellow(content: string): string;
    static blue(content: string): string;
    static magenta(content: string): string;
    static cyan(content: string): string;
    static white(content: string): string;
}
export default class log4debug {
    static set(...func: options[]): void;
    static setClear(timeout: number | null, content: string | null, ...func: options[]): void;
    static defaultTemplate(content: string): string;
    static defaultFrameTemplate(content: string): string;
    static color: typeof color;
}
export {};
