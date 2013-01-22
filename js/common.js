(function($){
	$(document).ready(function(){
		$(window).scroll(function(){
			var jaralax = new Jarallax();
			jaralax.addAnimation('.big_moon', [{progress:'0%', top:'30%'}, {progress:'100%', top:'-10%'}]);
			jaralax.addAnimation('.small_moon', [{progress:'0%', top:'30%'}, {progress:'100%', top:'10%'}]);
			
			jaralax.addAnimation('.para1', [{progress:'0%', top:'30%'}, {progress:'70%', top:'10%'}]);
		});
	});
})(jQuery);