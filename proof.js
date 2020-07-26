function numberGenerator (i) {
  var result = []
  while (i--) {
    result.push(i)
  }
  result.reverse()
  return result
}

const fs = require('fs')
fs.writeFileSync('datos.json', numberGenerator(4000))
console.log('File written successfully\n')
