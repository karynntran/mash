// var names = [1,2,3,4,5];
var diceArray = [1,2,3,4,5,6,7,8,9,10];
var randomNumber;

var spouse = [];
var marriageAge = [];
var honeymoon = [];
var numberOfKids = [];

function insertAnswers(string,array,luckyNumber){
	grabValues(string, array);
	var answer = eliminationLoop(array,luckyNumber);
	document.getElementById(string + 'Answer').innerHTML = answer;
}

function grabValues(categoryID, array){
	var numArray = [1,2,3,4];
	for (var i=0; i < numArray.length; i++){
		var option = document.getElementById("" + categoryID + numArray[i]).value;
		array.push(option);
	};
}

var eliminationLoop = function(array, number){
	var eliminateThis = number -1;
	if (array.length > 1) {
		if (array.length >= number){
			var choiceAfter = array.splice(eliminateThis);
			Array.prototype.unshift.apply(array,choiceAfter);
			array.shift();
			return eliminationLoop(array,number);
		} else {
			var modNumber = number%array.length-1;
			var choiceAfter = array.splice(modNumber);
			Array.prototype.unshift.apply(array,choiceAfter);
			array.shift();
			return eliminationLoop(array,number);
		}
	} else {
		return array[0];
	}
}

function getAnswers(luckyNumber){
    var categories = [
    	"spouse",
    	"marriageAge",
    	"honeymoon",
    	"numberOfKids"
    ];

    for (var i=0; i < categories.length; i++){
    	console.log(categories[i] + "");
    	console.log(categories[i]);

    	var string = categories[i] + "";
    	var array = eval(categories[i]);

	    grabValues(string, array);
	    console.log(array);
	    var answer = eliminationLoop(array,5);
	    document.getElementById(string + 'Answer').innerHTML = answer;
    }



    // grabValues("marriageAge", marriageAge);
    // var marriageAgeAnswer = eliminationLoop(marriageAge,5);
    // document.getElementById('marriageAgeAnswer').innerHTML = marriageAgeAnswer;

    // grabValues("honeymoon", honeymoon);
    // var honeymoonAnswer = eliminationLoop(honeymoon,5);
    // document.getElementById('honeymoonAnswer').innerHTML = honeymoonAnswer;

    // grabValues("numberOfKids", numberOfKids);
    // var numberOfKidsAnswer = eliminationLoop(numberOfKids,5);
    // document.getElementById('numberOfKidsAnswer').innerHTML = numberOfKidsAnswer;
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('playMashButton').addEventListener('click', function(e){
	    e.preventDefault();
	    getAnswers(randomNumber);
	})
	document.getElementById('randomNumberButton').addEventListener('click', function(e){
	    e.preventDefault();
	    var randomNumber = diceArray[Math.floor(Math.random() * diceArray.length)];
	})
});