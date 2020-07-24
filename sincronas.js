function transformadora(datos){
	var romanos = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
	var arabigos = { CM: 900, M: 1000, CD: 400, D: 500, XC: 90, C: 100, XL: 40, L: 50, IX: 9, X: 10, IV: 4, V: 5, I: 1};
	var regex_validador = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/
	var num = String(datos).split(",")
	var i = num.length
	var result = []
	var number = 0
	var str = ""
	var key
	while(i--){
		if(+num[i]){
			var keys_romanos = Object.keys(romanos)
			var romano = "";
			number = num[i] 
			for(key of keys_romanos){
				var q = Math.floor(number/ romanos[key]);
				number -= q * romanos[key];
				romano += key.repeat(q);
			}
			result.push(`${num[i]} es ${romano}\\\n`)
		}
		else{
			var keys_arabigos = Object.keys(arabigos)
			str = num[i].toUpperCase()
			if (!(str && regex_validador.test(str)))
				result.push(`${num[i]} es false\\\n`)
			else{
				var arabigo = 0
				var value = 0
				for(key of keys_arabigos){
					// console.log("_______")
					// console.log(str)
					// console.log(key)
					value = str.indexOf(key)
					// console.log(value)
					// console.log("*********")
					while(value != -1){
						arabigo += parseInt(arabigos[key])
						str = str.replace(key,"")
						value = str.indexOf(key)
					}
				}
				result.push(`${num[i]} es ${arabigo}\\\n`)
			}
		}
	}
return result.reverse()
}

const fs = require('fs')
const data = fs.readFileSync('datos2.md','utf8')
console.log('Datos leidos')
fs.writeFileSync("resultado.md", transformadora(data)); 
console.log("File written successfully\n");
