var matchValue = location.href.match(/^http\:\/\/local/i);
if (matchValue) {
	window.logLevel = "debug";

	document.write('<scr' + 'ipt src="private/src/main/js/require_config.js?t=' + new Date().getTime() + '"></sc' + 'ript>');
	document.write('<scr' + 'ipt data-main="private/src/main/js/main.js" src="js/requirejs/require.js"></sc' + 'ript>');
}else{
	document.write('<scr' + 'ipt data-main="js/main.min.js" src="js/requirejs/require.js"></sc' + 'ript>');
}
