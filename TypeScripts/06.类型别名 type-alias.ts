/*
 * @Author: Peng zhang
 * @Date: 2021-01-28 14:46:43
 * @LastEditTime: 2021-01-28 16:07:49
 * @Description: 
 */

// 不加别名
let sum: (x: number, y: number) => number
const res1 = sum(1, 2)

// 别名
type Sum = (x: number, y: string) => number
let sum2: Sum
const res2 = sum2(1, '2')

type NumOrStr = number | string
const res3: NumOrStr = 1
const res4: NumOrStr = '1'
// const res5: NumOrStr = true // err

// 联合类型
type Entry = 'top' | 'bottom' 
// let partn1: Entry = 'rock' // err
let partn2: Entry = 'top'

// 交叉类型
interface Name {
  name: string
}
type Info = Name & {age: number}
let info: Info = {
  name: 'rock',
  age: 1
}