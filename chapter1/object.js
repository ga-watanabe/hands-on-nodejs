obj1 = {
  a: 1,
  b: 2,
};

// スプレッド構文
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

const d = 4;
const obj3 = { ...obj2, d };
console.log(obj3);

// レスト構文
const { a, b, ...obj4 } = obj3;
console.log(obj4);
