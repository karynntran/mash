var names = [1,2,3,4,5];
var luckyNumber = 10;
var eliminateThis = luckyNumber -1;


//grab indexOf and everything after it
//unshift everything to the front of the array
//remove the first element
//go through the function again

// var eliminationLoop = function(array, number){
	
// 	if (array.length > 1) {
// 		var modIndex = number%array.length-1;
// 		array.splice(modNumber,1)
// 		return eliminationLoop(array,luckyNumber);
// 	} else {

// 	} 

// }

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
		return array;
	}
}


document.addEventListener("DOMContentLoaded", function() {
	console.log("working");
	// eliminateNames(names,luckyNumber);
});