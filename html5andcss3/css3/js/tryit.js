(function(){
	setTimeout(function(){
		if(window.localStorage){
			document.getElementById('code_input').innerText = localStorage.getItem('tryitHtml');
			setTimeout(function(){document.getElementById('submit').click();}, 200);
		}

		var editor = CodeMirror.fromTextArea(document.getElementById("code_input"), {
	        lineNumbers: true,
	        mode: "application/x-ejs",
	        indentUnit: 4,
	        indentWithTabs: true
	      });

		document.getElementById('submit').onclick = function(){
			editor.save();
			var textarea = document.getElementById('code_input');
			var view = document.getElementById('view').contentDocument;
			view.open();
			view.write(textarea.value);
			view.close();		
		};
	}, 500);
	
})();
