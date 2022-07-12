// 変数は巻き上げられない
// 以下はエラー

// console.log(a);
// let a = 1

// 関数宣言は巻き上げられる
console.log(func());

function func() {
  return 'aaa'
}

// 関数式は巻き上げられない(変数と同じ)
// 以下はエラー

// console.log(func2());
// func2 = () => {
//   return 'bbb'
// }
