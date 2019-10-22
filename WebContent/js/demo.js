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

	function handler(event){
		console.log(event.target);
		console.log(event.srcElement);
		console.log(event.target.id);

	}

	// let buttonId = document.getElementById("buttonId");
	// //affectation de l'objet fonction handler au onclick:
	// // buttonId.onclick = handler;

	// buttonId.addEventListener("click", handler);
	// buttonId.addEventListener("click", function(){alert("salut")});

	// le script est analysé loprsque les events sont chargés, onn n'a donc plus besion demetre me script à lma fin
	document.addEventListener("DOMContentLoaded",function(){
	let buttonId = document.getElementById("buttonId");
	buttonId.addEventListener("click", handler);
	buttonId.addEventListener("click", function(){alert("salut")});
	});

