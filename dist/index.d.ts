type options = (content: string) => string;
declare function set(...func: options[]): void;
declare function setClear(timeout: number | null, content: string | null, ...func: options[]): void;
declare function defaultTemplate(content: string): string;
declare function defaultFrameTemplate(content: string): string;
declare const _default: {
    set: typeof set;
    setClear: typeof setClear;
    defaultTemplate: typeof defaultTemplate;
    defaultFrameTemplate: typeof defaultFrameTemplate;
    colors: {
        black: (content: string) => string;
        red: (content: string) => string;
        green: (content: string) => string;
        yellow: (content: string) => string;
        blue: (content: string) => string;
        magenta: (content: string) => string;
        cyan: (content: string) => string;
        white: (content: string) => string;
    };
};
export default _default;
