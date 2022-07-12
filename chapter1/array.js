// sortはミュータブル
const arr = [2,3,1]

arr.sort()

console.log(arr);

// console.logの引数は省略可
let ret = arr.forEach(console.log)

// forEachの戻り値はundefined
console.log(ret);
