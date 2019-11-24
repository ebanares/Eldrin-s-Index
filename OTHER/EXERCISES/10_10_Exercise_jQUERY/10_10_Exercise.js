console.log("I am working");

//$ targets; 
//("p") is a selector; 
//.css is the action; 
//("","") are parameters that you change;

	// window.onload = function(){
	// 	$("p").css("color","green");
	// };

//CLICK!!!!!!
	// function changeColor(){
	// 	$("p").css("color","green");
	// }; //function is to tell what changeColor will do;
	// window.onload = function(){
	// 	$("p").click(changeColor);
	// }; //this would load the click(changeColor) into the window;

//RANDOM!!!!!!
	// var num = Math.random()*100; //by multiply by 100, it'll give this number a "ceiling"; 
	// num = Math.floor(num); //takes whatever number you have and rounds it DOWN; cuts off the decimal;
	// console.log(num);

	// function changeColor(){
		// 	var red = Math.random()*255;
		// 	red = Math.floor(red);
		// 	var green = Math.random()*255;
		// 	green = Math.floor(green);
		// 	var blue = Math.random()*255;
		// 	blue = Math.floor(blue);

		// 	console.log(red,green,blue);

		// 	$("p").css("color","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
	// 	};

	// window.onload = function(){
		// 	$("p").click(changeColor);
	// 	}; //this would load the click(changeColor) into the window;

//HOVER!!!!!!!!!!!!!!!!
	// function changeColor(){
	// 		var red = Math.random()*255;
	// 		red = Math.floor(red);
	// 		var green = Math.random()*255;
	// 		green = Math.floor(green);
	// 		var blue = Math.random()*255;
	// 		blue = Math.floor(blue);

	// 		console.log(red,green,blue);

	// 		$("p").css("color","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
	// 	};

	// function mouseOut(){
	// 		$("p").css("color","black"); //makes the text black when the mouse leaves;
	// }

	// window.onload = function(){
	// 		$("p").hover(changeColor, mouseOut);
	// 	}; //this would load the click(changeColor) into the window; mouseOut indicates what will happen when the mouse leaves;


//TIME!!!!!!!!!!
function changeColor(){
		var red = Math.random()*255;
		red = Math.floor(red);
		var green = Math.random()*255;
		green = Math.floor(green);
		var blue = Math.random()*255;
		blue = Math.floor(blue);

		console.log(red,green,blue);

		$("p").css("color","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
		$("p").css("transition-duration","1s");
	};
function changeBackground(){ // calls the background function
	var red = Math.random()*255;
	red = Math.floor(red);
	var green = Math.random()*255;
	green = Math.floor(green);
	var blue = Math.random()*255;
	blue = Math.floor(blue);

	console.log(red,green,blue);

	$("body").css("background","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
	$("body").css("transition-duration","1s");
	};
function mouseOut(){
	$("p").css("color","black"); //makes the text black when the mouse leaves;
}

window.onload = function(){
	$("p").hover(changeColor, mouseOut);
	//setTimeout(changeColor, 3000); //changes colour ONCE in 3000milliseconds;
	setInterval(changeColor, 1000); //changes colour EVERY 400milliseconds;
	setInterval(changeBackground, 1000);
	};

//SCROLL!!!!!!!!!!!
// function changeColor(){
// 	var red = Math.random()*255;
// 	red = Math.floor(red);
// 	var green = Math.random()*255;
// 	green = Math.floor(green);
// 	var blue = Math.random()*255;
// 	blue = Math.floor(blue);

// 	console.log(red,green,blue);

// 	$("p").css("color","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
// 	};

// function changeBackground(){ // calls the background function
// 	var red = Math.random()*255;
// 	red = Math.floor(red);
// 	var green = Math.random()*255;
// 	green = Math.floor(green);
// 	var blue = Math.random()*255;
// 	blue = Math.floor(blue);

// 	console.log(red,green,blue);

// 	$("body").css("background","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
// 	};

// function mouseOut(){
// 	$("p").css("color","black"); //makes the text black when the mouse leaves;
// }

// window.onload = function(){
// 	$("p").hover(changeColor, mouseOut);
// 	setInterval(changeColor, 500);
// 	$(window).scroll(changeBackground); //makes the window scroll
// 	};

//TYPE!!!!!!!!!!!! & cONDITIONALS
// function changeColor(event){
// 	var keyPressed = event.key;
// 	if (keyPressed == "r"){
// 		$("p").css("color","red");
// 	}else{
// 		$("p").css("color","blue");
// 	}
// }

// window.onload = function(){
// 	$(window).keypress(changeColor); //Makes colour change when keys are pressed;
// 	//DRAG!!!!!!!!!!!!
// 	$("p").draggable(); //this is just making it able to move the paragraph;
// 	};







