// const car = {
// 	brand: 'Ford',
// 	color: 'red',
// 	maxSpeed: 200,
// 	chassisNumber: 'f-1',
// 	drive: () => {
// 		console.log('driving');
// 	},
// 	reverse: () => {
// 		console.log('reversing');
// 	},
// 	turn: () => {
// 		console.log('turning');
// 	}
// }

// const myCar = {
// 	brand: 'Tesla',
// 	color: 'black',
// 	maxSpeed: 250,
// 	chassisNumber: 't-1',
// 	drive: () => {
// 		console.log('driving');
// 	},
// 	reverse: () => {
// 		console.log('reversing');
// 	},
// 	turn: () => {
// 		console.log('turning');
// 	}
// }

// const yourCar = {
// 	brand: 'BMW',
// 	color: 'white',
// 	maxSpeed: 300,
// 	chassisNumber: 'b-1',
// 	drive: () => {
// 		console.log('driving');
// 	},
// 	reverse: () => {
// 		console.log('reversing');
// 	},
// 	turn: () => {
// 		console.log('turning');
// 	}
// }

// class Car {
// 	constructor(brand, color, maxSpeed, chassisNumber) {
// 		this.brand = brand;
// 		this.color = color;
// 		this.maxSpeed = maxSpeed;
// 		this.chassisNumber = chassisNumber;
// 	}
// 	drive() {
// 		console.log(`${this.brand} ${this.color} is driving`);
// 	}
// 	reverse() {
// 		console.log(`${this.brand} ${this.color} is reversing`);
// 	}
// 	turn() {
// 		console.log(`${this.brand} ${this.color} is turning`);
// 	}
// }

// console.log(typeof Car); // function


// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();
// car2.drive();
// car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/
// const array1 = [1,2,3,4,5,6,7,8];

// for (const element of array1) {
// 	console.log(element);
// }

// const c = [];
// // Generate new bomb locations
// while (c.length < 8) {
// 	const r = Math.floor(Math.random() * 64); // 8x8 grid
// 	if (!c.includes(r)) {
// 		c.push(r);
// 	}
// }

// class Car {
// 	constructor(brand, color, maxSpeed) {
// 		this.brand = brand;
// 		this.color = color;
// 		this.maxSpeed = maxSpeed;
// 		// Set a random chassis number
// 		this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
// 	}
// }

// const car1 = new Car('BMW', 'red', 200);
// const car2 = new Car('Audi', 'blue', 220);
// const car3 = new Car('BMW', 'black', 250);

// console.log(car1);
// console.log(car2);
// console.log(car3);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
*/


// class User {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	get fullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	set fullName(fullName) {
// 		const [firstName, lastName] = fullName.split(' ');
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// }

// const user = new User('John', 'Doe');
// console.log(user);
// console.log(user.fullName);

// user.fullName = 'Fulan Fulanah';
// console.log(user);
// console.log(user.fullName);

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/


// class Siswa {
// 	#kelasSiswa = null;
// 	constructor(name, kelas, jurusan, nilai, negara) {
// 		this.name = name;
// 		this.kelas = kelas;
// 		this.jurusan = jurusan;
// 		this.nilai = nilai;
// 		this.negara = negara;
// 		// this._kelasSiswa = `${this.kelas} ${this.jurusan}`;
// 		this.#kelasSiswa = this.#generatekelasJurusan();
// 	}

// 	// get kelasSiswa() {
// 	// 	return this._kelasSiswa;
// 	// }

// 	// set kelasSiswa(kelasSiswa) {
// 	// 	// const [kelas, jurusan] = kelasSiswa.split(' ');
// 	// 	// this.kelas = kelas;
// 	// 	// this.jurusan = jurusan;
// 	// 	    console.log('you are not allowed to change the chassis number');
// 	// }

// 	kelasj(sekolah) {
// 		console.log(`${this.jurusan} ${sekolah}`);//argument sekolah tanpa this
// 	}

// 	dataLengkap() {
// 		console.log(`ini adalah data lengkap ${this.name} ${this.kelas} ${this.jurusan} ${this.nilai}`);
// 	}

// 	#generatekelasJurusan(){
// 		return `${this.kelas} ${this.jurusan}`;

// 	}
// }
// // Siswa.kelasSiswa = 'IPA 1';
// // Siswa.kelasSiswa = 'IPA 1';
// // console.log(Siswa.kelasSiswa, 'ini adalah kelas siswa');
// const siswa1 = new Siswa('John', 10, 'IPA', 90, "indonesia");
// // siswa1.kelasSiswa = 'IPA 1';
// // siswa1.kelas = 100;
// // siswa1.jurusan = 'IPS';
// console.log(siswa1)
// // console.log(siswa1.kelasSiswa);
// const siswa2 = new Siswa('surya', 10, 'IPS', 90, "indonesia");

// // console.log(siswa2.kelasJurusan('SMA 1'));
// siswa2.kelasj("SMA	1");
// // siswa.dataLengkap();

// class Perumahan {
// 	constructor(nameHousing) {
// 		this.nameHousing = nameHousing;
// 	}

// 	noRumah(norumah) {
// 		console.log(`${this.nameHousing} ${this.nameHouse} ${norumah}`);
// 	}
// }

// class Rumah extends Perumahan {
// 	constructor(nameHousing, nameHouse) {
// 		// super(nameHousing);
// 		this.nameHousing = nameHousing;
// 		this.nameHouse = nameHouse;
// 	}

// 	noRumah(norumah) {
// 		// console.log(`${this.nameHousing} ${this.nameHouse} ${norumah}`);
// 		super.noRumah(norumah);
// 		console.log(`${this.nameHousing} ${this.nameHouse} ${norumah}`);
// 	}
// }

// const rumah = new Rumah('Perumahan 1', 'House 1');

// console.log(rumah);


/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini

// class Animal {
// 	constructor(name, age, isMammal) {
// 		this.name = name;
// 		this.age = age;
// 		this.isMammal = isMammal;
// 	}
// }

// class Rabbit extends Animal {
// 	constructor(name, age, isMammal) {
// 		super(name, age, isMammal);
// 	}

// 	eat() {
// 		return `${this.name} sedang makan!`;
// 	}
// }

// class Eagle extends Animal {
// 	constructor(name, age, isMammal) {
// 		super(name, age, isMammal);
// 	}

// 	fly() {
// 		return `${this.name} sedang terbang!`;
// 	}
// }

// const myRabbit = new Rabbit('Labi', 2, true);
// const myEagle = new Eagle('Elo', 4, false);

// console.log(myRabbit);
// console.log(myEagle);

// function car({
// 	brand,
// 	maxSpeed,
// 	wheelCount
// }) {
// 	this.brand = brand;
	// this.maxSpeed = maxSpeed;
// 	this.wheelCount = wheelCount;
// }

// const myCar = car({
// 	brand: 'Toyota',
// 	maxSpeed: 200,
// 	wheelCount: 4
// });

// console.log(myCar);

// class Car {}
// const car = new Car();
// console.log(typeof Car);

// var course = {
// 	name: "JS",
// 	lessons: 41
// };
// console.log(course.name.length);

// var cubeId = {
// 	length: 5,
// 	width : 5,
// 	height: 5
// };

// console.log(cubeId.length);

// function main() {
// 	//take flight number and its status
// 	var flightNumber = "NGT 929";
// 	var flightStatus = "landed";

// 	var flight1;
// 	flight1 = new Flight(flightNumber, flightStatus);
// 	//assign a flight object to flight1 variable

// 	//output
// 	console.log('The flight ' + flight1.number + ' is ' + flight1.status)

// }

// function Flight(flightNumber, status) {
// 	//fix the constructor
// 	this.number = flightNumber;
// 	this.status = status;
// };

// // const myFlight = new Flight('NGT 929', 'landed');
// console.log(main());

// ##SAMPLE##
class Siswa {
	constructor(nama, umur, sekolah, kelas) {
		this.nama    = nama;
		this.umur    = umur;
		this.sekolah = sekolah;
		this.kelas   = kelas;
		this.changeName = function (nama) {
			this.nama = nama;
		}
	}

	dataLengkap() {
		return `nama saya ${this.nama} umur saya ${this.umur} sekolah saya ${this.sekola} kelas saya ${this.kelas}`;
	}

}
const surya = new Siswa('surya', 17, 'SMK', 'XII');
surya.changeName('zidni');
// console.log(surya.dataLengkap());
// console.log(surya.nama);




function main() {
	var prodID   = "LD1493";
	var price    = parseInt(1700, 10);
	var discount = parseInt(15, 10);

	var prod1 = new Product(prodID, price);
	console.log(prod1.prodID + " price: " + prod1.price);

	prod1.changePrice(discount);
	console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
	this.prodID = prodID;
	this.price  = price;

	this.changePrice = function (discount) {
		//your code goes here
		this.price = this.price - (this.price * discount / 100);
	}
}

// const myMain = new main();
// console.log(main);

// var myString = "abcdef";
// console.log(myString.length);


var arr = new Array(3, 6, 8);
arr[10] = 10
// console.log(arr);

const wle = new Array("halo", "onon", "kita", "bersama");
console.log(wle);