$("#sort").click(function(){
	 var value = $("#code").val();
	 $(".red").hide();
	$(".gray").hide();
	$(".green").hide();
	$(".yellow").hide();
	$(".purple").hide();

	$("."+value).show();
});