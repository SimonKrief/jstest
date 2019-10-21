// "use strict";
function foo() {

	// la variable devient locale
	var i = 2;
}
// définition de la fonction hello()
function hello() {
	// foo();
	// var i = 2;

	// allert 
	// alert("Bonjour" + i);
	// console.log("Hello, world");

	// for (var i = 0; i <= 10; i++) {
	// console.log("i="+i);
	// 	alert("Bonjour" + i);


	}

	function sum() {
		let somme = 0;
		for (var index = 0; index < arguments.length; index++) {
			somme += arguments[index];
		}
		return somme;

	}
	sum(1, 2, 3);

	// for()


