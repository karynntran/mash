var names = [1,2,3,4,5];

var spouse = [];
var marriageAge = [];
var honeymoon = [];
var numberOfKids = [];

function grabValues(categoryID, array){
	var numArray = [1,2,3,4,5];
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
	    console.log("clicked");

	    var luckyNumber = 5;

	    grabValues("spouse", spouse);
	    var spouseAnswer = eliminationLoop(spouse,5);
	    document.getElementById('spouseAnswer').innerHTML = spouseAnswer;

	    grabValues("marriageAge", marriageAge);
	    var answer = eliminationLoop(marriageAge,5);
	    document.getElementById('marriageAgeAnswer').innerHTML = answer;

	})
});