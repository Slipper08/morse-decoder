const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'     ': ' ',
};

function decode(expr) {
	// write your solution here
	let sumResult = "";
	const length = 10;
	const pattern = new RegExp(".{1," + length + "}", "ig");
	let res = expr.match(pattern);
	//теперь у меня есть массив данных, которые можно уже декодировать, опираясь на то, что 10 - это точка, а 11 - тире. 
	res.forEach((item) => {
		const length2 = 2;
		const pattern = new RegExp(".{1," + length2 + "}", "ig");
		let res2 = item.match(pattern);
		let res3 = res2.map(function (item) {
			if (item == 10) {
				return item = ".";
			} else if (item == 11) {
				return item = "-";
			} else if (item == "**") {
				return item = " ";
			} else if (item == "00") {
				return item = "";
			}
		});
		let string1 = res3.join('');
		sumResult += string1.replace(string1, MORSE_TABLE[string1])
	});
	return sumResult;
}

module.exports = {
	decode
}