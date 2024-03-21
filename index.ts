type options = (content:string) => string
let NormalConsole = console.log
function set(...func:options[]) {
    let newConsole = console.log
    console.log = (...data: any[]) => {
        let content = data.join(" ")
        if (func.length !== 0) for (let i = func.length-1; -1 < i; i--) content = func[i](content)
        newConsole(content)
    }
}
function setClear(timeout:number|null,content:string|null,...func:options[]) {
    let newClear = console.clear
    console.clear = () => {
        if (content !== null) if (func.length !== 0) {
            for (let i = func.length-1; -1 < i; i--) content = func[i](content)
            NormalConsole(content)
        } else console.log(content)
        setTimeout(() => {
            newClear()
        }, timeout === null ? 0 : timeout);
    }
}
function defaultTemplate(content:string):string {
    let date = new Date
    let year = date.getFullYear()
    let month = date.getMonth()-1
    let day = date.getDay()
    let time = date.getTime()
    return `${magenta(`[${year}-${month}-${day}:${time}]`)}${green("[LOG]")}: ${content}`
}
function defaultFrameTemplate(content:string):string {
    let line = ""
    for (let i = 0; i < content.split("").length+4; i++) line += "-"
    return `${line}\n| ${content} |\n${line}`
}


const black = (content:string) => `\x1b[30m${content}\x1b[0m`
const red = (content:string) => `\x1b[31m${content}\x1b[0m`
const green = (content:string) => `\x1b[32m${content}\x1b[0m`
const yellow = (content:string) => `\x1b[33m${content}\x1b[0m`
const blue = (content:string) => `\x1b[34m${content}\x1b[0m`
const magenta = (content:string) => `\x1b[35m${content}\x1b[0m`
const cyan = (content:string) => `\x1b[36m${content}\x1b[0m`
const white = (content:string) => `\x1b[37m${content}\x1b[0m`
const colors = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white
}

export default {
    set,
    setClear,
    defaultTemplate,
    defaultFrameTemplate,

    colors
}