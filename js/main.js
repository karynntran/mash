// var names = [1,2,3,4,5];

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
		console.log(array);
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




document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('playMashButton').addEventListener('click', function(e){
	    e.preventDefault();

	    grabValues("spouse", spouse);
	    var spouseAnswer = eliminationLoop(spouse,5);
	    document.getElementById('spouseAnswer').innerHTML = spouseAnswer;

	    grabValues("marriageAge", marriageAge);
	    var marriageAgeAnswer = eliminationLoop(marriageAge,5);
	    document.getElementById('marriageAgeAnswer').innerHTML = marriageAgeAnswer;

	    grabValues("honeymoon", honeymoon);
	    var honeymoonAnswer = eliminationLoop(honeymoon,5);
	    document.getElementById('honeymoonAnswer').innerHTML = honeymoonAnswer;

	    grabValues("numberOfKids", numberOfKids);
	    var numberOfKidsAnswer = eliminationLoop(numberOfKids,5);
	    document.getElementById('numberOfKidsAnswer').innerHTML = numberOfKidsAnswer;

	})
});