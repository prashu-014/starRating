<?php

include 'C:\xampp\htdocs\server\config\requestHeader.php';
include 'C:\xampp\htdocs\server\DB\dbConnection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode([
            "status" => "error",
            "message" => "Username or Password cannot be empty"
        ]);
        exit(); 
    }

    $sql = "SELECT * FROM register WHERE username = ? LIMIT 1";
    $stmt = $connection->prepare($sql); 
    $stmt->bind_param("s", $username); 
    $stmt->execute(); 
    $result = $stmt->get_result();


    if ($user = $result->fetch_assoc()) {
        echo json_encode([
            "status" => "success",
            "message" => "User found",
            "user" => $user
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "User not found"
        ]);
    }

}
?>
