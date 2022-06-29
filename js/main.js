
var a_href_tel = "tel:"+telephone_number;
var a_href_mailto = "mailto:"+email_address;
var year = new Date();
var logo_img = "/img/logo.png";
var background_img = "url('/img/background.png')";
var first_name_last_name = "Kayron J Macon";
var telephone_number = "(860) 478-2023";
var email_address = "Kayronmacon@gmail.com";



/* Mobile Hamburger Toggle */

function hamburgerToggle() {
	var x = document.getElementById("bln_mobile_menu");
	var b = document.getElementById("nav-icon1");
	if (x.style.display === "block") {
	  x.style.display = "none";
	  b.classList.remove("open");
	} else {
	  x.style.display = "block";
	  b.classList.add("open");
	}
  }

  /* Sets attr for the data-tooltips icons */

function changeTooltip() {
	document.getElementById('btn_user').setAttribute('data-tooltip', first_name_last_name);
	document.getElementById('btn_msg').setAttribute('data-tooltip', telephone_number);
	document.getElementById('btn_bell').setAttribute('data-tooltip', email_address);
  }
  function replace( hide, show ) {
	document.getElementById(hide).style.display="none";
	document.getElementById(show).style.display="block";
  }

/* Hamburger Icon */
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});


// When the user clicks on div, open the popup
function popupFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
  }