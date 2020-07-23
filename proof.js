function number_generator(i){
    var result = []
    while(i--){
        result.push(i)
    }
    result.reverse()
    return result
}

const fs = require('fs')
// const data = fs.readFileSync('datos.md','utf8')
// console.log(data)
// console.log('Datos leidos')
fs.writeFileSync("datos.md", number_generator(4000)); 
console.log("File written successfully\n"); 
