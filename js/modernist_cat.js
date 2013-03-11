// JavaScript Document

var makePinit = function(imgID, imgSrc){
	/*<a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.modernistcat.com%2Findex.html&media=http%3A%2F%2Fwww.modernistcat.com%2Fimages%2Fhomepage%2F1A.jpg&description=Modernist%20Cat%20-%20designed%20for%20you%2C%20made%20for%20pets" class="pin-it-button" count-layout="horizontal">*/
	var pathname = window.location.pathname;
		
	return '<a href="http://pinterest.com/pin/create/button/?url=' + pathname + '&media=http%3A%2F%2Fwww.modernistcat.com%2F' + imgSrc + 
	'&description=Modernist%20Cat%20-%20designed%20for%20you%2C%20made%20for%20pets"><img border="0" src="http://assets.pinterest.com/images/PinExt.png"' + 
	'" class="pinitButton" title="Pin It" /></a>';
}

var makePopup = function(imgID){
	var id = imgID.split('-');
	var imgSrc = $('#'+ imgID).attr('src');
	$('#main').append('<div id="overlay-' + id[1] + '" class="overlayContainer"><div class="closeBox closeOverlay"></div>' + makePinit(imgID, imgSrc) + '<img class="overlayImage" src="' + imgSrc + '"/></div>')
}



$(document).ready(function() {
	
	/*
	$(".imgOverlay").click(function(){
		var imgID = $(this).attr('id');
		makePopup(imgID);
		$('overlayContainer').draggable();
	});
		
	$(document).on("click", ".closeOverlay", function(){
		console.log('clicked');
		$(this).parent('.overlayContainer').remove();
		
	});
	*/
	
});