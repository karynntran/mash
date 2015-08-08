var names = ["ben1", "ben2", "ben3", "ben4", "ben5"];
var luckyNumber = 4;
var eliminateThis = luckyNumber -1;


//grab indexOf and everything after it
//unshift everything to the front of the array
//remove the first element
//go through the function again


var eliminateNames = function(array, luckyNumber){

	if (array.length > 0){
		var choiceAfter = array.splice(eliminateThis);
		console.log(choiceAfter, "spliced");
		Array.prototype.unshift.apply(array,choiceAfter);
		console.log(array, "bring array to front");
		array.shift();
		console.log(array, "new array");
		return eliminateNames(array,luckyNumber);
	} else {
		return array[0];
	};
}




// var countdown = function(value) {
//     if (value > 0) {
//         console.log(value);
//         return countdown(value - 1);
//     } else {
//         return value;
//     }
// };
// countdown(10);

document.addEventListener("DOMContentLoaded", function() {
	console.log("working");
	// countdown(10);
	// eliminateNames(names,luckyNumber);
});