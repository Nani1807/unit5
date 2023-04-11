var myModule = {
	changeParagraphs: function() {
		var paragraphs = document.getElementsByClassName('PARAGRAPH');
		for (var i = 0; i < paragraphs.length; i++) {
			paragraphs[i].innerHTML = 'New text';
		}
	}
};

window.onload = function() {
	myModule.changeParagraphs();
};
