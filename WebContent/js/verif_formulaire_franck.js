function isEmpty(inputElt){
	let err = document.getElementById("error_"+inputElt.id);
	err.style.visibility = "hidden";
	if(inputElt.value.trim().length == 0){
		err.style.visibility = "visible";
		err.innerText = "Ce champ est obligatoire";
		return true;
	}
	return false;
}

function isSameEmails(email1,email2){
	let email1Elt = document.getElementById(email1);
	let email2Elt = document.getElementById(email2);
	let err = document.getElementById("error_"+email2Elt.name);
	err.style.visibility = "hidden";
	if(isEmpty(email2Elt)){
		return false;
	}
	if(email1Elt.value == email2Elt.value){
		return true;
	}
	err.innerHTML="<h2>Les emails ne sont pas identiques</h2>";
	err.style.visibility = "visible";
	return false;
}

function isLengthMin(inputElt,size){
	let err = document.getElementById("error_"+inputElt.id);
	err.style.visibility = "hidden";
	if(inputElt.value.trim().length<size){
		err.innerText="Entrez au moins "+size+" caractères";
		err.style.visibility = "visible";
		return false;
	}
	return true;
}

function verifier(event){
	let ok = true;

	ok = ok & !isEmpty(document.getElementById('name'));
	ok = ok & !isEmpty(document.getElementById('email1'));
	ok = ok & isSameEmails('email1','email2');
	ok = ok & isLengthMin(document.getElementById('message'),25);

	if(!ok){
		event.preventDefault();
	}
	return ok;
}

document.addEventListener("DOMContentLoaded",function(){
	let blurs = document.getElementsByClassName("blur");
	for(let i=0 ; i<blurs.length ; i++){
		blurs[i].addEventListener("blur",function(event){isEmpty(event.target)});
	}
	document.getElementById("email2").addEventListener("blur",function(){isSameEmails('email1','email2')});
	document.getElementById("formId").addEventListener("submit",verifier);
	document.getElementById("message").addEventListener("blur",evt=>isLengthMin(evt.target,25));
});











