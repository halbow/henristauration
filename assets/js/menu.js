$(document).ready(function () {
	(function () {
		hash = window.location.hash.split('#')[1];
		if (hash === undefined) {
			hash = "breakfast";
		}
		$('.nav li').each(function () {
			if (hash === this.id.slice(0, -1)) {
				$(this).addClass("selected");
			}
			else {
				$(this).removeClass("selected");
			}
		})

		$('.div-tabs > div').each(function () {
			if (hash === this.id) {
				$(this).css({ display: "block" });
			}
			else {
				$(this).css({ display: "none" });
			}
		});
	}());
});
