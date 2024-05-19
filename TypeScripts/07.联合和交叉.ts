type or =
	| {
			a: string;
			b: string;
	  }
	| { b: string; c: string };

// 联合类型, 可以是这个也可以是那个  即 aaa 可以是 { a, b } 或者 { b, c } 或者 { a, b, c }
const aaa: or = {
	a: 'a',
	b: 'b',
	c: 'c',
};

type and = {
	a: string;
	b: string;
} & { b: string; c: string };

// 交叉类型, 是这个并且是那个  bbb 只能 { a, b, c }
const bbb: and = { a: 'a', b: 'b', c: 'c' };

type test = {
	a?: string;
	b: number;
	[Symbol.iterator]: number;
};
// 过滤出 key为 string 的
type testString = keyof test & string;
const ccc: testString = 'a'; // 'a' | 'b'

import { ElForm } from 'element-plus';
type TFrom = InstanceType<typeof ElForm>;
const ref = ref<TFrom>();

type rTest = Required<test>;

type getOptional<T> = {
	[K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
let val: getOptional<test>;

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
let val2: Optional<test, 'b'>;
