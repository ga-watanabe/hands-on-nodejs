class Foo {
  #privateFiled = 1;
  publicField = 2;

  static #staticPrivateField = 3;
  static staticPublicField = 4;

  constructor(param) {
    console.log("Foo Constructor");
    this.fieldInitializedInConstructor = param;
  }

  get computed() {
    return this.#computed;
  }

  set #computed(value) {
    this.#computed = value;
  }

  #privateMethod() {
    return this.#privateFiled;
  }

  publicMethod() {
    return this.#privateFiled;
  }

  static staticPublicMethod() {
    return this.#staticPrivateField;
  }
}

const foo = new Foo();

// console.log(Foo.staticPublicMethod())
// console.log(Foo.staticPublicField)

class Bar extends Foo {
  constructor(param) {
    super(param);
  }

  childPublicMethod() {
    // return this.#privateFiled // 親クラスのprivateフィールドにアクセスできない
    // return this.publicField // 親クラスのpublicフィールドにアクセスできる

    // return this.#privateMethod() // 親クラスのprivateメソッドにアクセスできる
    return this.publicMethod(); // 親クラスのpublicメソッドにアクセスできる
  }
}

const bar = new Bar();
console.log(bar.childPublicMethod());
