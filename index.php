<!DOCTYPE html>
<html>
<body>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/main2.css">
</head>

<div>Ваша заявка была успешно обработана! Мы перезвоним в удобное Вам время.</div>

<?php 



header('Content-Type: text/html; charset=UTF-8');
require_once('PHPMailer/PHPMailerAutoload.php');


  
$iwant = $_POST["iwant"];
$name = $_POST["name"];
$date = $_POST["date"];
$number= $_POST["number"];
$region = $_POST["region"];
$phone = $_POST["phone"];
$call = $_POST["call"];
$content = 'услуга: '. $iwant .' имя: '. $name .' предпологаемая дата проведения '. $date ." количество участников: ". $number ." регион: ". $region ." телефон: " .$phone ."удобно принять звонок: ". $call;

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail ->isSMTP();
$mail ->SMTPAuth = true;
$mail ->SMTPSecure = 'ssl';
$mail -> Host = 'smtp.gmail.com';
$mail -> Port = '465';
$mail -> Username = 'thisisjustatestphp@gmail.com';
$mail -> Password = 'Visha0505vishax';
$mail -> SetFrom('thisisjustatestphp@gmail.com');
$mail -> Subject = "Вам пришла заявка!";
$mail -> Body = $content;
$mail -> AddAddress('vkomarovska98@gmail.com');

$mail -> Send();


?>

</body>
</html>