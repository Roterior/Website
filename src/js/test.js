//triangle();
//fizzBuzz();
//chessField();
//console.log(min(-60,-59));
//console.log(isEven(-2));
//console.log(countBs("sanyaa", 'a'));
// console.log(range(2, 2));
// console.log(sum(range(2, 2)));

function triangle() {
	for (var i = 0, str = ""; i < 7; i++)
		console.log(str += "#");
}
function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
		else if (i % 3 == 0) console.log("Fizz");
		else if (i % 5 == 0) console.log("Buzz");
		else console.log(i);
	}
}
function chessField() {
	for (var i = 1; i <= 8; i++) {
		var str = '';
		for (var j = 1; j <= 8; j++) {
			if (i % 2 == 0 && j == 1) str += ' ';
			else if (i % 2 == 0 && j == 8) continue;
			if (j % 2 == 0) str += ' ';
			else str += '#';
		}
		console.log(str);
	}
}
function min(val1, val2) {
	return val1 < val2 ? val1 : val2;
}
function isEven(value) {
	return value == 0 ? true : value == 1 ? false : isEven(Math.abs(value - 2));
}
function countBs(str, char) {
	var counter = 0;
	for (var i = 0; i < str.length; i++)
		if (str.charAt(i) == char) counter++;
	return counter;
}
function range(a, b, c) {
	var arr = [];
	if (c != undefined) var step = c;
	else step = 1;
	if (a > b) {
		if (step == 0) console.log("Error");
		else if (step > 0)
			for (var i = a; i >= b; i -= step)
				arr.push(i);
		else
			for (var i = a; i >= b; i += step)
				arr.push(i);
	}
	else if (a < b) {
		if (step == 0) console.log("Error");
		else if (step > 0)
			for (var i = a; i <= b; i += step)
				arr.push(i);
		else
			for (var i = a; i <= b; i -= step)
				arr.push(i);
	}
	else arr.push(a);
	return arr;
}
function sum(arr) {
	for (var i = 0, sum = 0; i < arr.length; i++)
		sum += arr[i];
	return sum;
}
