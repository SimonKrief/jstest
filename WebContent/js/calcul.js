function add() {
	// on récupère dans le DOM l'élémnet 'a'
	let inputA = document.getElementById('a');
	// on récupère dans le DOM l'élémnet 'b'
	let inputB = document.getElementById('b');

	//valeur entrée par l'utilisateur (on ne travaille pas sur l'objet mais sur une de ses propriétés)
	let stringA = inputA.value;
	let stringB = inputB.value;
	console.log("a et b => " + stringA + " et " + stringB)


	if (isNaN(stringA) || isNaN(stringB)) {
		// alert("les saisies ne sont pas valides");
		document.getElementById("error").style.visibility = 'visible';
		return;
	}
	// en cas de non rechargement de la page, on veut que le message d'erreur doit pouvoir rester cacher.
	document.getElementById("error").style.visibility = 'visible';

	let a = parseFloat(stringA);
	let b = parseFloat(stringB);

	let r = a + b;
	let divRes = document.getElementById("resultat");
	divRes.innerHTML = "<h2>" + r + "<\h2>";
	divRes.style.color = "red";

}