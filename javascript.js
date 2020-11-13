var images = [
					"./images/img-slide1.jpg",
					"./images/img-slide2.jpg",
					"./images/img-slide3.jpg"
				]
var index = 0; 						 

function prev() {							
	index --;								
	if (index < 0) {						
		index = images.length - 1;		
	}
	slideshow.src = images[index];		
};

function next() {
	index ++;
	if (index > images.length - 1) {
		index = 0;
	}
	slideshow.src = images[index];
	
};
var setAutoShow = setInterval(prev,1500);

function pauseSlide(){
	clearInterval(setAutoShow);
}

function starSlide(){
	setAutoShow = setInterval(prev,1500);
}

// Slide show
var toggle = true;
function myFunction() {
	var elements = document.getElementsByClassName("res-item");
	if (toggle) {
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = 'block'
		}
		toggle = false;
	}else {
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = 'none'
		}
		toggle = true;
	}
}
// Responsive menu