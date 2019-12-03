console.log("im alive");

function dogIn(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-01.jpg')");
		$(".catBG, .birdBG, .fishBG").css("opacity","0");
		$(".dogBG, body").css("color","#b30000");
		$(".rule").css("border","2px solid #b30000")
		$("body").css("transition-duration","0.5s");
		
	}
function dogOut(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-05.jpg')");
		$(".dogBG, .catBG, .birdBG, .fishBG").css("opacity","1");
		$(".dogBG, body").css("color","#b35c00");
		$(".rule").css("border","2px solid #b35c00");

	}
function catIn(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-02.jpg')");
		$(".dogBG, .birdBG, .fishBG").css("opacity","0");
		$(".catBG, body").css("color","#5900b3");
		$(".rule").css("border","2px solid #5900b3");
		$("body").css("transition-duration","0.5s");
	}
function catOut(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-05.jpg')");
		$(".dogBG, .birdBG, .fishBG").css("opacity","1");
		$(".catBG, body").css("color","#b35c00");
		$(".rule").css("border","2px solid #b35c00");
	}
function birdIn(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-03.jpg')");
		$(".dogBG, .catBG, .fishBG").css("opacity","0");
		$(".birdBG, body").css("color","#00b300");
		$(".rule").css("border","2px solid #00b300");
		$("body").css("transition-duration","0.5s");
	}
function birdOut(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-05.jpg')");
		$(".dogBG, .catBG, .fishBG").css("opacity","1");
		$(".birdBG, body").css("color","#b35c00");
		$(".rule").css("border","2px solid #b35c00");
	}
function fishIn(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-04.jpg')");
		$(".dogBG, .catBG, .birdBG").css("opacity","0");
		$(".fishBG, body").css("color","#0077b3");
		$(".rule").css("border","2px solid #0077b3");
		$("body").css("transition-duration","0.5s");
	}
function fishOut(){
		$("body").css("background-repeat", "no-repeat")
				.css("background-size", "cover")
				.css("background-position", "center")
				.css("background-image", "url('final_resources/bg-05.jpg')");
		$(".dogBG, .catBG, .birdBG").css("opacity","1");
		$(".fishBG, body").css("color","#b35c00");
		$(".rule").css("border","2px solid #b35c00");
	}
window.onload = function(){
	$(".dogBG").hover(dogIn, dogOut);
	$(".catBG").hover(catIn, catOut);
	$(".birdBG").hover(birdIn, birdOut);
	$(".fishBG").hover(fishIn, fishOut);
}
