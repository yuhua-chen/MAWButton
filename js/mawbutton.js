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
		var targetX= e.pageX - posX;
		var targetY= e.pageY - posY;
		//Animate Start
		$effectElem = $(this).find(".mawbutton-"+effect);
		$effectElem.addClass("mawbutton-stop");
		$effectElem.css("top", targetY  ).css("left", targetX).css("width",h * 3 ).css("height",h * 3).css("margin-left", -h * 3 / 2 ).css("margin-top", -h * 3 / 2);
		$effectElem.removeClass("mawbutton-stop");

		//Animate End
		setTimeout(function(){
			$effectElem.addClass("mawbutton-stop");
			$effectElem.attr("style","");
		},300);
	});
});