jQuery(document).ready(function () {
	jQuery(document).delegate(".add", "click", function Table() {
		var hipValue = $("input.hip").val();
		var smuValue = $("input.smu").val();

		jQuery(".prefix").val("");
		jQuery(".str").val("");

		jQuery.ajax({
			url: "index.php",
			type: "POST",
			data: { hip: hipValue, smu: smuValue },
			dataType: "json",
			success: function (result) {
				jQuery("#result").html(result);
			},
		});
	});
});
