function clr(){
	document.getElementById("results").value = "";
}

function display(val){
	document.getElementById("results").value +=	val;
}


function equate(){
	let X = document.getElementById('results').value;
	let Y = eval(X);
	document.getElementById("results").value = Y;
}