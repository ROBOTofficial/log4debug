"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let NormalConsole = console.log;
class color {
    static black(content) {
        return `\x1b[30m${content}\x1b[0m`;
    }
    static red(content) {
        return `\x1b[31m${content}\x1b[0m`;
    }
    static green(content) {
        return `\x1b[32m${content}\x1b[0m`;
    }
    static yellow(content) {
        return `\x1b[33m${content}\x1b[0m`;
    }
    static blue(content) {
        return `\x1b[34m${content}\x1b[0m`;
    }
    static magenta(content) {
        return `\x1b[35m${content}\x1b[0m`;
    }
    static cyan(content) {
        return `\x1b[36m${content}\x1b[0m`;
    }
    static white(content) {
        return `\x1b[37m${content}\x1b[0m`;
    }
}
class log4debug {
    static set(...func) {
        let newConsole = console.log;
        console.log = (...data) => {
            let content = data.join(" ");
            if (func.length !== 0)
                for (let i = func.length - 1; -1 < i; i--)
                    if (typeof func[i] === "function")
                        content = func[i](content);
            newConsole(content);
        };
    }
    static setClear(timeout, content, ...func) {
        let newClear = console.clear;
        console.clear = () => {
            if (content !== null)
                if (func.length !== 0) {
                    for (let i = func.length - 1; -1 < i; i--)
                        content = func[i](content);
                    NormalConsole(content);
                }
                else
                    console.log(content);
            setTimeout(() => {
                newClear();
            }, timeout === null ? 0 : timeout);
        };
    }
    static defaultTemplate(content) {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth() - 1;
        let day = date.getDay();
        let time = date.getTime();
        return `${color.magenta(`[${year}-${month}-${day}:${time}]`)}${color.green("[LOG]")}: ${content}`;
    }
    static defaultFrameTemplate(content) {
        let line = "";
        for (let i = 0; i < content.split("").length + 4; i++)
            line += "-";
        return `${line}\n| ${content} |\n${line}`;
    }
}
log4debug.color = color;
module.exports = log4debug;
