(function($){

	$.fn.mawbutton = function (options) {
		var settings = $.extend({
			effect : "ripple",
			scale : 3,
			speed : 300,		// ms
			transEnd : function(){}
		}, options);

		return this.each(function() {
			var $this = $(this);
			var event_sup = ('ontouchstart' in window )?'touchstart':'click';

			$this.addClass('mawbutton')
			.on( event_sup, function(e) {		//bind click event
				e.preventDefault();
				$this.append('<div class="mawbutton-'+settings.effect+'" ></div>');
				// Fetch click position and size
				var posX = $this.offset().left,
					posY = $this.offset().top;

				var w = $this.width(),
					h = $this.height();
				var targetX= e.pageX - posX;
				var targetY= e.pageY - posY;

				//detect d
				if( !targetX || !targetY){
					 targetX = e.originalEvent.touches[0].pageX;
					 targetY = e.originalEvent.touches[0].pageY;
				}

				var ratio = settings.scale / 2;    							

				//Animate Start
				$effectElem = $this.children(':last');

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
					$effectElem.addClass("mawbutton-"+settings.effect+"-out").css({
						"transition-duration" : settings.speed+"ms",
						"-webkit-transition-duration" : settings.speed+"ms",
						"-moz-transition-duration" : settings.speed+"ms",
						"-o-transition-duration" : settings.speed+"ms"
					});
					setTimeout(function(){
						$this.find(".mawbutton-"+settings.effect).first().remove();
						settings.transEnd.call(this);
					},settings.speed);
				}, settings.speed);
			});
		});
	}
}(jQuery));
