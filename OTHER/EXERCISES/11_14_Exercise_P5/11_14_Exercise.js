console.log("im alive");

var myFlower;
var myFlowerTwo;
var flowers = [];

function setup(){
	createCanvas(windowWidth, windowHeight);
	for(var i=0;i<100;i++){
		flowers.push(new flower());
	}
	myFlower = new flower();
	myFlowerTwo = new flower();
	noCursor();
	noStroke();
}

function draw(){
	background(12, 61, 12);	
	for(var i=0;i<100;i++){
		flowers[i].display();
	}
}

function mouseMoved(){
	for(var i=0;i<100;i++){
		flowers[i].grow();
	}
}
function mouseClicked(){
	for(var i=0;i<100;i++){
		flowers[i].cut();
	}
}
class flower{
	constructor(){
		this.x = random(0,windowWidth);
		this.y = random(windowHeight-100,windowHeight-245);
		this.h = 250;
		this.w = 10;
	}
	display(){
	let green = color(38, 181, 38);
	let darkGreen = color(26, 122, 26);
	let yellow = color(245, 216, 32);
	let orange = color(245, 160, 32);
	let red = color(245, 92, 32);

	//leaf
	fill(green);
	ellipse(this.x+25,this.y+150,60,10);
	ellipse(this.x-25,this.y+100,60,10);
	fill(darkGreen)
	ellipse(this.x+25,this.y+150,50,2.5);
	ellipse(this.x-25,this.y+100,50,2.5);
	//stem
	fill(green);
	stroke(darkGreen);
	strokeWeight(2.5);
	rect(this.x-5,this.y,10,this.h);
	//far back petals
	noStroke();
	fill(red);
	ellipse(this.x-20,this.y-20,60);
	ellipse(this.x+20,this.y-20,60);
	ellipse(this.x+20,this.y+20,60);
	ellipse(this.x-20,this.y+20,60);
	fill(yellow);
	ellipse(this.x-20,this.y-20,50);
	ellipse(this.x+20,this.y-20,50);
	ellipse(this.x+20,this.y+20,50);
	ellipse(this.x-20,this.y+20,50);
	//orange petals
	fill(red);
	ellipse(this.x-20,this.y-20,35);
	ellipse(this.x+20,this.y-20,35);
	ellipse(this.x+20,this.y+20,35);
	ellipse(this.x-20,this.y+20,35);
	fill(orange);
	ellipse(this.x-20,this.y-20,30);
	ellipse(this.x+20,this.y-20,30);
	ellipse(this.x+20,this.y+20,30);
	ellipse(this.x-20,this.y+20,30);
	//red petals
	fill(red);
	ellipse(this.x,this.y,50,120);
	ellipse(this.x,this.y,120,50);
	//yellow petals
	fill(yellow);
	ellipse(this.x,this.y-25,40);
	ellipse(this.x,this.y+25,40);
	ellipse(this.x-25,this.y,40);
	ellipse(this.x+25,this.y,40);
	//flower
	fill(89, 53, 8);
	ellipse(this.x,this.y,50,50);
	fill(133, 78, 11);
	ellipse(this.x,this.y,20,20);
	}
	grow(){
		var inc = random(0,5);
		this.h = this.h + inc;
		this.y = this.y - inc;
	}
	cut(){
		this.h = 250;
		this.y = random(windowHeight-245,windowHeight-100);
	}
}


