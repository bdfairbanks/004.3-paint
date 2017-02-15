//this chunk of code draws color up into the mouse
window.addEventListener("load", colorPrimer);
function colorPrimer(){
var pallete = document.getElementsByClassName("color");
	for (var i = 0; i<pallete.length; i++)
		pallete[i].addEventListener("click", getColor);
			function getColor(event){
				color = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
			return color 
	}	
}
//this chunk of code adds color to the painting, when specific boxes are clicked
window.addEventListener("load", distribute);
function distribute() {
var boxes = document.getElementsByClassName("row");
	for (var i = 0; i<boxes.length; i++)
		boxes[i].addEventListener("click", fillBox)
		function fillBox(event){
			event.target.style.backgroundColor = color
		}
}
//this function provides the ability to operate to the save button, converts the current painting aperance to 
// a string to be sent to the Sinatra page,and sends the string.
window.addEventListener("load", save);
function save(event) {
var boxes = document.getElementById("save_button");
	boxes.addEventListener("click", toCsv)
	function toCsv(event){
		body = document.getElementsByClassName('row');

		querystring = ""
		for (var i = 0; i<body.length; i++){
				if (body[i].style.backgroundColor == ""){
					body[i].style.backgroundColor = "white"
				}
				string = body[i].getAttribute("id")+"=" + body[i].style.backgroundColor+"&";
				querystring +=string
			}
			time = "time" + event.timeStamp
			querystring += time

		var xhr = new XMLHttpRequest();
		xhr.open ("GET", "http://localhost:4567/moving?" + querystring);

	xhr.send();
	}
}