<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Database connection
    $host = 'localhost';
    $db = 'event_registration';
    $user = 'root';
    $pass = '';

    try {
        $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $rollno = $_POST['rollno'];
        $college = $_POST['college'];
        $event = $_POST['event'];
        $utr_id = $_POST['utr'];
        $originalFileName = $_FILES['paymentScreenshot']['name'];
        
        // Handle payment screenshot upload
        $target_dir = "uploads/";
        $fileExtension = pathinfo($originalFileName, PATHINFO_EXTENSION);
        $uniqueFileName = pathinfo($originalFileName, PATHINFO_FILENAME) . '_' . time() . '.' . $fileExtension;
        $target_file = $target_dir . $uniqueFileName;

        if (!move_uploaded_file($_FILES['paymentScreenshot']['tmp_name'], $target_file)) {
            throw new Exception("Failed to upload file.");
        }
        // Insert data into the database
        $stmt = $conn->prepare("INSERT INTO registrations (name, email, phone, rollno, college_name, event_name, utr_id, payment_screenshot) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        if (sendMail($email, $name, $utr_id, $event)) {
            $stmt->execute([$name, $email, $phone, $rollno, $college, $event, $utr_id, $uniqueFileName]);

            echo "<script>alert('Registration successful, and email sent!');window.location='index.html'</script>";
        } else {
            echo "Registration unsuccessful, email failed to send.";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

function sendMail($recipientEmail, $recipientName, $utrID, $eventName)
{
    require("PHPMailer/Exception.php");
    require("PHPMailer/SMTP.php");
    require("PHPMailer/PHPMailer.php");

    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF; // Set to SMTP::DEBUG_SERVER for debugging
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sanyasi.naidu.336@gmail.com'; // Replace with your SMTP username
        $mail->Password = 'ydrd nkhh qprm yjuu';    // Replace with your app password (not your Gmail password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465; // Use 465 for SMTPS
        // Recipients
        $mail->setFrom('sanyasi.naidu/336@gmail.com', 'Event Team');
        $mail->addAddress($recipientEmail, $recipientName);
        // Content
        $mail->isHTML(true);
        $mail->Subject = "Registration Confirmation for " . $eventName;
        // Email Body
        $mail->Body = '
            <h1>Thank you for registering, ' . htmlspecialchars($recipientName) . '!</h1>
            <p>We have received your registration for the <strong>' . htmlspecialchars($eventName) . '</strong> event.</p>
            <p>Your UTR ID is: <strong>' . htmlspecialchars($utrID) . '</strong></p>
            <p>For any queries, please contact the event coordinator:</p>
            <ul>
                <li><strong>Name:</strong> John Doe</li>
                <li><strong>Email:</strong> coordinator@example.com</li>
                <li><strong>Phone:</strong> 1234567890</li>
            </ul>
            <p>Looking forward to seeing you at the event!</p>
        ';

        // Send email
        $mail->send();
        return true; 
    } catch (Exception $e) {
        error_log("Error sending email: " . $mail->ErrorInfo);
        return false; // Failed to send email
    }
}



/* <?php $servername = "localhost";
$username = "root";
$password = ""; 
$database = "event_registration";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $rollno = $_POST['rollno'];
    $college = $_POST['college'];
    $event = $_POST['event'];
    $utr = $_POST['utr'];
    $targetDir = "uploads/";
    $fileName = basename($_FILES["paymentScreenshot"]["name"]);
    $targetFilePath = $targetDir . $fileName;

    if (move_uploaded_file($_FILES["paymentScreenshot"]["tmp_name"], $targetFilePath)) {
        $sql = "INSERT INTO registrations (name, email, phone, rollno, college_name, event_name, utr_id, payment_screenshot) 
                VALUES ('$name', '$email', '$phone', '$rollno', '$college', '$event', '$utr', '$fileName')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>window.location='index.html';</script>Registration successful and saved in the database.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "File upload failed.";
    }
} else {
    echo "Invalid request.";
}

$conn->close();
 */
