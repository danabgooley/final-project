$(document).ready(function(){

// Index/All Pages // 


$(".enter_spanish").click(fadeEnglish);
        
	function fadeEnglish(){
		event.preventDefault();
		$("#english").fadeOut(500);
		$("#splashpage").fadeOut(500);
		$("#spanish").fadeIn(500);
		} 



$(".enter_english").click(fadeSpanish);
        
	function fadeSpanish(){
		event.preventDefault();
		$("#spanish").fadeOut(500);
		$("#splashpage").fadeOut(500);
		$("#english").fadeIn(500); 
		}



// Menu //

// hide/show menu sections


// small plates

	$(".smallplates").click(function(){
		if ( $(this).hasClass("expanded") ) {
			$(".smallplates").removeClass("expanded");
			$("#show-smallplates").slideUp();
		}
		else {
			$(".smallplates").addClass("expanded");
			$("#show-smallplates").slideDown();
		}

	});


	// breakfast

		$(".breakfast").click(function(){
		if ( $(this).hasClass("expanded") ) {
			$(".breakfast").removeClass("expanded");
			$("#show-breakfast").slideUp();
		}
		else {
			$(".breakfast").addClass("expanded");
			$("#show-breakfast").slideDown();
		}

	});
		
	

	// tipicos

		$(".tipicos").click(function(){
		if ( $(this).hasClass("expanded") ) {
			$(".tipicos").removeClass("expanded");
			$("#show-tipicos").slideUp();
		}
		else {
			$(".tipicos").addClass("expanded");
			$("#show-tipicos").slideDown();
		}

	});
	

	// carne

		$(".carne").click(function(){
		if ( $(this).hasClass("expanded") ) {
			$(".carne").removeClass("expanded");
			$("#show-carne").slideUp();
		}
		else {
			$(".carne").addClass("expanded");
			$("#show-carne").slideDown();
		}

	});

	// drinks

		$(".drinks").click(function(){
		if ( $(this).hasClass("expanded") ) {
			$(".drinks").removeClass("expanded");
			$("#show-drinks").slideUp();
		}
		else {
			$(".drinks").addClass("expanded");
			$("#show-drinks").slideDown();
		}

	});

// Catering //

// Form that sends an email report // - send it to a hidden google form - talk to moises

// Contact page sends email report

});