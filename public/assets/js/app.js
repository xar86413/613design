$(document).ready(function () {
	$("#quote").on("submit", function (event) {
		console.log("Submitted.");
		event.preventDefault();
		var formData = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/php/quote.php",
			dataType: "json",
			data: formData,
			success: function (response) {
				$("#response")
					.html("Form was submitted!")
					.css("color", "red")
					.fadeIn("slow", function () {
						$(this).delay(2000).fadeOut("slow");
					});
			},
			error: function (xhr, status, error) {
				console.log(xhr);
				console.log("Error has occured.");
			},
		});
	});
});
