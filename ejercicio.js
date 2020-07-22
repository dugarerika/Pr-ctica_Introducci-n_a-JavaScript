function arabicToRoman (num) {
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		clave = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
				"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
				"","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (clave[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}


// function arabicToRoman2(n){
//     var romanos = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
//     var roman = "";
//     var keys = Object.keys(romanos)
//     for(var key of keys){
// 		console.log(key)
//         var q = Math.floor(n / romanos[key]);
//         n -= q * romanos[key];
//         roman += key.repeat(q);
//     }
//     return roman
// }

function romanToArabic (str) {
	var	str = str.toUpperCase(),
		regex_validador = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		regex_base = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		clave = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && regex_validador.test(str)))
		return false;
		console.log(m)
	while (m = regex_base.exec(str))
		num += clave[m[0]];
	return num;
}

function verify(datos){
	var romanos = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    var keys = Object.keys(romanos)
	var num = String(datos).split(" ")
	var result = []
	var i = num.length
	var n = 0
	while(i--){
		var roman = ""
		if(+num[i]){
			n = num[i] 
			var romano = "";
			for(var key of keys){
				var q = Math.floor(n/ romanos[key]);
				n -= q * romanos[key];
				romano += key.repeat(q);
			}
			result.push(`${num[i]} es ${romano}\\\n`)
		}
		else
		result.push(`${num[i]} es ${romanToArabic(num[i])}\\\n`)
	}
return result
}

const fs = require('fs')
const data = fs.readFileSync('datos.md','utf8')
console.log(data)
console.log('Datos leidos')
fs.writeFileSync("resultado.md", verify(data)); 
console.log("File written successfully\n"); 

