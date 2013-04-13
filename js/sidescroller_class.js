// SideScroller object

/***************************
SideScroller arguments:
canvas - the canvas to draw on, can be any valid argument for the jQuery object
***************************/
function SideScroller(canvas) {

	var delayTime,
	    // Future animation for browsers that lack requestAnimationFrame
	    FPS = 60,
		// amount of time taken to draw last frame
		delayTime,
		// canvas to draw on
		canvas = $(canvas)[0],
		// canvas context
		ctx = canvas.getContext("2d"),
		// If the game is running
	    running,
	    // Atiles for map class
	    tiles = [],
		// Map class
		map,
		// Use to calculate position of elements so the game doesn't run faster on computers with faster framerate
	    previousFrame;
		
	// Animation fix instead of setInterval() for the lack of support of browsers.
	requestAnimationFrame = (function(){
		
		return  window.requestAnimationFrame       ||
        	window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
            	function(callback){
            		
            		window.setTimeout(callback, 1000/FPS - delayTime);
		};
	})();
	
	// Clears the canvas and makes place for a new frame
	function clear() {
		
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
	
	// Updates the position of the stuff or whatever its gonna do
	function update() {
		
	}
	
	// Renders the new scene
	function render() {
		
	}
	
	// Update the game each frame
	function GameLoop() {
		
		// Stop if not running
		if ( !running ) {
			return;
		}
		
		console.log("hi");
		var beforeTime = performance.now();
		
		clear();
		update();
		render();
		requestAnimationFrame(GameLoop);
		
		previousFrame = beforeTime;
		var afterTime = performance.now()
		delayTime = afterTime - beforeTime;
	}
	
	// Start the game
	this.start = function() {
		
		running = true;
		
		// Call to map class.
		map = new Map(tiles, canvas, 0);
		requestAnimationFrame(GameLoop);
	}
	
	// Stop the game
	this.stop = function() {
		running = false;
	}
	
	// Determine if the game is running
	this.isRunning = function() {
		return running;
	}
}