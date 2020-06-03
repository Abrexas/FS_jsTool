// READ FROM FILE
var div = null;
var fs = require('fs');
var filename = './div_FrameUp.txt';

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	div = data;
});

// GETE USER INPUT
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Text: ", function(_text) {
	rl.question("Subtext: ", function(_subt) {
			console.log("\n\n\n");

			console.log(buildDiv(_text, _subt));
			
			console.log("\n\n\n");
			rl.close();
	});
});

rl.on("close", function() {
	console.log("\nBYE BYE !!!");
	process.exit(0);
});

function buildDiv(_text, _subt) {
	div = div.replace("_TEXT_",   _text);
	div = div.replace("_SUBT_",   _subt);
	return div;
}
