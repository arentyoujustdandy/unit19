// JS test

console.log ("The index.js file is working correctly");

// Back to top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
const navToggle = document.querySelector ('.nav-toggle');
const navLinks = document.querySelectorAll;('nav__link')
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
jQuery.fn.dwFadingLinks = function(settings) {
	settings = jQuery.extend({
		color: '#ff8c00',
		duration: 500
	}, settings);
	return this.each(function() {
		var original = $(this).css('color');
		$(this).mouseover(function() { $(this).animate({ color: settings.color },settings.duration); });
		$(this).mouseout(function() { $(this).animate({ color: original },settings.duration); });
	});
};

/* usage */
$(document).ready(function() {
	$('.fade').dwFadingLinks({
		color: '#008000',
		duration: 700
	});
});
/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
	e.preventDefault();
	newLocation = this.href;
	$('body').fadeOut('slow', newpage);
	});
	function newpage() {
	window.location = newLocation;
	}
	/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
	e.preventDefault();
	newLocation = this.href;
	$('body').fadeOut('slow', newpage);
	});
	function newpage() {
	window.location = newLocation;
	}
	/*! Reloads page on every visit */
function Reload() {
	try {
	var headElement = document.getElementsByTagName("head")[0];
	if (headElement && headElement.innerHTML)
	headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
	}
	catch (e) {}
	}