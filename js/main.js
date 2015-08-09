var names = [1,2,3,4,5];
var luckyNumber = 10;
var eliminateThis = luckyNumber -1;

var spouse = [];

function grabValues(categoryID, array){
	var numArray = [1,2,3,4,5];
	for (var i=0; i < numArray.length; i++){
		var option = document.getElementById("" + categoryID + numArray[i]).value;
		array.push(option);
		console.log(array);
	};
}

var eliminationLoop = function(array, number){
	
	if (array.length > 1) {
		console.log(array);
		if (array.length >= number){
			var choiceAfter = array.splice(eliminateThis);
			Array.prototype.unshift.apply(array,choiceAfter);
			array.shift();
			return eliminationLoop(array,luckyNumber);
		} else {
			var modNumber = number%array.length-1;
			// console.log(array[modNumber]);
			var choiceAfter = array.splice(modNumber);
			Array.prototype.unshift.apply(array,choiceAfter);
			array.shift();
			// console.log(array);
			return eliminationLoop(array,luckyNumber);
		}
	} else {
		return array[0];
	}
}


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('spouseButton').addEventListener('click', function(e){
	    e.preventDefault();
	    console.log("clicked");
	    grabValues("spouse", spouse);
	    var answer = eliminationLoop(spouse,5);
	    document.getElementById('spouseAnswer').innerHTML = answer;
	})
});