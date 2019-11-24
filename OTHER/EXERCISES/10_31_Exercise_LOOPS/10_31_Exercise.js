console.log("i'm alive");

// var number=0;

// var fruits = ["pear","apple","banana","pear","apple","banana","pear","apple","banana","pear","apple","banana","pear","apple","banana","pear","apple","banana","pear","apple","banana"];//arrays are variables used to store multiple elements

// // var chosenFruit = fruits[2]; //calls which 
// // var fruitsLength = fruits.length; //total number of items in array
// window.onload=function(){
// 	for (var i=0; i<fruits.length; i++){ //starts counting at 0, incriments until "i" reaches a number
// 		var chosenFruit = fruits[i]; //fruits[i], keeps incrimenting
// 		$("body").append('<img src="fruits/'+chosenFruit+'.png">'); //append adds elements from jquery into html
// 		$("body").css("background-image","url('fruits/apple.png')");
// 	}
// }
var windowWidth;
var windowHeight;
var pool;
var totalFish = 10;

window.onload = function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	for(var i=0;i<totalFish;i++){
		var topPos = randNum(windowHeight);
		var leftPos = randNum(windowWidth);
		var fish = $('<img class="fish" src="fish2.png">');
	
		$(fish).css("top", topPos + "px");
		$(fish).css("left", leftPos + "px");
		$("body").append(fish);
	}

	setInterval(moveFish,800);
}

function moveFish(){
	$(".fish").each(function(){
		var topPos = randNum(windowHeight);
		var leftPos = randNum(windowWidth);
		$(this).css("top", topPos + "px");
		$(this).css("left", leftPos + "px");
	});
}

function randNum(value){
	var number = Math.random()*value;
	number = Math.floor(number);
	return number;
}