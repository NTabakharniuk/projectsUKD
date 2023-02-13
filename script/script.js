const fs = require('fs/promises'); 
const readFile = async() => {
    const text = await fs.readFile("./files/Hello/txt", "utf-8");
    console.log(text);
}
readFile()
const addText = async()=>{
    await fs.appendFile("./files/Hello.txt", "\n Hello world!");
}
addText();
