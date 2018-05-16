(function(){
	$('#hambBtn').click(function(){
		if($('#hambBtn').hasClass('is-closed')){
			$('#hambBtn').removeClass('is-closed');
			$('#hambBtn').addClass('is-open');
			$('#sidebar_wrapper').addClass('toggled');
		}else if($('#hambBtn').hasClass('is-open')){
			$('#hambBtn').removeClass('is-open');
			$('#hambBtn').addClass('is-closed');
			$('#sidebar_wrapper').removeClass('toggled');
		}			
	});
})();
