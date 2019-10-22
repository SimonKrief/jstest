function isLengthMin(entree, longueur) {
	// let inputMessage = document.getElementById('message');
	// let stringMessage = inputMessage.value;
	document.getElementById("error_length").style.visibility = 'hidden';

	if (entree.trim().length < longueur) {
		document.getElementById("error_length").style.visibility = 'visible';

		return true;
	}
	return false;
}

/********************************************** */


function check() {
	let ok = true;
	ok = ok & isLengthMin(document.getElementById('password1'), 8);
	ok = ok & isLengthMin(document.getElementById('password2'), 8);

	if (!ok) {
		event.preventDefault();
	}
	return ok;
}

function regexcheck() {

	let ok = true;
	document.getElementById("error").style.visibility = 'visible';

	let password1 = document.getElementById('password1');
	let ps1 = password1.value;

	let password2 = document.getElementById('password2');
	let ps2 = password2.value;

	var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
	// var re = new RegExp(/[\w? [0-9]\w ?]{8,})/;

	ok = ok & regex.test(ps1);
	ok = ok & regex.test(ps2);
	ok = ok & (ps1 == ps2);

	if (!ok) {
		event.preventDefault();
		console.log("ca match pas");
		document.getElementById("error").style.visibility = 'visible';

		return ok;
	}

	console.log("ca match ");
	return ok;
}


document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("password1").addEventListener("blur", evt => isLengthMin(evt.target, 8));


});