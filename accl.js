// Link Fix
$(document).ready(function () {
    $('.grid-search-results > div').each(function () {
        // $('p', this).append('<a class="rdm">Read More</a>');
        var lnk = $('.item-logo', this).find('a').attr('href');
        $('a.btn.btn-primary', this).attr('href', lnk);
    });
});
	
// Get Site
var avtags = document.getElementsByTagName("META")['av-tags'].content;
	
// Template - Copy Me for Other Sites
if (avtags == "ticketquarter") {
       
}
	
// TQ
if (avtags == "ticketquarter") {
	// $( "#searchBox" ).hide();
	// document.getElementsByClassName(‘charge-label’)[0].firstElementChild.innerHTML = ‘Sold-out’;
}
	
// Beatles Story
if (avtags == "beatlesstory") {
	       
}
