/*
 * @Author: Peng zhang
 * @Date: 2021-01-27 17:31:09
 * @LastEditTime: 2021-01-28 10:08:31
 * @Description: 
 */

/* 
  public 公共的(默认)
  private 私有属性，仅基类可用
  protected 仅基类及子类内部可用

  readonly 只读
*/
class Animal {
  public type: string;
  constructor(type: string) {
    this.type = type;
  }
  getType() {
    return `type is ${this.type}`
  }
}

class Cat extends Animal {
  name: string;
  constructor(name: string) {
    super('Cat');
    this.name = name;
  }
  doubleName() {
    return `name is ${this.name}${this.name}`
  }
}

const dog = new Animal('Dog')
console.log(dog.getType())
const lili = new Cat('lili')
console.log(lili.doubleName(), lili.type)

