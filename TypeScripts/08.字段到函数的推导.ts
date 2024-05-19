type Watcher<T> = {
	on<K extends keyof T & string>(
		eventName: `${K}Change`,
		callback: (newVal: T[K], oldVal: T[K]) => void
	): void;
};

declare function watcher<T>(obj: T): Watcher<T>;

const objWatcher = watcher({
	name: '张三',
	age: 18,
	gender: '男',
});

objWatcher.on<'age'>('ageChange', (newVal, oldVal) => {}); // on<'age'> 可省略 age
objWatcher.on('ageChange', (newVal, oldVal) => {});
