console.log("i'm alive");
console.log(window.innerWidth, window.innerHeight);
//"Catch and swat the fly."
//READ ME: THIS IS THE PRIMARY CODE. WORKS!
	//functions that moves the circle's upon hover
		function moveOut(){
		//coordinate depends on browser width
			var x = Math.random()*(window.innerWidth-100); //"-100" the shape doesn't go right up to the browser's edge
			x = Math.floor(x);
		//coordinate depends on browser height
			var y = Math.random()*(window.innerHeight-200); //"-200" the shape doesn't go right up to the browser's edge
			y = Math.floor(y);

			$(".catchMe").animate(
				{left: [x + "px"], top: [y + "px"]},
				{duration:250,ease:"easeOut"}); //animates that object's coordinate
		}
		function buzz(){
		}
	//what happens when you catch the fly
		function swat(){
			$(".catchMe").attr("src", "webVerbs_Resources/splatter.png"); //shows blood splatter when fly is clicked
			$(".catchMe").css("-webkit-animation-play-state", "paused"); //pauses the fly's vibrate
			$(".show").css("-webkit-animation-play-state", "running"); //starts the "Refresh to restart." sentence
			$(".catchMe").css("animation-play-state", "paused"); //pauses the fly's vibrate
			$(".show").css("animation-play-state", "running"); //starts the "Refresh to restart." sentence
			$("#audio").each(function(){ //stops audio!!! aka buzzing when fly is hit
    			(this).pause(); // Stop playing audio
    			(this).currentTime = 0; // Resets time
    		});
    		$(".catchMe").fadeOut(5000); //fade out the blood splatter in 5 seconds

    		$(".shock").css("opacity","100%"); //RED FLASH!!!! when fly are hit
    		$(".shock").fadeOut(500); //quick fade out of the flash
		}
	//change image after each refresh
			var totalCount = 9;
			function ChangeIt(){
			var num = Math.ceil( Math.random() * totalCount );
			document.body.background = "backgrounds/"+num+".jpg";
			document.body.style.backgroundRepeat = "repeat";// Background repeat
			}
		// $(document).ready(function(){
		// 	var images = ["backgrounds/back1.jpg","backgrounds/back2.jpg","backgrounds/back3.jpg","backgrounds/back4.jpg","backgrounds/back5.jpg","backgrounds/back6.jpg","backgrounds/back7.jpg"];
		// 	var rand = Math.floor(Math.random() * images.length);
		// 	$("body").css("background-image", images[rand]);
		// });

	//activates functions above when hovering
		window.onload = function(){
			$(".catchMe").hover(moveOut,buzz);
			$(".catchMe").click(swat);
			ChangeIt();
		}
//
//
//
//
//
//
//READ ME: Code below are old and/or incomplete. Included only to show process.
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


//"FADE IN&OUT"
//READ ME: THIS ONE WORKS, but OLD
//exactly like previous but different code;
	//content learned from StackOverflow thread: https://stackoverflow.com/questions/15510922/make-image-randomly-move-onclick
	//content also learned from: https://www.w3schools.com/js/js_window.asp

	//functions that moves the circle's upon hover
	// 	function moveCircle(){
	// 		$(".catchMe").fadeOut(100); //fades the circle out when mouse hovers over it at that time interval
	// 	}
	// 	function moveOut(){
	// 	//coordinate depends on browser width
	// 		var x = Math.random()*(window.innerWidth-100); //"-100" the shape doesn't go right up to the browser's edge
	// 		x = Math.floor(x);
	// 	//coordinate depends on browser height
	// 		var y = Math.random()*(window.innerHeight-100); //"-100" the shape doesn't go right up to the browser's edge
	// 		y = Math.floor(y);
	// 	console.log(window.innerWidth, window.innerHeight);

	// 		$(".catchMe").css("left", x + "px"); //changes circle's left coordinate
	// 		$(".catchMe").css("top", y + "px");	//changes circle's top coordinate
	// 		$(".catchMe").fadeIn(500); //fades the circle in at that time interval
	// 	}
	// //function that changes colour each hover/fade
	// 	function changeColor(){
	// 		var red = Math.random()*255;
	// 		red = Math.floor(red);
	// 		var green = Math.random()*255;
	// 		green = Math.floor(green);
	// 		var blue = Math.random()*255;
	// 		blue = Math.floor(blue);
	// console.log(red,green,blue);
	// 		$(".catchMe").css("background","rgb("+red+","+green+","+blue+")"); 
	// 	};
	// //activates functions above when hovering
	// 	window.onload = function(){
	// 		$(".catchMe")
	// 			.hover(moveCircle,moveOut)
	// 			.hover(changeColor);
	// 	}


