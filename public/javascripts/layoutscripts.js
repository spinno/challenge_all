$(document).ready(function(){
	var $window 	= $(window),
		$sidebar 	= $("#side-bar"),
		width 		= $window.width() - ($sidebar.width() + 30);

	$("#main-frame").width(width).css("left", $sidebar.width() + 20);
});