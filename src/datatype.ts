// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3]

// 元组
let tuple: [number, string] = [0, '1']

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象

// symbol

// 枚举
// 数字枚举
enum Role {
    Reporter,
    Developer
}
// 字符串枚举
enum Message {
    Success = "ok"
}
// 异构枚举
// 枚举成员
// 常量枚举
const enum Month {
    Jan,
    Feb
}
// 枚举类型