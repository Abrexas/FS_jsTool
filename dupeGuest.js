/*
// READ FROM FILE
var text = null;
var fs = require('fs');
var filename = './input.txt';

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	text = data;
});
*/

// GETE USER INPUT
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter Text: ", function(_text) {
	console.log("\n\n\n");

	for (var ii = 2; ii <= 8; ii++) {
		console.log(swapGuest(_text, ii));
		console.log("\n\n");
	}
	
	rl.close();
});

rl.on("close", function() {
	console.log("\nBYE BYE !!!");
	process.exit(0);
});

function swapGuest(text_, num_) {
	var txt = text_.charAt(0).toString();

	// Loop Through Text
	for (var ii = 1; ii < text_.length; ii++) {
		if (text_.charAt(ii) === "1" && (text_.charAt(ii-1) === "G" || text_.charAt(ii-1) === "s")) 
			txt = txt.concat(num_);
		else 
			txt = txt.concat(text_.charAt(ii));
	}

	return(txt);
}
