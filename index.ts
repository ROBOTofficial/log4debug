type options = (content:string) => string
let NormalConsole = console.log
class color {
    static black(content: string): string {
        return `\x1b[30m${content}\x1b[0m`
    }
    static red(content: string): string {
        return `\x1b[31m${content}\x1b[0m`
    }
    static green(content: string): string {
        return `\x1b[32m${content}\x1b[0m`
    }
    static yellow(content: string): string {
        return `\x1b[33m${content}\x1b[0m`
    }
    static blue(content: string): string {
        return `\x1b[34m${content}\x1b[0m`
    }
    static magenta(content: string): string {
        return `\x1b[35m${content}\x1b[0m`
    }
    static cyan(content: string): string {
        return `\x1b[36m${content}\x1b[0m`
    }
    static white(content: string): string {
        return `\x1b[37m${content}\x1b[0m`
    }
}
export default class log4debug {
    static set(...func:options[]) {
        let newConsole = console.log
        console.log = (...data: any[]) => {
            let content = data.join(" ")
            if (func.length !== 0) for (let i = func.length-1; -1 < i; i--) if (typeof func[i] === "function") content = func[i](content)
            newConsole(content)
        }
    }
    static setClear(timeout:number|null,content:string|null,...func:options[]) {
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
    static defaultTemplate(content:string):string {
        let date = new Date
        let year = date.getFullYear()
        let month = date.getMonth()-1
        let day = date.getDay()
        let time = date.getTime()
        return `${color.magenta(`[${year}-${month}-${day}:${time}]`)}${color.green("[LOG]")}: ${content}`
    }
    static defaultFrameTemplate(content:string):string {
        let line = ""
        for (let i = 0; i < content.split("").length+4; i++) line += "-"
        return `${line}\n| ${content} |\n${line}`
    }
    static color = color
}