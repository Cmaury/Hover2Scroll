//declare local variables
	var mouseY, mouseX, scrolldelay;
	
	window.addEventListener('mousemove',
	function(){
	mouseX = event.clientX;
	mouseY = event.clientY;
	},false);
	
//Set window dimentions to variables height and width		
	var height = window.innerHeight;
	var width = window.innerWidth;

//Set directional scroll functions to be called when appropriate
	function upScroll() {
	    window.scrollBy(0,-5); // horizontal and vertical scroll increments
	    scrolldelay = setTimeout('upScroll()',25); // scrolls every 100 milliseconds
	}
	function downScroll() {
	    window.scrollBy(0,5); // horizontal and vertical scroll increments
	    scrolldelay = setTimeout('downScroll()',25); // scrolls every 100 milliseconds
	}

	function leftScroll() {
	    window.scrollBy(-5,0); 
	    scrolldelay = setTimeout('leftScroll()',25);
	}
	
	function rightScroll() {
	    window.scrollBy(5,0); 
	    scrolldelay = setTimeout('rightScroll()',25);
	}
	
	function stopScroll() {
	    clearTimeout(scrolldelay);
	}

//Conditions when directional scroll function should be called
window.addEventListener('mousemove', function(){
	if (mouseY >= height * .95 && mouseY < height-5) {
	downScroll();
	}

	else if (mouseY <= height * .05 && mouseY > 5) {
	upScroll();
	}
	
	else if (mouseX <= width*.05 && mouseX > 5) {
	leftScroll();
	}
	
	else if (mouseX >= width * .95 && mouseX < width-5) {
	rightScroll();
	}

	else {
	stopScroll();
	}}, false);
	
//Special Cases
/*window resize
window.addEventListener('window.onresize', function(){
	var height = window.innerHeight;
	var width = window.innerWidth;
},false);

//Stop scroll when mouse not in window
var Xmouse,Ymouse;
window.addEventListener('mousemove',outofbounds(), false);

function outofbounds() {
	setTimeout(function(){
		window.addEventListener('mousemove',function(){
			Xmouse = event.clientX;
			Ymouse = event.clientY;
		},false)
		if (Xmouse == mouseX || Ymouse == mouseY){
			stopScroll();
		}
	},25)
	
}
*/