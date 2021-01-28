

/* 
  定义时不声明类型, 使用时确认类型
*/

// 第一个T相当于声明一个名叫T的泛型, 第二个约束形参, 第三个约束返回值
function log<T>(val: T): T {
  return val
}
// const logya: string = log(123) // err
const logya = log(123)


// 多个
function swap<T, U>(arr: [T, U]): [U, T] {
  return [arr[1], arr[0]]
}
const swapya = swap(['string', 1])

/* 
  泛型约束
*/
// 打印长度 - 只支持数组
function echoArray<T>(arr: T[]): T[] {
  console.log('', arr.length)
  return arr
}
const echoArr1 = echoArray([1, 2, 3])


// 打印长度 - 支持所有有length属性类型的数据
interface echoLengthProps {
  length: number
}
function echoLength<T extends echoLengthProps>(data: T): T {
  console.log('', data.length)
  return data
}
const echoArr2 = echoLength([1, 2, 3])
const echoArr3 = echoLength('123')
const echoArr4 = echoLength({length: 2})
// const echoArr5 = echoLength(123) // err



/* 
  在类中使用泛型
*/
class Queue<T> {
  private data: T[]
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.pop()
  }
}
const queue = new Queue<number>()
const queue2 = new Queue<string>()
// queue.push('11') // err
queue2.push('11')

/* 
  在接口中使用泛型
*/
interface KeyPair<T, U> {
  key: T,
  value: U
}
const kp1: KeyPair<string, number> = {key: '', value: 123}
const kp2: KeyPair<number, boolean> = {key: 123, value: true}
// const kp3: KeyPair<number, boolean> = {key: 123, value: 0} // err
