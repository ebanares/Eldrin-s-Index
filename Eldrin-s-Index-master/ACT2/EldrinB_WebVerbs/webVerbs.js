console.log("i'm alive");
//READ ME: CODE RIGHT BELOW IS OLD & NOT FUNCTIONAL
// when mouse hovers over circle, move circle to a random position
	// var screenWidth = Math.random()*1440;
	// screenWidth = Math.floor(screenWidth);

	// var screenHeight = Math.random()*900;
	// screenHeight = Math.floor(screenHeight);

	// console.log(screenWidth,screenHeight);

	// function moveCircle(){
	//  $(".catchMe").css("transform","translate("+screenWidth+","+screenHeight+")");
	// 	$(".catchMe").css("transform","translate(50px,50px)");
	// 	}

	// function mouseOut(){
	// 	$(".catchMe").css("transform","translate(100px,100px)");
	// }


	// window.onload =  function(){
	// 	$(".catchMe").hover(moveCircle, mouseOut);
	// }



//READ ME: THIS ONE WORKS

	//PROBLEM: IT WORKS,,, ONCE! I'D HAVE TO REFRESH AFTER CIRCLE MOVES
		//HOW CAN I MAKE THE CIRCLE MOVE AFTER EACH TIME THE MOUSE HOVERS

//exactly like previous but different code;
	//content learned from StackOverflow thread: https://stackoverflow.com/questions/15510922/make-image-randomly-move-onclick
	//content also learned from: https://www.w3schools.com/js/js_window.asp
	//coordinate depends on browser width
		var x = Math.random()*window.innerWidth; 
		x = Math.floor(x);
	//coordinate depends on browser height
		var y = Math.random()*window.innerHeight; 
		y = Math.floor(y);
	console.log(window.innerWidth, window.innerHeight);
	//function that moves the circle's top and left
		function moveCircle(){
			$(".catchMe").css("top", x + "px");
			$(".catchMe").css("left", y + "px");
		}
	//function that changes colour each hover
		function changeColor(){
			var red = Math.random()*255;
			red = Math.floor(red);
			var green = Math.random()*255;
			green = Math.floor(green);
			var blue = Math.random()*255;
			blue = Math.floor(blue);
	console.log(red,green,blue);
			$(".catchMe").css("background","rgb("+red+","+green+","+blue+")"); 
		};
	//function that 
		function moveOut(){
			$(".catchMe").css("top", x + "px");
			$(".catchMe").css("left", y + "px");
		}
	//activates ^ function after hovering
		window.onload = function(){
			$(".catchMe").hover(moveCircle,changeColor);
		}
