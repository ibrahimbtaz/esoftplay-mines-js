let dot = "*";

// // for (let i = 1; i <= 3; i++) {
// // 		console.log(dot);
// // 		dot += "*";	
// // }
// // i=0;
// // do {
// // 	console.log("*");
// // 	i ++;
// // } while (i >= 7);
// i= 1;
// do {
// 	console.log(dot);
// 	i++;
// 	dot += "*";
// } while (i <= 3);

// // let i = 5
// // do {
// // 	console.log(i);
// // 	i--;
// // }
// // while (i >= 0);
// while (i <= 3) {
// 	console.log(dot);
// 	i++;
// 	dot += "*";
// }
let kotak = "|-|";
// for (let i = 0; i < 2*2; i++) {
// 	// if (kotak == "|-|") {
// 	// 	kotak += "|-|";
// 	// }	
// 	// // kotak += "|-|";
// 	// console.log(kotak);

// }

for (let k = 0; k < 5; k++) {
	for (let i = 0; i < k; i++) {
		for (let j = 0; j < k; j++) {
			process.stdout.write(kotak);
		}
			console.log("");
	}
	console.log("");
}

// for (let i = 0; i < 4 * 4; i++) {
// 	// const element = array[i];
// 	process.stdout.write(kotak);
// 	console.log("");
// }

let name,umur,domisili;


class Car {
	constructor(brand, color, maxSpeed) {
		this.brand = brand;
		this.color = color;
		this.maxSpeed = maxSpeed;
		this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
	}

	get chassisNumber() {
		return this._chassisNumber;
	}

	set chassisNumber(chassisNumber) {
		console.log('you are not allowed to change the chassis number');
	}

	// Methods
	drive(angka) {
		console.log(`${this.brand} ${this.color} is driving ${angka} km/h`);
	}

	reverse() {
		console.log(`${this.brand} ${this.color} is reversing`);
	}

	turn(direction) {
		console.log(`${this.brand} ${this.color} is turning ${direction}`);
	}
}

const car = new Car('BMW', 'red', 200);

car.drive();
car.turn('left');
car.reverse();