<?php

require("./sendgrid-php/sendgrid-php.php");

$from = new SendGrid\Email($_POST['name'],$_POST["email"]);
$subject = $_POST["subject"];
$to = new SendGrid\Email("Nagacharan", "raju11297@gmail.com");
$content = new SendGrid\Content("text/plain", $_POST["message"]);
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$sg = new \SendGrid('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');

$response = $sg->client->mail()->send()->post($mail);
if($response->statusCode()==202)
{   
    echo "your message successfully sent<br>";
    echo $response->headers();
    echo $response->body();
    
}
else{
    echo "<br>Oops! something happened... don't worry we try to fix it asap<br>";
    echo $response->headers();
    echo $response->body();
    
}
