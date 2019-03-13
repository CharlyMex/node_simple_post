function success(){
  $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
		$("#success-alert").slideUp(500);
	   
   });
}

function rong_username(){
	$("#rong_username").fadeTo(2000, 500).slideUp(500, function(){
		$("#rong_username").slideUp(500);
	   
   });
}

function rong_password(){
	$("#rong_password").fadeTo(2000, 500).slideUp(500, function(){
		$("#rong_password").slideUp(500);
	   
   });
}



$(document).ready (function(){
	$("#success-alert").hide();
	$("#rong_username").hide();
	$("#rong_password").hide();
});



function login() {
	$("#simpleForm").submit(function (e) {

		e.preventDefault();
		var form = $(this)
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/login",
			data: form.serializeArray(),
			success: function (data) {
				if (data == "success") {
					success()
				} else if (data == "rong_username") {
					rong_username()
				} else if (data == "rong_password") {
					rong_password()
				}

			}
		});

	});
}




