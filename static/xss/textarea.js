function htmlEncode (str) {
	var html = "";
	var node = document.createElement('textarea');
	if (node) {
		node.innerText = str;
		html =  node.innerHTML;
		node = null;
	}
	return html;
}

alert(htmlEncode('<script>alert(0)</script>'))


