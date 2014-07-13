$(function(){

	//add effect element for each.
	$(".mawbutton").each(function(){
		var effect = $(this).attr("data-effect");
		$(this).append('<div class="mawbutton-'+effect+'"></div>');
	});

	//bind click event
	$(".mawbutton").on('click', function(e) {
		e.preventDefault();	

		//fetch click position ,effect & w,h
		var posX = $(this).offset().left,
			posY = $(this).offset().top;
		var effect = $(this).attr("data-effect");
		var w = $(this).width(),
			h = $(this).height();
		console.log("Target:"+ ( e.pageX - posX ) + "," + ( e.pageY - posY ));
		//Anime Start
		$effectElem = $(this).find(".mawbutton-"+effect);

		$effectElem.addClass("mawbutton-stop");
		$effectElem.css("top",posY).css("left",posY).css("width",w).css("height",h);
		$effectElem.removeClass("mawbutton-stop");

		//Anime End
		setTimeout(function(){
			$effectElem.addClass("mawbutton-stop");
			$effectElem.attr("style","");
		},250);
	});
});