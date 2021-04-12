$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) $(".navbar1").addClass("sticky");
		else $(".navbar1").removeClass("sticky");

		if (this.scrollY > 20) $(".logo-text").addClass("logo-b");
		else $(".logo-text").removeClass("logo-b");
	});

	$(".menu-toggler1").click(function () {
		$(this).toggleClass("active");
		$(".navbar-menu1").toggleClass("active");
	});
});
