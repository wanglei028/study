// 基本类型声明
// TypeScript支持JavaScript中的所有原始类型，包括number、string、boolean等。
let age: number = 25; // 声明一个数字类型的变量age
let nameStr: string = "Alice"; // 声明一个字符串类型的变量name
let isStudent: boolean = true; // 声明一个布尔类型的变量isStudent

// 数组类型声明
// 可以明确指定数组中元素的类型。
let numbers: number[] = [1, 2, 3]; // 声明一个只包含数字的数组
let strings: string[] = ["apple", "banana", "cherry"]; // 声明一个只包含字符串的数组

// 元组类型（Tuple）
// 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let studentInfo: [string, number] = ["Bob", 20]; // 第一个元素是字符串，第二个元素是数字

// 枚举类型（Enum）
// 用于定义一组命名的常量。
enum Color {Red, Green, Blue} // 默认从0开始计数
let favoriteColor: Color = Color.Green; // 声明一个枚举类型的变量

// any类型
// 当我们不确定一个变量应该具体是什么类型时，可以使用any类型，但这样会失去类型检查的好处。
let unknownValue: any = "hello"; // 可以是任何类型，此处初始化为字符串
unknownValue = 42; // 后续可以赋值为数字，不会引发编译错误

// 函数类型声明
// TypeScript还允许明确指定函数的参数类型和返回类型。
function add(a: number, b: number): number {
    return a + b;
}

// 类型断言
// 在确定一个值的类型不是其表面类型时，可以使用类型断言强制指定类型。
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length; // 断言someValue为string类型后访问length属性

console.log(`Age: ${age}, Name: ${name}, Is Student: ${isStudent}`);
console.log(`Numbers: ${numbers}, Strings: ${strings}`);
console.log(`Student Info: ${studentInfo}`);
console.log(`Favorite Color: ${favoriteColor}`);
console.log(`Unknown Value after change: ${unknownValue}`);
console.log(`Addition Result: ${add(5, 10)}`);
console.log(`Asserted String Length: ${strLength}`);