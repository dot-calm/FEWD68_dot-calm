console.log("yo this shit is working");


// var elem = document.getElementById("menu");
// var menuStyle = window.getComputedStyle(elem,null).getPropertyValue("display");

// console.log(menuStyle);



// var menuStyle = document.getElementById(menu).getPropertyValue("height");
// console.log(menuStyle);

function menuDrop() {
	console.log("You Clicked");

	var elem = document.getElementById("menu");
	var menuStyle = window.getComputedStyle(elem,null).getPropertyValue("display");

	console.log(menuStyle);

	if (menuStyle === "none") {
		document.getElementById("menu").style.display = "block";
	}
	else {
		document.getElementById("menu").style.display = "none";
	};
	
}