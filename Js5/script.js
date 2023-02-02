let arr = [];
let operations = 0
for (let i = 0; i <= 100; i++) {
	arr.push(i);
}

async function addNumbers(arr) {
	let sum = 0;
	for (let i = 0; i <= 99; i++) {
        operations++
		sum = await asyncAdd(sum, arr[i + 1]);
        console.log("Operation " + operations +": "+sum)
	}
	return sum;
}

const asyncAdd = async (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return Promise.reject('Argumenty muszą mieć typ number!');
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(a + b);
		}, 1);
	});
};

const start = performance.now();
addNumbers(arr).then(result => {
  const end = performance.now();
  console.log(operations)
  console.log(`Time taken: ${end - start} milliseconds`);
});