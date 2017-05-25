$(document).ready(function(){

// Index/All Pages // 

$('.enter_spanish').click(function() { 
        $(this).parent().fadeOut(500);
 });

$('.enter_english').click(function() { 
        $(this).parent().fadeOut(500);
 });

// Make nav bar menu dropdown - CSS
// Change text color on hover - CSS


// Menu //

// hide/show menu sections


// small plates

	$(".smallplates").click(expand);

	function expand(){
	event.preventDefault()
		$("#show-smallplates").slideDown();
	
	}
	
	$(".smallplates").click(collapse);

	function collapse(){
	event.preventDefault()
		$("#show-smallplates").slideUp();
		
	}

	// breakfast

	$(".breakfast").click(expand);

	function expand(){
	event.preventDefault()
		$("#show-breakfast").slideDown();
		
	}
	
	$(".breakfast").click(collapse);

	function collapse(){
	event.preventDefault()
		$("#show-breakfast").slideUp();
	
		
	}

	// tipicos

	$(".tipicos").click(expand);

	function expand(){
	event.preventDefault()
		$("#show-tipicos").slideDown();
		
	}
	
	$(".tipicos").click(collapse);

	function collapse(){
	event.preventDefault()
		$("#show-tipicos").slideUp();

	}
	

	// carne

	$(".carne").click(expand);

	function expand(){
	event.preventDefault()
		$("#show-carne").slideDown();
		
	}
	
	$(".carne").click(collapse);

	function collapse(){
	event.preventDefault()
		$("#show-carne").slideUp();

	}

	// drinks

	$(".drinks").click(expand);

	function expand(){
	event.preventDefault()
		$("#show-drinks").slideDown();
		
	}
	
	$(".drinks").click(collapse);

	function collapse(){
	event.preventDefault()
		$("#show-drinks").slideUp();

	}


// Catering //

// Form that sends an email report // - send it to a hidden google form - talk to moises

// Contact page sends email report

});