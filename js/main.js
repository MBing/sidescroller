// This is the game's main JavaScript file

// Globals
var gameLoop;

$(document).ready(function() {
	
	canvas = $('#canvas')[0];
	ctx = canvas.getContext('2d');
	
	function startGame() {
		
		// Creates an instance of class GameLoop
		var gameLoop = new GameLoop();
		gameLoop.start();
	}
	
	function stopGame() {
		
		// Stops the game loop e.g. for pause or exit
		gameLoop.stop();
	}
});
