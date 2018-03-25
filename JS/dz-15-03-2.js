 //генерация случайного числа от min до max
 function rand(min, max) {
	var res = (min-1) + Math.random() * ((max+1) - (min-1));
	return parseInt(res);
}

// console.log(rand(-10, 10));

function arr_rand(a,b) {
	let min = 0;
	let max = 0;
	min = a < b ? a : b;
	max = a < b ? b : a;
	min = min === max ? -min : min;
	var len = 0;
	v = (a < 0) ? a * -1 : a * 1;
	z = (b < 0) ? b * -1 : b * 1;
	len = v + z;
	let arr = [];
	
	if (a === undefined && b === undefined) {
		console.log("оба не определены");
		min = -1000;
		max = 1000;
		len = rand(10,29)
	} else if (a === undefined) {
		console.log("a uderfined");
		if (b > 0) {
			min = -b;
			max = b;
		} else {
			min = b;
			max = -b;
		}
		len = z * 2;
	} else if (b === undefined) {
		console.log("b uderfined");
		if (a > 0) {
			min = -a;
			max = a;
		} else {
			min = a;
			max = -a;
		}
		len = v * 2;
	}
	console.log(min);
	console.log(max);
	for (let i = 0; i < len; i++) {
		arr[i] = rand(min,max);
	}
	return arr;
	
}
// console.log("###############################################");
// console.log(arr_rand(3,1));
// console.log("###############################################");
// console.log(arr_rand(1,3));
// console.log("###############################################");
// console.log(arr_rand(4,4));
// console.log("###############################################");
// console.log(arr_rand(3));
// console.log("###############################################");
// console.log(arr_rand(-3));
// console.log("###############################################");
// console.log(arr_rand(undefined,3));

ar = arr_rand(-10)
console.log(ar);
console.log("#########Задание2########");

// Задание 2
// Написать код который бы посчитал каких элементов больше: 
// 1) четных или не четных
//определяем нужные переменные
let chet = 0;
let nchet = 0;
//запускаем цикл проверки каждого элемента
for (let i = 0; i < ar.length; i++) {
	if (ar[i] % 2 == 0) {
		chet++ //если элемент четный то плюсуем +1 к четным
	} else {
		nchet++ //если элемент не четный то плюсуем +1 к не четным
	}
}
//выводим результат
console.log(chet > nchet ? 'больше четных' : 'больше не четных');

// 2) положительных или отрицательных
//определяем нужные переменные
let otr = 0;
let polozh = 0;
let nol = 0;
//запускаем цикл проверки каждого элемента
for (let i = 0; i < ar.length; i++) {
	if (ar[i] < 0) {
		otr++ //если элемент отрицательный увеличиваем количество отрицательных
	} else if (ar[i] == 0) {
		nol++ //если элемент 0 увеличиваем количество 0
	} else if (ar[i] > 0) {
		polozh++ //если элемент положительный увеличиваем количество положительный
	}
}
//выводим результат проверяя каких элементов больше
console.log(otr > polozh ? 'отрицательных больше' : 'положительных больше');

// 3) Что больше сумма всех положительных или отрицательных элементов (по модулю)
//определяем нужные переменные
let s_otr = 0;
let s_polozh = 0;
let s_nol = 0;
//запускаем цикл проверки каждого элемента
for (let i = 0; i < ar.length; i++) {
	if (ar[i] < 0) {
		s_otr += Math.abs(ar[i]) //если элемент отрицательный берем модуль числа и плюсуем к другим отрицательным
	} else if (ar[i] == 0) {
		s_nol++ //если элемент 0 увеличиваем количество 0
	} else if (ar[i] > 0) {
		s_polozh += ar[i] //если элемент положительный плюсуем его к другим положительным
	}
}
//выводим результат проверяя каких элементов больше
console.log(s_otr > s_polozh ? 'сумма отрицательных больше' : 'сумма положительных больше');

// 4) Инверитровать массив (1, 2, 3 -> 3, 2, 1)
console.log(ar);
ar.reverse(); //для инвертирования можно использовать метод массива .reverse
console.log(ar);
ar.reverse();
console.log(ar);
let arr = [] //определяем новый массив
ttt = ar.length
for (let i = 0; i < ttt; i++) {
	arr[i] = ar.pop() //извлекаем последний элемент старого массива и присваиваем i-тому элементу нового массива
}
console.log(arr);