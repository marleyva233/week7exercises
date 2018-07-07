//these are my exercises for week7 
//first we use document.getElementById() to access the myH1 header then we 
//use .textContent to change it's content
document.getElementById("myH1").textContent="Hi, welcome!";
//we are going to create a function for the onclick property for the button on my
//html page
function myFunction(){
	//this function takes the input from the input box
	var input=document.getElementById("myInput");
	//then it assigns the input as the current input value
	var input=input.value;
	//finally it logs the input to the console
	console.log(input);
	// now i am trying to insert the input into mySecondH
	document.getElementById("mySecondH").textContent=input;
}

//i am creating a variable called my string which is an array of five strings
var myString= ["one", "two", "three", "four", "five"];
//now i want to log each string into the console one at a time
//first we use a for loop
var i;
for (i=0; i<myString.length; i++){
	//then we use the console log
	console.log(myString[i]);
}

//now we are going to create an object with 3 seperate properties and values
//then we are going to log each property to the console
var cat={
	name: "artemis", 
	color: "orange",
	age: 6
};
//to console log each property to the console i am going to 
//call the object to the console each property at a time
console.log(cat);
console.log(cat.name);
console.log(cat.color);
console.log(cat.age);

//now we are going to insert each property into each one of the
//headings i just created in html
document.getElementById("firstHeading").textContent=cat.name;
document.getElementById("secondHeading").textContent=cat.color;
document.getElementById("thirdHeading").textContent=cat.age;


//now i am going to create an array that contains 3 objects in it
//with three properties each
var myPets=[
	{
		name: "Oreo",
		color: "black",
		isKitten: true
	},
	{
		name: "Tuxedo",
		color: "black",
		isKitten:true,
	},
	{
		name: "Artemis",
		color: "Orange",
		isKitten: false
	}

];
//now we are going to log each property to the console 
//using a for loop
var i;
for (i=0; i<myPets.length; i++){
	console.log(myPets[i])
}

document.body.style.color="red";