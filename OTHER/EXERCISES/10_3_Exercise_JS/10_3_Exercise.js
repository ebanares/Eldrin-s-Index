console.log("I am a javascript file");

//VARIABLES
	//string: basically words/sentences. has to be in quotations 
		//ex: var myVariable = "hello";
		//ex: var sentence = "i am a string variable";
var word = "table";


//VARIABLES
	//number: basically numbers. make sure numbers ARE NOT in quotations
		//ex: var myVariable = 1587; 
var number = 2003;

//VARIABLES
	//boolean: basically true or false.
		//ex: var myVariable = true;
		//ex: var myVariable = false;
var areYouHungry = true;

//VARIABLES
	//array: basically container for many different variables
var fruits = ["apple","banana","grapes"];
var favNums = [1,2,3,4,5,6,7,8,9,0];

console.log(word);
console.log(number);
console.log(areYouHungry);
console.log(fruits);
console.log(favNums);

console.log(word, number, areYouHungry, fruits, favNums);


//OPERATORS & ALGORITHMIC OPERATORS
	//basically mathematical symbols that takes inputs and results in a value
	// addition + , subtraction - , multiplication * , division /
var current = 2019;
var sum = number + current;
console.log(sum);

//------------------------------------------------------------------------------------------------------- 

//FUNCTIONS
	//basically making instructions for the computer to do

function add(x,y) {
	var result = x + y;
	return result;
}
var answer = add(number,current); //taking the function "add" and 
//putting it into a new var so it can be put into console.log

console.log(answer);




