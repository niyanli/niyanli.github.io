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

	hljs.initHighlightingOnLoad();
	$(document).ready(function() {
	  $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	  });
	});

	//点击“亲自试一下”按钮
	$('#btn_tryit').click(function(e){
		if(window.localStorage){
			localStorage.setItem("tryitHtml", $('#code_preview code').text());
			location.href = "tryit.html";
		}else{
			alert('对不起，你的浏览器不支持localStorage');
		}
	});


})();
