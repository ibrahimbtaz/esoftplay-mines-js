	// $(document).ready(function () {
	// 	const a = $("#grid");
	// 	const j = 8 * 8; // Jumlah row dan col
	// 	let b = 8; // Jumlah bom
	// 	let c = []; // Menyimpan lokasi bom secara acak
	// 	const coba = false;
	// 	console.log(j * b / coba);

	// 	function createGrid() {
	// 		a.empty();

	// 		c = [];

	// 		for (let i = 0; i < j; i++) {
	// 			const ab = $("<div></div>").addClass("grid-item");
	// 			//  ab.click(function () {
	// 			// 	 $(this).addClass("when-clicked");
	// 			//  }); // Menambahkan class "when-clicked" untuk penanda ketika kotak di klik
	// 			a.append(ab);
	// 		}
	// 	}

	// 	createGrid();

	// });

	const c = [];
	while (c.length < 8) {
		const r = Math.floor(Math.random() * 64); // 8x8 grid
		if (!c.includes(r)) {
			c.push(r);
		}
	}
	console.log(...c);

	for (let i = 0; i < 8 * 8; i++) {
		// const ab = 0;
		if (c.includes(i)) {
			console.log(i);
		}
	}

	// const set = new Set(i);
	// console.log(set);



	// ab.click(function () {
	// 	if (c.includes(i)) {
	// 		if (
	// 			$(this).hasClass('grid-item') ||
	// 			$(this).hasClass('bomb-marked')
	// 		) {
	// 			hp--;
	// 			$('#hp').text(hp);
	// 			$(this)
	// 				.removeClass('grid-item bomb-marked')
	// 				.addClass('bomb')
	// 				.delay(10)
	// 				.queue(function (next) {
	// 					// alert('Boom! Kamu menemukan bom!');
	// 					if (hp === 0) {
	// 						setTimeout(() => {
	// 							alert('Game Over');
	// 							createGrid(); // Memulai permainan baru
	// 							hp = 3; // Reset nyawa
	// 							$('#hp').text(hp); // Mengupdate tampilan nyawa
	// 						}, 10);
	// 					}
	// 				}); //jika kotak memiliki bom maka akan diberi warna merah setelah di klik dan akan menampilkan alert
	// 		}
	// 	} else {
	// 		$(this).addClass('when-clicked'); // Menambahkan class "when-clicked" untuk penanda ketika kotak di klik
	// 	}
	// });



	// for(let i = 1; i <= 5; i++) {
	//   console.log(i);
	// }

	let myJob;
	myJob = "Backend Developer";


	console.log(myJob);

	const firstString = "Hello";
	const secondString = "JavaScript";

	console.log(firstString + secondString);

	const name = 'Dicoding';
	const language = 'JavaScript';

	console.log(`Hello $name. Welcome to $language!`);

	const user = {
		firstName: "Luke",
		lastName: "Skywalker",
		age: 19,
		isJedi: true,
		"home world": "Tattooine"
	};

	console.log(user['age'] = 10);

	console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
	console.log(`Umur saya ${user.age} tahun`);
	console.log(`Saya berasal dari ${user["home world"]}`);

	let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
	console.log(myArray[0]);
	console.log(myArray[1]);
	console.log(myArray[2]);
	console.log(myArray[3]);
	console.log(myArray[4]);
	console.log(myArray[5]);
	console.log("Panjang nilai myArray adalah " + myArray.length + ".");

	/**
	 * TODO
	 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
	 *    - Memiliki properti bernama "name"
	 *       - Bertipe data string
	 *       - Bernilai "Bakso Mang Dicoding".
	 *    - Memiliki properti bernama "city"
	 *       - Bertipe data string
	 *       - Bernilai "Bandung".
	 *    - Memiliki properti "favorite drink"
	 *       - Bertipe data string
	 *       - Bernilai "Es Teh".
	 *    - Memiliki properti "favorite food"
	 *       - Bertipe data string
	 *       - Bernilai "Bakso".
	 *    - Memiliki properti "isVegan"
	 *       - Bertipe data boolean
	 *       - Bernilai false.
	 *
	 * 2. Buatlah variabel bernama name.
	 *    Kemudian isi dengan nilai name dari properti object restaurant
	 * 3. Buatlah variabel bernama favoriteDrink.
	 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
	 */

	// Tulis kode di bawah ini
	// const restaurant = {
	// 	name: "Bakso Mang Dicoding",
	// 	city: "Bandung",
	// 	"favorite drink": "Es Teh",
	// 	"favorite food": "Bakso",
	// 	isVegan: false
	// };

	// const name = restaurant.name;
	// const favoriteDrink = restaurant["favorite drink"];

	const array = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

	const newArray = array.filter(a => a >= 4);

	const newArray2 = array.map(a => a * 2);

	console.log(`ini ${newArray2}`);

	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i] > 4) {
	// 		newArray.push(array[i]);
	// 	}	
	// }

	// console.log(newArray);

	// const evenNumber = [];

	// for (let i = 0; i < 100; i++) {
	// 	// console.log(i);
	// 	if (evenNumber[i] % 2 === 0) {
	// 		// console.log(evenNumber[i]);
	// 		arrayeven.push(evenNumber[i]);	// const evenNumber = [];

	// for (let i = 0; i < 100; i++) {
	// 	// console.log(i);
	// 	if (evenNumber[i] % 2 === 0) {
	// 		// console.log(evenNumber[i]);
	// 		arrayeven.push(evenNumber[i]);
	// 	}
	// }
	// 	}
	// }

	// console.log(arrayeven);


	/**
	 * TODO:
	 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
	 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
	 *
	 * Catatan:
	 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
	 */

	// Tulis kode di bawah ini

	// let evenNumber = [];

	// for (let i = 1; i < 100; i++) {
	// 	if (i % 2 === 0) {
	// 		evenNumber.push(i)
	// 		// console.log();
	// 	}
	// }

	// console.log(evenNumber);

	// const c = [];
	// c = [];

	// // Generate new bomb locations
	// while (c.length < 8) {
	// 	const r = Math.floor(Math.random() * 64); // 8x8 grid
	// 	if (!c.includes(r)) {
	// 		c.push(r);
	// 	}
	// }

	// console.log(...c);

	// (function ($) {
	// 	// Fungsi untuk menangani klik pada kotak dengan bom
	// 	$.fn.handleBomb = function () {
	// 		const a = this;
	// 		a.on('click', '.grid-item', function () {
	// 			const clickedCell = $(this);
	// 			const cellIndex = clickedCell.index();

	// 			if (c.includes(cellIndex)) {
	// 				handleBombCellClick(clickedCell);
	// 			} else {
	// 				handleEmptyCellClick(clickedCell);
	// 			}
	// 		});

	// 		function handleBombCellClick(cell) {
	// 			if (cell.hasClass('grid-item') || cell.hasClass('bomb-marked')) {
	// 				hp--;
	// 				$('#hp').text(hp);
	// 				cell
	// 					.removeClass('grid-item bomb-marked')
	// 					.addClass('bomb')
	// 					.delay(10)
	// 					.queue(function (next) {
	// 						if (hp === 0) {
	// 							setTimeout(() => {
	// 								alert('Game Over');
	// 								createGrid();
	// 								hp = 3;
	// 								$('#hp').text(hp);
	// 							}, 10);
	// 						}
	// 					});
	// 			}
	// 		}

	// 		function handleEmptyCellClick(cell) {
	// 			cell.addClass('when-clicked');
	// 		}
	// 	};
	// })(jQuery);

	// // Menggunakan fungsi $.fn.handleBomb() pada elemen dengan ID "grid"
	// $('#grid').handleBomb();


	// function handleGridItemClick() {
	// 	const ab = $(this);
	// 	const i = ab.data('row');
	// 	const j = ab.data('col');
	// 	const c = ab.data('bombLocations');
	// 	let hp = ab.data('hp');

	// 	if (c.includes(i * 8 + j)) {
	// 		if (ab.hasClass('bomb-orange')) {
	// 			hp--;
	// 			ab
	// 				.removeClass('bomb-orange')
	// 				.addClass('bomb')
	// 				.delay(10)
	// 				.queue(function (next) {
	// 					alert('Boom! Kamu menemukan bom!');
	// 					next();
	// 				});
	// 			if (hp == 0) {
	// 				alert('Game Over');
	// 				new_board();
	// 				hp = 5;
	// 			}
	// 		}
	// 		$('#hp').text(hp);
	// 	} else {
	// 		ab.css('background-color', 'white');
	// 	}
	// }

	// function createGrid(a, c, hp) {
	// 	// Create the grid
	// 	for (let i = 0; i < 8; i++) {
	// 		for (let j = 0; j < 8; j++) {
	// 			const ab = $('<div></div>').addClass('grid-item').data('row', i).data('col', j).data('bombLocations', c).data('hp', hp);

	// 			if (c.includes(i * 8 + j)) {
	// 				ab.addClass('bomb-orange');
	// 			}

	// 			a.append(ab);
	// 		}
	// 	}
	// }

	// function new_board() {
	// 	const a = $('#grid'); // Menentukan grid yang akan menampung board
	// 	let b = 8; // Jumlah bom
	// 	let c = []; // Menyimpan lokasi bom secara acak
	// 	let hp = 5;

	// 	// Reset the grid
	// 	a.empty();

	// 	// Reset the bomb locations
	// 	c = [];

	// 	// Generate new bomb locations
	// 	while (c.length < b) {
	// 		const r = Math.floor(Math.random() * 64); // 8x8 grid
	// 		if (!c.includes(r)) {
	// 			c.push(r);
	// 		}
	// 	}

	// 	hp = 5;
	// 	$('#hp').text(hp);

	// 	createGrid(a, c, hp);
	// }

	// // Create the grid on page load
	// new_board();

	// // Add click event listener to reset button
	// $('button').click(function () {
	// 	new_board();
	// });


	// $(document).ready(function () {
	// 	const a = $('#grid');
	// 	const j = 8 * 8; // Jumlah row dan col
	// 	let b = 10; // Jumlah bom
	// 	let c = []; // Menyimpan lokasi bom secara acak

	// 	let hp = 3;
	// 	$('#hp').text(hp);

	// 	function createGrid(a) {
	// 		for (let i = 0; i < j; i++) {
	// 			const ab = $('<div></div>').addClass('grid-item');
	// 			// if (c.includes(i)) {
	// 			//   // ab.addClass('bomb-marked') //jika kotak memiliki bom makan akan diberi mark
	// 			//   // console.log(i)
	// 			// }
	// 			a.append(ab);
	// 		}
	// 	}

	// 	function new_board() {
	// 		a.empty();
	// 		c = [];
	// 		while (c.length < b) {
	// 			const r = Math.floor(Math.random() * 64); // 8x8 grid
	// 			if (!c.includes(r)) {
	// 				c.push(r);
	// 			}
	// 		}
	// 		console.log(...c);
	// 		createGrid(a);
	// 	}

	// 	function handle_click() {
	// 		const i = $(this).index();
	// 		console.log(i);
	// 		if (c.includes(i)) {
	// 			if (
	// 				$(this).hasClass('grid-item') ||
	// 				$(this).hasClass('bomb-marked')
	// 			) {
	// 				hp--;
	// 				$('#hp').text(hp);
	// 				$(this)
	// 					.removeClass('grid-item bomb-marked')
	// 					.addClass('bomb')
	// 					.delay(10)
	// 					.queue(function (next) {
	// 						// if (hp === 0) {
	// 						//   setTimeout(() => {
	// 						//     alert('Game Over');
	// 						//     new_board(); // Memulai permainan baru
	// 						//     hp = 3; // Reset nyawa
	// 						//     $('#hp').text(hp); // Mengupdate tampilan nyawa
	// 						//   }, 10);
	// 						// }
	// 						// alert('Boom! Kamu menemukan bom!');
	// 					}); //jika kotak memiliki bom maka akan diberi warna merah setelah di klik dan akan menampilkan alert
	// 			}
	// 		} else {
	// 			$(this).addClass('when-clicked'); // Menambahkan class "when-clicked" untuk penanda ketika kotak di klik
	// 		}
	// 	}

	// 	// function show_bomb() {
	// 	//   $('.grid-item').each(function (i) {
	// 	//     if (c.includes(i)) {
	// 	//       console.log(i);
	// 	//       $(this).addClass('bomb-marked');
	// 	//     }
	// 	//   });
	// 	//   console.log(c);
	// 	// }

	// 	new_board();

	// 	$('#grid').on('click', '.grid-item', handle_click);
	// 	$('.new_board').click(new_board);
	// 	$('.show_bomb').click(show_bomb);
	// });


	// let _2mj;

	// _2mj = "ab";
	// console.log(_2mj)