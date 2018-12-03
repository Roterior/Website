// var utils = require('./utils.js');
// console.log(utils.sum(2, 2));

// require("console-log-hello-world");

// triangle(); // 1. Triangle.
// fizzBuzz(); // 2. FizzBuzz.
// chessField(); // 3. ChessBoard.
// console.log(min(0,10)); // 4. Minimum.
// console.log(isEven(-2)); // 5. Recursion.
// console.log(countChar("sanyaa", 'a')); // 6. Char counter.
// console.log(range(2, 2)); // 7. Range.
// console.log(sum(range(2, 2))); // 7. Range.
// console.log(reverseArray([1,2,4,6,8,10])); // 8. Reverse Array.
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // 8. Reverse Array.
// console.log(arrayToList([10,20])); // 9. List.
// console.log(listToArray({value:10,rest:{value:20,rest:{}}})); // 9. List.
// console.log(prepend(69,{value:10,rest:{value:20,rest:{}}})); // 9. List.
// console.log(nth({value:10,rest:{value:20,rest:{}}},3)); // 9. List.
// var obj = {here: {is: "an"}, object: 2}; // 10. Deep Equal.
// console.log(deepEqual(obj, obj)); // 10. Deep Equal.
// console.log(deepEqual(obj, {here: 1, object: 2})); // 10. Deep Equal.
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // 10. Deep Equal.
// var arrays = [[1, 2, 4], [6, 7], [7]]; // 11. Two-Dim Arr To Arr.
// console.log(arrays.reduce(function(arr,current){return arr.concat(current);})); // 11. Two-Dim Arr To Arr.
// console.log(average(motherAgeAtBirth)); // 12. Mother Child Age Difference.
// for (var century in centuryAge) console.log(average(centuryAge[century])); // 13. Historical Life Expectancy.
// console.log(every([NaN, NaN, NaN], isNaN)); // 14. Every And Some.
// console.log(every([NaN, NaN, 4], isNaN)); // 14. Every And Some.
// console.log(some([NaN, 3, 4], isNaN)); // 14. Every And Some.
// console.log(some([2, 3, 4], isNaN)); // 14. Every And Some.

// 1. Triangle.
function triangle() {
	for (var i = 0, str = ""; i < 7; i++)
		console.log(str += "#");
}

// 2. FizzBuzz.
function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
		else if (i % 3 == 0) console.log("Fizz");
		else if (i % 5 == 0) console.log("Buzz");
		else console.log(i);
	}
}

// 3. ChessBoard.
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

// 4. Minimum.
function min(val1, val2) {
	return val1 < val2 ? val1 : val2;
}

// 5. Recursion.
function isEven(value) {
	return value == 0 ? true : value == 1 ? false : isEven(Math.abs(value - 2));
}

// 6. Char counter.
function countChar(str, char) {
	var counter = 0;
	for (var i = 0; i < str.length; i++)
		if (str.charAt(i) == char) counter++;
	return counter;
}

// 7. Range.
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

// 8. Reverse Array.
function reverseArray(arr) {
	var j = arr.length - 1;
	var arr2 = [];
	for (var i = 0; i < arr.length; i++)
		arr2[j--] = arr[i];
	return arr2;
}
function reverseArrayInPlace(arr) {
	var j = Math.floor(arr.length / 2);
	for (var i = 0; i < j; ++i) {
		var tmp = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = arr[i];
		arr[i] = tmp;
	}
	return arr;
}

// 9. List.
function arrayToList(arr) {
	var list = {};
	for (var i = arr.length - 1; i >= 0; i--) {
		list = {
			value: arr[i],
			rest: list
		};
	}
	return list;
}
function listToArray(list) {
	var arr = [];
	for (var node = list; node; node = node.rest)
		if (node.value !== undefined)
			arr.push(node.value);
	return arr;
}
function prepend(element, list) {
	return {value: element, rest: list};
}
function nth(list, number) {
	var arr = listToArray(list);
	if (number === 0)
		return arr[number];
	if (arr[number] === undefined)
		return nth(list, number - 1);
	else
		return arr[number];
}

// 10. Deep Equal.
function deepEqual(a, b) {
	if ((typeof a == "object" && typeof b == "object") && (a != null || b != null)) {
		for (var i = 0, j = 0; i < Object.keys(a).length, j < Object.keys(b).length; ++i, ++j) {
			var result = deepEqual(a[Object.keys(a)[i]], b[Object.keys(b)[j]]);
			if (result == false) break;
		}
		return result;
	} else return a === b;
}

// 11. Two-Dim Arr To Arr.
var arrays = [[1, 2, 4], [6, 7], [7]];
// console.log(arrays.reduce(function(arr,current){return arr.concat(current);}));

// 12. Mother Child Age Difference.
var ANCESTRY_FILE = "[\n  " + [
	'{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
	'{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
	'{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
	'{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
	'{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
	'{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
	'{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
	'{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
	'{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
	'{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
	'{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
	'{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
	'{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
	'{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
	'{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
	'{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
	'{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
	'{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
	'{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
	'{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
	'{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
	'{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
	'{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
	'{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
	'{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
	'{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
	'{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
	'{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
	'{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
	'{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
	'{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
	'{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
	'{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
	'{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
	'{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
	'{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
	'{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
	'{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
	'{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";
var ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}
var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});
var motherAgeAtBirth = [];
for (var i = 0; i < ancestry.length; ++i) {
	var mother = byName[ancestry[i].mother];
	if (mother != null) {
		var age = ancestry[i].born - mother.born;
		motherAgeAtBirth.push(age);
	}
}

// 13. Historical Life Expectancy.
function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}
var centuryAge = {};
ancestry.forEach(function (person) {
	if (Math.ceil(person.died / 100) in centuryAge) {
		centuryAge[Math.ceil(person.died / 100)].push(person.died - person.born);
	} else {
		centuryAge[Math.ceil(person.died / 100)] = [];
		centuryAge[Math.ceil(person.died / 100)].push(person.died - person.born);
	}
});

// 14. Every And Some.
function every(arr, func) {
	for (var i = 0; i < arr.length; ++i)
		if (!func(arr[i])) return false;
	return true;
}
function some(arr, func) {
	for (var i = 0; i < arr.length; ++i)
		if (func(arr[i])) return true;
	return false;
}
