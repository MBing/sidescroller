// This is the game's main JavaScript file

// Declare global variables
var canvas,
    ctx,
    game;

$(document).ready(function() {
	
	// Define variables
	canvas = $('#canvas'),
	ctx = canvas[0].getContext('2d'),
	game = new SideScroller(canvas);
	
	canvas.keydown(function(event) {
		
		event.preventDefault();
		var key = event.keyCode();
		
		// ...
	});
});
