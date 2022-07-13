exports.foo = 'abc'
console.log(module.exports); // { foo: 'abc' }

// exportsそのものを変えると、moduleに影響しない
exports = { hoge: 'xyz' }
console.log(module.exports); // { foo: 'abc' }
console.log(exports); // { hoge: 'xyz' }
