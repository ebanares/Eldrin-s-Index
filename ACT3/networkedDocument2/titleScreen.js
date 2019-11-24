console.log("im alive");


function dogIn(){
		$("body").css("background-color","#ffcccc");
		$(".catBG, .birdBG, .fishBG").css("color","#ffcccc");
		$(".dogBG, body").css("color","black");
		$(".rule").css("border","2px solid black")
		$("body").css("transition-duration","0.5s");
	}
function dogOut(){
		$("body").css("background-color","#777");
		$(".dogBG, .catBG, .birdBG, .fishBG").css("color","white");
		$(".dogBG, body").css("color","white");
		$(".rule").css("border","2px solid white")
	}
function catIn(){
		$("body").css("background-color","#ddccff");
		$(".dogBG, .birdBG, .fishBG").css("color","#ddccff");
		$(".catBG, body").css("color","black");
		$(".rule").css("border","2px solid black")
		$("body").css("transition-duration","0.5s");
	}
function catOut(){
		$("body").css("background-color","#777");
		$(".dogBG, .birdBG, .fishBG").css("color","white");
		$(".catBG, body").css("color","white");
		$(".rule").css("border","2px solid white");
	}
function birdIn(){
		$("body").css("background-color","#ccffcc");
		$(".dogBG, .catBG, .fishBG").css("color","#ccffcc");
		$(".birdBG, body").css("color","black");
		$(".rule").css("border","2px solid black")
		$("body").css("transition-duration","0.5s");
	}
function birdOut(){
		$("body").css("background-color","#777");
		$(".dogBG, .catBG, .fishBG").css("color","white");
		$(".birdBG, body").css("color","white");
		$(".rule").css("border","2px solid white");
	}
function fishIn(){
		$("body").css("background-color","#cce6ff");
		$(".dogBG, .catBG, .birdBG").css("color","#cce6ff");
		$(".fishBG, body").css("color","black");
		$(".rule").css("border","2px solid black")
		$("body").css("transition-duration","0.5s");
	}
function fishOut(){
		$("body").css("background-color","#777");
		$(".dogBG, .catBG, .birdBG").css("color","white");
		$(".fishBG, body").css("color","white");
		$(".rule").css("border","2px solid white");
	}
window.onload = function(){
	$(".dogBG").hover(dogIn, dogOut);
	$(".catBG").hover(catIn, catOut);
	$(".birdBG").hover(birdIn, birdOut);
	$(".fishBG").hover(fishIn, fishOut);
}