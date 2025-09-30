<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');


include 'config.php'; // Include your database configuration file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from frontend
    $data = json_decode(file_get_contents("php://input"), true);

    $name    = $conn->real_escape_string($data['name']);
    $email   = $conn->real_escape_string($data['email']);
    $subject = $conn->real_escape_string($data['subject']);
    $message = $conn->real_escape_string($data['message']);

    $sql = "INSERT INTO users (name, email, subject, message) 
            VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Data saved successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
}
?>