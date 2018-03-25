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
console.log("###############################################");
// console.log(arr_rand(3,1));
console.log("###############################################");
// console.log(arr_rand(1,3));
console.log("###############################################");
// console.log(arr_rand(4,4));
console.log("###############################################");
// console.log(arr_rand(3));
console.log("###############################################");
// console.log(arr_rand(-3));
console.log("###############################################");
// console.log(arr_rand(undefined,3));
