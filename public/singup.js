
function user_created(){
	$("#user_created").fadeTo(2000, 500).slideUp(500, function(){
		$("#user_created").slideUp(500);
	   
   });
}

$(document).ready (function(){
	$("#user_created").hide();
});


function singup() {
	$("#simpleForm").submit(function (e) {
		e.preventDefault();
		var form = $(this)
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/singup",
			data: form.serializeArray(),
			success: function (data) {
                if(data== "user_created"){
                    user_created()
                }
			}
		});

	});
}
