<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['mail'];
	$message = $_POST['message'];
	
	$email_from = 'b17114@students.iitmandi.ac.in';

	$email_subject = "New Form Submission";

	$email_body = "User Name: $name.\n".
					"User_Email: $visitor_email.\n".
					"User_Message: $message.\n";

	$to = "aman99.er@gmail.com";

	$headers = "From: $email_from \r \n";

	$headers = "Reply-To: $visitor_email\r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: index.html");

?>
