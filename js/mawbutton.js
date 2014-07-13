$(function(){

	//add effect element for each.
	$(".mawbutton").each(function(){
		var effect = $(this).attr("data-effect");
		$(this).append('<div class="mawbutton-'+effect+'"></div>');
	});

	//bind click event
	$(".mawbutton").on('click', function(e) {
		e.preventDefault();	

		//fetch click position & effect	
		var posX = $(this).offset().left,
			posY = $(this).offset().top;
		var effect = $(this).attr("data-effect");
		console.log("Target:"+ ( e.pageX - posX ) + "," + ( e.pageY - posY ));

		//Anime Start
		$effectElem = $(this).find(".mawbutton-"+effect);

		$effectElem.addClass("stopAnime");
		$effectElem.css("top",posY).css("left",posY);
		$effectElem.removeClass("stopAnime");

		//Anime End
		setTimeout(function(){
			$effectElem.addClass("stopAnime");
			$effectElem.attr("style","");
		},250);
	});
});