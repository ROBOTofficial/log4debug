"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let NormalConsole = console.log;
function set(...func) {
    let newConsole = console.log;
    console.log = (...data) => {
        let content = data.join(" ");
        if (func.length !== 0)
            for (let i = func.length - 1; -1 < i; i--)
                content = func[i](content);
        newConsole(content);
    };
}
function setClear(timeout, content, ...func) {
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
function defaultTemplate(content) {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth() - 1;
    let day = date.getDay();
    let time = date.getTime();
    return `${magenta(`[${year}-${month}-${day}:${time}]`)}${green("[LOG]")}: ${content}`;
}
function defaultFrameTemplate(content) {
    let line = "";
    for (let i = 0; i < content.split("").length + 4; i++)
        line += "-";
    return `${line}\n| ${content} |\n${line}`;
}
const black = (content) => `\x1b[30m${content}\x1b[0m`;
const red = (content) => `\x1b[31m${content}\x1b[0m`;
const green = (content) => `\x1b[32m${content}\x1b[0m`;
const yellow = (content) => `\x1b[33m${content}\x1b[0m`;
const blue = (content) => `\x1b[34m${content}\x1b[0m`;
const magenta = (content) => `\x1b[35m${content}\x1b[0m`;
const cyan = (content) => `\x1b[36m${content}\x1b[0m`;
const white = (content) => `\x1b[37m${content}\x1b[0m`;
const colors = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white
};
exports.default = {
    set,
    setClear,
    defaultTemplate,
    defaultFrameTemplate,
    colors
};
