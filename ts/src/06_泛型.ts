/* 
在TypeScript中，类也可以使用泛型（Generics）来增加其灵活性，
使得类定义可以在不特定于任何类型的情况下编写，而在实例化时指定具体类型。
泛型允许类、方法等在定义时接受一个或多个类型参数，这些类型参数在实际使用时会被具体的类型替换。
下面是一个使用泛型的类示例，包括详细的注释说明：

*/

// 定义一个泛型类 GenericList，它接受一个类型参数 T，表示这个列表将要存储的元素类型。
class GenericList<T> {
  // items 是一个数组，用于存储类型为 T 的元素。
  private items: T[] = [];

  // 添加一个元素到列表中。add 方法接受一个类型为 T 的参数 item。
  addItem(item: T): void {
      this.items.push(item);
  }

  // 从列表中获取一个元素。getItem 方法返回类型为 T 的值。
  // 使用了可选参数 index，默认为 0，以便在不提供索引时返回第一个元素。
  getItem(index: number = 0): T | undefined {
      // 注意：这里使用了可选链操作符（?.）和非空断言操作符（!）来安全地访问数组元素，
      // 实际上在这个场景下，我们应确保索引合法，这里简化处理仅做示例。
      return this.items[index];
  }

  // 返回列表中所有元素的数量。
  getCount(): number {
      return this.items.length;
  }
}

// 使用示例：
// 创建一个存储字符串的 GenericList 实例
const stringList = new GenericList<string>();
stringList.addItem("Hello");
stringList.addItem("World");
console.log(stringList.getItem()); // 输出 "Hello"
console.log(stringList.getCount()); // 输出 2

// 创建一个存储数字的 GenericList 实例
const numberList = new GenericList<number>();
numberList.addItem(1);
numberList.addItem(2);
console.log(numberList.getItem(1)); // 输出 2
console.log(numberList.getCount()); // 输出 2

/* 
这段代码定义了一个GenericList类，它是一个泛型类，可以用来创建能够存储任意类型的列表。
通过在类名后添加尖括号<T>来声明类型参数T，并在类内部的方法参数和成员变量中使用这个类型参数。

, 这样，当实例化GenericList时，我们可以指定具体存储的元素类型，如字符串或数字，从而实现类型的灵活和安全的管理。
*/