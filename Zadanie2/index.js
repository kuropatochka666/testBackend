jQuery(document).ready(function () {
	jQuery(document).delegate(".add", "click", function Table() {
		var prefixValue = $("input.prefix").val();
		var strValue = $("input.str").val();

		jQuery(".prefix").val("");
		jQuery(".str").val("");

		jQuery.ajax({
			url: "index.php",
			type: "POST",
			data: { prefix: prefixValue, str: strValue },
			dataType: "json",
			success: function (result) {
				jQuery("#result").html(result);
			},
		});
	});
});
