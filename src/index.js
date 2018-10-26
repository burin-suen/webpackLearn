import './css/index.css';
import './less/index.less';
import './scss/index.scss';

let num1 = 4;
let num2 = 5;

class Person {
	constructor (a, b) {
		this.a = a;
		this.b = b;

		this.calc();
	}

	calc(){
		console.log(this.a**this.b);
	}
}

document.write('Hello Webpack!');
new Person(num1, num2);