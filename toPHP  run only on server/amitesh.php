<?php

$_data = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname="NIDHI";
$conn = new mysqli($servername, $username, $password, $dbname);
$username=$_data["username"];
$pass=$_data["password"];
//echo json_encode($_data);
$sql="INSERT INTO `test` (`username`, `password`) VALUES ('$username', '$pass')";
//echo $sql;
echo $conn->query($sql);
?>