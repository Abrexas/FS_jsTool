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

rl.question("Replace: ", function(_in) {
	rl.question("With: ", function(_out) {
		rl.question("Enter Text: ", function(_text) {
		console.log("\n\n\n");
		//for (var ii = 0; ii < 7; ii++) {
			console.log(swapGuest(_text, _in, _out));
			//_out++;
		//}
		console.log("\n\n\n");
		rl.close();
		});
	});
});

rl.on("close", function() {
	console.log("\nBYE BYE !!!");
	process.exit(0);
});

function swapGuest(text_, in_, out_) {
	var txt = text_.charAt(0).toString();

	// Loop Through Text
	for (var ii = 1; ii < text_.length; ii++) {
		if (text_.charAt(ii) == in_) 
			txt = txt.concat(out_);
		else 
			txt = txt.concat(text_.charAt(ii));
	}

	return(txt);
}
