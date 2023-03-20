/*
 * @Author: Rock Chang
 * @Date: 2023-03-15 22:37:53
 * @LastEditTime: 2023-03-20 20:31:45
 * @Description: 观察者模式 - demo 发布订阅
 */

class Subject {
	private state: number = 0;
	private observers: Observer[] = [];

	getStates(): number {
		return this.state;
	}

	setStates(newState: number) {
		this.state = newState;
		this.notify();
	}

	// 添加观察者
	attach(observer: Observer) {
		this.observers.push(observer);
	}

	// 通知
	private notify() {
		this.observers.forEach((observer) => {
			observer.update(this.state);
		});
	}
}

// 观察者
class Observer {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	update(state: number) {
		console.log('[  ]', `${this.name} is ${state}`);
	}
}

const sub = new Subject();
const ob1 = new Observer('ob1');
const ob2 = new Observer('ob2');
sub.attach(ob1);
sub.attach(ob2);

sub.setStates(1);

export {};
