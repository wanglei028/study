/* 
在TypeScript中，类可以拥有静态成员和实例成员。静态类型指的是与类本身相关的属性或方法，
可以通过类名直接访问，不依赖于类的实例。实例类型则是每个类实例所拥有的属性和方法，需要通过创建类的实例来访问。

下面是一个示例TS文件，展示了如何定义类的静态类型和实例类型，并通过注释进行详细讲解：

这段代码首先定义了一个Animal2类，其中包含了实例属性（name）、
实例方法（sayName），以及静态属性（species）和静态方法（getSpecies）。
随后，通过创建类的实例并调用实例及静态成员，展示了它们的使用方式。
最后的注释部分对静态类型和实例类型进行了总结说明。
*/

// 定义一个动物类，演示静态类型和实例类型的使用
class Animal2 {
  // 实例类型属性：每个Animal2实例都会有自己的name属性
  name: string;

  // 构造函数，用于初始化实例属性
  constructor(name: string) {
      this.name = name;
  }

  // 实例方法：通过实例调用，显示动物的名字
  sayName() {
      console.log(`My name is ${this.name}`);
  }

  // 静态类型属性：属于Animal2类本身，所有实例共享
  static species = 'Mammal';

  // 静态方法：通过类名直接调用，不依赖于类的实例
  static getSpecies() {
      return Animal2.species; // 访问静态属性作为返回值
  }
}

// 使用示例
// 创建Animal2类的一个实例
const myAnimal2 = new Animal2('Buddy');

// 通过实例访问实例类型属性和方法
console.log(myAnimal2.name); // 输出实例的name属性
myAnimal2.sayName(); // 调用实例方法显示名字

// 通过类名访问静态类型属性和方法
console.log(Animal2.species); // 输出Animal2类的静态属性species
console.log(Animal2.getSpecies()); // 调用静态方法获取物种信息

/* 
总结：
- 实例类型成员（如name属性和sayName方法）是每个类实例独有的，必须通过类的实例来访问和操作。
- 静态类型成员（如species属性和getSpecies方法）属于类本身，不依赖于任何实例，可以通过类名直接访问。
这有助于组织代码，区分那些属于类级别共享的内容与每个实例特有的内容。
*/