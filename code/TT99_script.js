// JavaScript Document
var newwindow;
function popupwindow(url,w,h)
{
	newwindow=window.open(url,'name','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,'+'width='+ w +',height=' + h);
	if (window.focus) {newwindow.focus()}
}
