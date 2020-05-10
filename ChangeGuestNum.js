// READ FROM FILE
var text = null;
var fs = require('fs');
var filename = './input.txt';

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	text = data;
});

// GETE USER INPUT
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Replace: ", function(_in) {
	rl.question("With: ", function(_out) {
		//rl.question("Enter Text: ", function(text) {
		console.log("\n\n\n");
		for (var ii = 0; ii < 7; ii++) {
			console.log(swapGuest(text, _in, _out));
			_out++;
		}
		console.log("\n\n\n");
		rl.close();
		//});
	});
});

rl.on("close", function() {
	console.log("\nBYE BYE !!!");
	process.exit(0);
});

function swapGuest(text, _in, _out) {
	var txt = text.charAt(0).toString();

	// Loop Through Text
	for (var ii = 1; ii < text.length; ii++) {
		if (text.charAt(ii-1) + text.charAt(ii) == _in) 
			txt = txt.concat(_out);
		else 
			txt = txt.concat(text.charAt(ii));
	}

	return(txt);
}
