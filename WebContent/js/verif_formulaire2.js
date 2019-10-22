// function verifier() {
	// let inputName = document.getElementById('name');
	// let stringName = inputName.value;

	// if (stringName == "") {
	// 	// alert("Le champ nom est obligatoire ");

	// 	document.getElementById("error_name").style.visibility = 'visible';
	// 	// return;
	// }

	// let inputEmail1 = document.getElementById('email1');
	// let stringEmail1 = inputEmail1.value;
	// let inputEmail2 = document.getElementById('email2');
	// let stringEmail2 = inputEmail2.value;

	// if (stringEmail1 != stringEmail2) {
	// 	// alert("les saisies emails ne correspondent pas");

	// 	// document.getElementById("error_mail1").style.visibility = 'visible';
	// 	document.getElementById("error_mail2").style.visibility = 'visible';

	// 	// return;
	// }


	// let inputMessage = document.getElementById('message');
	// let stringMessage = inputMessage.value;

	// if (stringMessage == "") {
	// 	// alert("Erreur: vous n'avez pas entré de message");

	// 	document.getElementById("error_message").style.visibility = 'visible';
	// 	// return;
	// }


	// return;
// }


function testOnFocus() {
	console.log("entrée du input")
}

function testOnBlur() {
	let inputName = document.getElementById('name');
	let stringName = inputName.value;
	if (stringName.trim() == "") {
		// alert("Le champ nom est obligatoire ");

		document.getElementById("error_name").style.visibility = 'visible';
		return;
	} else {
		document.getElementById("error_name").style.visibility = 'hidden';

	}
	console.log("sortie du input")
}

function isEmpty(inputElt) {
	let err = document.getElementById("error_" + inputElt.name);
	err.style.visibility = "hidden";

	if (inputElt.value.trim().length == 0) {
		err.style.visibility = "visible";
		err.innerHTML = "Le  champ " + inputElt.name + " est obligatoire"
		return true;
	}
	return false;
}


function isSame(inputElt) {
	let err = document.getElementById("error_" + inputElt.name);
	err.style.visibility = "hidden";

	if (inputElt.value==email1.value) {
		err.style.visibility = "visible";
		err.innerHTML = "Les emails doivent être égaux"
		return true;
	}
	return false;
}

function longueurMin(nombre) {
	let inputMessage = document.getElementById('message');
	let stringMessage = inputMessage.value;
	document.getElementById("errorl_message").style.visibility = 'hidden';

	if (stringMessage.trim().length < nombre) {
		document.getElementById("errorl_message").style.visibility = 'visible';

		return true;
	}
	return false;
}


function verifier() {
	if (isEmpty(document.getElementById('name'))) {
		return false;
	}

	if (isEmpty(document.getElementById('name'))) {
		return false;
	}


}




function test() {
	let elt = document.createElement("h2");
	let div = document.getElementById("container");
	div.appendChild(elt);
	elt.innerText = "hello";
}

function handler(event) {
	console.log(event.target);
	console.log(event.srcElement);
	console.log(event.target.id);
}


// document.addEventListener("DOMContentLoaded", function () {
// 	let buttonId = document.getElementById("message");
// 	buttonId.addEventListener("onblur", handler);
// 	buttonId.addEventListener("onblur", function () { alert("salut") });
// });


document.addEventListener("DOMContentLoaded", function () {
	let blurs = document.getElementsByClassName("blur");
	for (let i = 0; i < blurs.length; i++) {
		blurs[i].addEventListener("blur", function (event) { isEmpty(event.target) })
	}
	document.getElementById("email2").addEventListener("blur", function () { isSame("email1", "email2") });
	document.getElementById("message").addEventListener("blur", evt => longueurMin(evt.target, 25));


});
