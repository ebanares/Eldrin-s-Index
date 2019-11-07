console.log("i'm alive");
function changeColor(){
		var red = Math.random()*255;
		red = Math.floor(red);
		var green = Math.random()*255;
		green = Math.floor(green);
		var blue = Math.random()*255;
		blue = Math.floor(blue);

		$(".uwu").css("color","rgb("+red+","+green+","+blue+")"); //QUOTATIONS STUFF IS IMPORTANT!!!!!!!!!; add the plus to indicate its relationship with the variables;
	};
	var totalCount = 6;
			function changeBg(){
			var num = Math.ceil( Math.random() * totalCount );
			document.body.background = "images/pizza"+num+".jpg";
			}
window.onload = function(){
	setInterval(changeColor,50);
	setInterval(changeBg, 1000);

}