/* 
在TypeScript中，interface用于定义类型结构，它描述了一组属性或方法的契约，而不需要实现具体功能。
这使得接口非常适合于定义类的形状（shape），以及确保类遵循特定的结构。
implements关键字则用于强制一个类遵循某个接口所定义的结构，确保类至少实现了接口中规定的所有成员。

下面是一个示例TS文件，展示了如何使用interface和implements：
*/

// 定义一个接口 AnimalBehavior，描述了动物可能有的行为
interface AnimalBehavior {
  eat(food: string): void; // 定义了一个eat方法，接受一个字符串参数food
  sleep(hours: number): void; // 定义了一个sleep方法，接受一个数字参数hours
}

// 实现AnimalBehavior接口的Dog类
class DogImplementation implements AnimalBehavior {
  name: string; // Dog类有一个name属性

  constructor(name: string) {
    this.name = name; // 构造函数初始化name属性
  }

  // 实现AnimalBehavior接口中的eat方法
  eat(food: string): void {
    console.log(`${this.name} is eating ${food}.`);
  }

  // 实现AnimalBehavior接口中的sleep方法
  sleep(hours: number): void {
    console.log(`${this.name} is sleeping for ${hours} hours.`);
  }

  // Dog类还可以有自己额外的方法
  bark(): void {
    console.log(`${this.name} says Woof!`);
  }
}

// 创建Dog实例并演示其行为
const myDogNew = new DogImplementation('Buddy');
myDogNew.eat('bones'); // 输出: Buddy is eating bones.
myDogNew.sleep(8);     // 输出: Buddy is sleeping for 8 hours.
myDogNew.bark();       // 输出: Buddy says Woof!