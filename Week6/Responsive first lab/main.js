console.log("yo this shit is working");

document.getElementsByClassName("lines").addEventListener("click" , function() {
	console.log("you clicked");
	document.getElementsByClassName("line").style.height= "20px";
});