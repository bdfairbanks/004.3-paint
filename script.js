window.addEventListener("load", function(){

	function getColor(event){
		var color = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
		return color 
	}

	function fillBox(event){
		event.target.style.backgroundColor = color
	}

	function toCsv(event){
		body = document.getElementsByClassName('row');

		querystring = "";

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

	//this chunk of code draws color up into the mouse
	function colorPrimer(){
		var pallete = document.getElementsByClassName("color");

		for (var i = 0; i<pallete.length; i++) {
			pallete[i].addEventListener("click", getColor);
		}
	}

	//this chunk of code adds color to the painting, when specific boxes are clicked
	function distribute() {
		var boxes = document.getElementsByClassName("row");
		for (var i = 0; i<boxes.length; i++){
			boxes[i].addEventListener("click", fillBox)
		}
	}

	//this function provides the ability to operate to the save button, converts the current painting aperance to 
	// a string to be sent to the Sinatra page,and sends the string.
	function save(event) {
		var boxes = document.getElementById("save_button");
		boxes.addEventListener("click", toCsv);
	}

	colorPrimer();
	distribute();
	save();
});