/* 
下面是一个简单的TypeScript类（Class）学习教程示例，
通过一个“Person”类来演示类的定义、属性（Fields）、方法（Methods）、
构造函数（Constructors）、访问修饰符（Access Modifiers）
以及继承（Inheritance）等概念，并在代码中加入详细注释进行讲解。
*/
// 定义一个基础的Person类
class Person {
  // 属性（Fields）
  // 使用public修饰符，使得属性可以在类的外部被访问
  public name: string;
  private age: number; // 使用private修饰符，这个属性只能在类的内部访问
  protected gender: string; // 使用protected修饰符，这个属性可以在类及其子类中访问

  // 构造函数（Constructor）
  // 构造函数用于初始化新创建的对象，可以有参数
  constructor(name: string, age: number, gender: string) {
      this.name = name; // 使用this关键字引用当前对象的属性
      this.age = age;
      this.gender = gender;
  }

  // 方法（Methods）
  // 实现一个方法来获取个人信息
  public getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }

  // 私有方法（Private Method）
  // 只能在类的内部访问
  private calculateAgeInYears(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.age;
  }
}

// 继承（Inheritance）
// 创建一个Student类，继承自Person类
class Student extends Person {
  // 新增属性
  course: string;

  // 构造函数，需要调用super()来初始化父类的属性
  constructor(name: string, age: number, gender: string, course: string) {
      super(name, age, gender); // 调用父类构造函数
      this.course = course;
  }

  // 覆盖或扩展父类的方法
  public getDetails(): string {
      return `${super.getDetails()}, Course: ${this.course}`;
  }
}

// 使用Person类
let person = new Person("Alice", 1990, "Female");
console.log(person.getDetails()); // 注意：无法直接访问private和protected属性

// 使用Student类
let student = new Student("Bob", 2000, "Male", "Computer Science");
console.log(student.getDetails()); // 能看到额外的Course信息