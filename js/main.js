$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('.countdown').countdown({
	date: "Sep 10 2024",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});


const letters = "abcdefghijklmnopqrstuvwxyz";
const  dataText = "Techvaganza' 24";
var LoaderText = document.querySelector("#head-text");

const intervalPrev = setInterval(()=>{

        LoaderText.innerText = LoaderText.innerText.split("").map(letter => letters[Math.floor(Math.random()*26)]).join("");

    },70);

	function Jumble(){
		let iteration = 0;
		clearInterval(intervalPrev);
		const intervalNew = setInterval(()=>{
	
			LoaderText.innerText = LoaderText.innerText.split("").map((letter,index) => {
				if(index < iteration){
					return dataText[index];
				}
				return letters[Math.floor(Math.random()*26)];
			}).join("");
	
			if(iteration > dataText.length) clearInterval(intervalNew);
	
			iteration += 1/3;
			
		},50);
	}
    
window.addEventListener("load", Jumble);
setInterval(Jumble, 10000);