<?php
	$name = $_POST['Name'];
	$visitor_email = $_POST['Email'];
	$message = $_POST['Message'];
	
	$email_from = 'iamanverma.github.io/pages/web';

	$email_subject = "New Form Submission";

	$email_body = "User Name: $name.\n".
					"User_Email: $visitor_email.\n".
					"User_Message: $message.\n";

	$to = "aman99.er@gmail.com";

	$headers = "From : $email_from \r \n";

	$headers = "Reply-To: $visitor_email\r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: index.html");

?>