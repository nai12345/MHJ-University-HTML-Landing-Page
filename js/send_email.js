function sendEmail() {
	Email.send({
		SecureToken : "8b1b280d-d101-4289-b398-cd805c8a41e2",
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