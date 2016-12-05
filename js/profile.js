function editProfile(){
	for(var i = 0; i < $(".editable").length;i++){
		$(".editable:eq(" + i + ")").html("<input value='" + $(".editable:eq(" + i + ")").text() + "'>");
	}
	$("#edit").hide();
	$("#save").show();
	$("#pro-pic").show();
}
function saveProfile(){
	for(var i = 0; i < $(".editable").length;i++){
		$(".editable:eq(" + i + ")").html($(".editable:eq(" + i + ") input").val());
	}
	$("#save").hide();
	$("#pro-pic").hide();
	$("#edit").show();
}