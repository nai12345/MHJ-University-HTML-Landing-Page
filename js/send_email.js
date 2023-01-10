function sendEmail() {
	Email.send({
	    Host : "smtp.elasticemail.com",
	    Username : "moazzemhjesan@gmail.com",
	    Password : "EC49624E83676D9B384B80B8C5A08800B081",
	    To : 'moazzemh53@gmail.com',
	    From : document.getElementById("email").value,
	    Subject : document.getElementById("subject").value,
	    Body : "Name: " + document.getElementById("name").value
    			+ "<br> Email: " + document.getElementById("email").value
    			+ "<br> Subject: " + document.getElementById("subject").value
    			+ "<br> message: " + document.getElementById("message").value
	}).then(
	  message => alert("Your message is sent Successfully!")
	);
}
