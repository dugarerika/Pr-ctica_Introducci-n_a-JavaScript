'use strict';

function transformadora(datos){
	const romanos = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
	const arabigos = { CM: 900, M: 1000, CD: 400, D: 500, XC: 90, C: 100, XL: 40, L: 50, IX: 9, X: 10, IV: 4, V: 5, I: 1};
	const regexValidador = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/
	var num = String(datos).split(',')
	var i = num.length
	var result = []
	var number = 0
	var str = ''
	var key
	while(i--){
		if(+num[i]){
			var keysRomanos = Object.keys(romanos)
			var romano = '';
			number = num[i] 
			for(key of keysRomanos){
				var q = Math.floor(number/ romanos[key]);
				number -= q * romanos[key];
				romano += key.repeat(q);
			}
			result.push(`\n ${num[i]} es ${romano}`)
		}
		else{
			var keysArabigos = Object.keys(arabigos)
			str = num[i].toUpperCase()
			if (!(str && regexValidador.test(str)))
			result.push(`\n ${num[i]} : false`)
			else{
				var arabigo = 0
				var value = 0
				for(key of keysArabigos){
					value = str.indexOf(key)
					while(value != -1){
						arabigo += parseInt(arabigos[key])
						str = str.replace(key,'')
						value = str.indexOf(key)
					}
				}
				result.push(`\n ${num[i]} : ${arabigo}`)
			}
		}
	}
return result.reverse()
}


const fs = require('fs');
let data = fs.readFileSync('datos.json','utf8');
console.log(data);
console.log('Datos leidos');
fs.writeFileSync('resultado_sincrono.json', transformadora(data));
console.log('Archivo ese escribe exitosamente\n');