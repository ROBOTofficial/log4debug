# Log4Debug
TypeScript and JavaScript Logger Package

![image](https://github.com/ROBOTofficial/log4debug/assets/101011695/0bf9a0c7-f711-476d-a967-109b7730e869)
## install
```console
npm i log4debug
```
## Examples
This code is a program that clears the log after outputting This Package is JavaScript and TypeScript's Logger.
```js
import log4debug from "log4debug"

log4debug.set(log4debug.defaultTemplate)
log4debug.setClear(3000,"Clear Log",log4debug.defaultFrameTemplate)

console.log("This Package is JavaScript and TypeScript's Logger")
console.clear()

// outputs

// [2024-1-4:1711017584119][LOG]: This Package is JavaScript and TypeScript's Logger
// -------------
// | Clear Log |
// -------------

//   Clear after 3 seconds


```
By using log4debug, you can easily write such a program.

By using a plugin other than the default one, you can easily implement a variety of formats.
The following section describes how to create plugins.
## CreatePlugin
First, the argument and return value must be strings.


In the actual library, the type specification is as follows.
```ts
type options = (content:string) => string
```
A plugin following the above rules would look like the following.
```ts
import log4debug from "log4debug"

function testPlugin(content:string):string {
    return `[TEST]${content}`
}

log4debug.set(testPlugin,log4debug.defaultTemplate)

console.log("This Package is JavaScript and TypeScript's Logger")

// outputs
// [TEST][2024-1-4:1711018452696][LOG]: This Package is JavaScript and TypeScript's Logger
```
I think [TEST] was added when I ran it.

log4debug is executed in order, starting with the plug-ins on the right.

If you want to add frames, etc. to the log, put the plugins on the leftmost side.

## Tools
You can easily color the logs by using the standard functions in the library as follows.

![image](https://github.com/ROBOTofficial/log4debug/assets/101011695/718e3861-694d-4bb3-9c64-708172bcb1d7)

Let's run the following code!!
```js
import log4debug from "log4debug"

console.log(log4debug.colors.black("HelloWorld"))
console.log(log4debug.colors.blue("HelloWorld"))
console.log(log4debug.colors.cyan("HelloWorld"))
console.log(log4debug.colors.green("HelloWorld"))
console.log(log4debug.colors.magenta("HelloWorld"))
console.log(log4debug.colors.red("HelloWorld"))
console.log(log4debug.colors.white("HelloWorld"))
console.log(log4debug.colors.yellow("HelloWorld"))
```

It can be displayed in this colorful way.

![image](https://github.com/ROBOTofficial/log4debug/assets/101011695/ca72c7e7-f6a8-4f4f-8b2f-293f956de215)

Don't worry, the color will not change except for the area enclosed by the function.

![image](https://github.com/ROBOTofficial/log4debug/assets/101011695/936ef867-6256-42f8-b039-908dd8c47f2e)

### Attention
All written using [Deepl translation](https://www.deepl.com/ja/translator)
