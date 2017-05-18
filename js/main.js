// Index/All Pages // 

// Make nav bar menu dropdown - CSS
// Change text color on hover - CSS


// Menu //

// scrolling to end of page loads next menu section (taken from stack overflow)
var end = $("#BottomThing").offset().top; 
var viewEnd = $(window).scrollTop() + $(window).height(); 
var distance = end - viewEnd; if (distance < 300) // do load


// Catering //

// Form that sends an email report // - send it to a hidden google form - talk to moises

// Contact page sends email report


//Fullpage.JS - library from internet, makes everything into a scrolling page?

$(document).ready(function() {
	$('#fullpage').fullpage();
});

$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(anchorLink, index){
		var loadedSection = $(this);

