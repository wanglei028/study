/* 
在TypeScript中，面向对象编程的三大特性——封装、继承和多态，是构建复杂软件系统的基础。
下面我将通过一个具体的示例来讲解这些概念，并在代码中加入详细的注释说明。

封装（Encapsulation）
封装是将数据（属性）和操作这些数据的方法（函数）捆绑在一起的过程，隐藏内部实现细节，
只暴露必要的接口给外部使用。这通过访问修饰符（如public, private, protected）来实现。

继承（Inheritance）
继承允许一个类（子类）继承另一个类（父类）的属性和方法，从而实现代码复用和扩展。
子类可以覆盖或扩展父类的方法，增加新的功能。

多态（Polymorphism）
多态意味着一个接口可以有多种不同的实现方式，即子类可以根据需要覆盖或实现父类的方法，
使得不同对象对同一消息作出响应时可产生不同的行为。


这段代码演示了：
封装：Animal类通过私有字段_name和公共方法getName()来封装内部数据。
继承：Dog和Cat类继承自Animal类，复用了getName()方法并实现了各自的makeSound()方法。
多态：playWithAnimal函数接受一个Animal类型的参数，无论是Dog还是Cat对象，
      都能正确地调用它们各自实现的makeSound()方法，展示了多态性。
*/

// 父类（基类）：Animal
abstract class Animal {
  // 封装：使用private保护内部状态
  private _name: string;

  // 构造函数
  constructor(name: string) {
      this._name = name;
  }

  // 公共方法，提供外部访问内部状态的接口
  public getName(): string {
      return this._name;
  }

  // 抽象方法，定义行为接口，子类必须实现
  public abstract makeSound(): void; // 使用abstract定义抽象方法

  /* 
  抽象方法只能出现在抽象类中。
  报错原因：该错误表明在TypeScript中，一个非抽象类包含了一个抽象方法。
  根据TypeScript的规范，抽象方法必须定义在一个抽象类中。

修复建议：为了修复这个错误，我们需要将包含抽象方法的类声明为抽象类。我们可以通过在类前添加abstract关键字来实现这一点。
abstract class Animal {
  public abstract makeSound(): void;
}
通过将类Animal声明为抽象类，我们满足了TypeScript的要求，即抽象方法必须定义在一个抽象类中。
这样，编译器就不会再报错“抽象方法只能出现在抽象类中”了。
  
  */
}

// 子类：Dog 继承 Animal
class Dog extends Animal {
  // 实现父类的抽象方法
  makeSound(): void {
      console.log("Woof!");
  }
}

// 子类：Cat 继承 Animal
class Cat extends Animal {
  // 实现父类的抽象方法
  makeSound(): void {
      console.log("Meow!");
  }
}

// 多态的应用：通过父类引用调用子类的实现
function playWithAnimal(animal: Animal): void {
  console.log(`Playing with ${animal.getName()}`);
  animal.makeSound(); // 调用的是子类的具体实现
}

// 主程序
let myDog = new Dog("Buddy");
let myCat = new Cat("Whiskers");

playWithAnimal(myDog); // 输出：Playing with Buddy, Woof!
playWithAnimal(myCat); // 输出：Playing with Whiskers, Meow!