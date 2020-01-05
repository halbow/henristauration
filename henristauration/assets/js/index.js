$(document).ready(function () {
	$('.block1').on('click', function (e) {
		switch ($(e.currentTarget).attr('id')) {
			case "breakfast":
				if (e.pageX < ($(window).width() / 3)) {
					window.open("menu.html#breakfast", "_self");
				}
				else if (e.pageX < (($(window).width() * 2) / 3)) {
					window.open("menu.html#wdiner", "_self");
				}
				else {
					window.open("menu.html#bread", "_self");
				}
				break;
			case "diner":
				if (e.pageX < ($(window).width() / 3)) {
					window.open("menu.html#diner", "_self");
				}
				else if (e.pageX < (($(window).width() * 2) / 3)) {
					window.open("menu.html#porchetta", "_self");
				} else {
					window.open("menu.html#bbq", "_self");
				}
				break;
			case "menu":
				window.open("menu.html#menu", "_self");
				break;
			default:
				break;
		}

	})
});