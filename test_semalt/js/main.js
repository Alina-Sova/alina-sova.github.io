jQuery(document).ready(function(){
	var room = $('.room');
	var frame = $('.frame');
	var speed = 20;
	var globalID;
	var mouseX = 50,
		mouseY = 50;
	var xp = 50,
		yp = 500;

	room.mouseenter(function(e) {
		moveIt();
	});

	// Set up mouseX and mouseY to be center of element
	frame.mousemove(function(e) {
		mouseX = 100 * (e.pageX - frame.offset().left) / frame.width();
		mouseY = 100 * (e.pageY - frame.offset().top) / frame.height();
	});

	function moveIt() {
		xp += (mouseX - xp) / speed;
		yp += (mouseY - yp) / speed;
		room.css("perspective-origin", (100 - xp) + "%" + (100 - yp) + "%");
		globalID = requestAnimationFrame(moveIt);
	}
});