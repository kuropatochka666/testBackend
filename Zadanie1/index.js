jQuery(document).ready(function () {
	jQuery(document).delegate(".check", "click", function Table() {
		var yearValue = $("input.year").val();

		jQuery(".year").val("");

		jQuery.ajax({
			url: "index.php",
			type: "POST",
			data: { year: yearValue },
			dataType: "json",
			success: function (result) {
				jQuery("#result").html(result);
			},
		});
	});
});
