(function($){

	$.fn.mawbutton = function (options) {
		var settings = $.extend({
			effect : "ripple",
			scale : 3,
			speed : 300		// ms
		}, options);

		return this.each(function() {
			var $this = $(this);
			$this.addClass('mawbutton')
			.append('<div class="mawbutton-'+settings.effect+'"></div>')
			.on('click', function(e) {		//bind click event
				e.preventDefault();

				// Fetch click position and size
				var posX = $this.offset().left,
					posY = $this.offset().top;
				var w = $this.width(),
					h = $this.height();
				var targetX= e.pageX - posX;
				var targetY= e.pageY - posY;
				var ratio = settings.scale / 2;

				//Animate Start
				$effectElem = $this.find(".mawbutton-"+settings.effect);
				$effectElem.addClass("mawbutton-stop")
							.css({
								"top" : targetY,
								"left" : targetX,
								"width" : h*settings.scale,
								"height" : h*settings.scale,
								"margin-left" : -h * ratio,
								"margin-top" : -h * ratio,
								"transition-duration" : settings.speed+"ms",
								"-webkit-transition-duration" : settings.speed+"ms",
								"-moz-transition-duration" : settings.speed+"ms",
								"-o-transition-duration" : settings.speed+"ms"
							});
				$effectElem.removeClass("mawbutton-stop");

				//Animate End
				setTimeout(function(){
					$effectElem.addClass("mawbutton-stop").attr("style","");
				}, settings.speed);
			});
		});
	}
}(jQuery));
