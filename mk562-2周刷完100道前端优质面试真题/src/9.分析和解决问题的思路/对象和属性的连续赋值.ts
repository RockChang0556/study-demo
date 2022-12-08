/*
 * @Author: Rock Chang
 * @Date: 2022-12-08 11:39:30
 * @LastEditTime: 2022-12-08 15:05:41
 * @Description: 对象和属性的连续赋值
 */

let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };

console.log('[ a.x ]-13', a.x);
console.log('[ b.x ]-15', b.x);

/* 
  连续赋值， 倒序执行
  a = b = 2
  => b = 2
  => a = b
*/
/* 
  a.x新增属性比赋值优先级高
  a.x = 2
  => a.x = undefined
  => a.x = 2
*/

/* 
  let a = { n: 1 };
  let b = a;
  a.x = a = { n: 2 };

  => a -> { n: 1 }
  => b -> { n: 1 }
  => a.x = undefined  ==> 此时 堆里{ n: 1, x: undefined }
  => a = { n: 2 }     ==> a -> { n: 2 }
  => a.x = a          ==> 堆里{ n: 1, x: { n: 2 } }

  a -> { n: 2 }    a.x = undefined
  b -> { n: 1, x: {n: 2} }    b.x -> { n: 2 }
*/

export {};
