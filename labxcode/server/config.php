
<?php
$servername = "localhost";   
$username   = "root";        
$password   = "Vsnl@123";            
$dbname     = "labxcode"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>

