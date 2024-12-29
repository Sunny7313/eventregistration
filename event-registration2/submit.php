<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load PHPMailer

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $rollno = $_POST['rollno'];
    $college = $_POST['college'];
    $event = $_POST['event'];
    $utr = $_POST['utr'];
    $paymentScreenshot = $_FILES['paymentScreenshot'];

    // Coordinator details
    $coordinatorName = "John Doe";
    $coordinatorEmail = "coordinator@example.com";
    $coordinatorPhone = "9876543210";

    // Save payment screenshot to server
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($paymentScreenshot["name"]);
    if (!move_uploaded_file($paymentScreenshot["tmp_name"], $targetFile)) {
        die("Error uploading file.");
    }

    // Save data to database (this part assumes a working DB connection)
    // Example: INSERT INTO registrations (name, email, phone, rollno, college, event, utr, payment_screenshot) VALUES (...);

    // Prepare email invoice
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'sanyasi.naidu.336@gmail.com'; // Replace with your SMTP username
        $mail->Password = ''; // Replace with your SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('no-reply@example.com', 'Event Registration');
        $mail->addAddress($email, $name);

        // Attachments
        $mail->addAttachment($targetFile, 'Payment Screenshot');

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Registration Invoice for $event";
        $mail->Body = "<h1>Thank you for registering!</h1>
                        <p>Dear $name,</p>
                        <p>We have received your registration for the event: <strong>$event</strong>.</p>
                        <p>Details:</p>
                        <ul>
                            <li><strong>Name:</strong> $name</li>
                            <li><strong>Email:</strong> $email</li>
                            <li><strong>Phone:</strong> $phone</li>
                            <li><strong>Roll Number:</strong> $rollno</li>
                            <li><strong>College:</strong> $college</li>
                            <li><strong>UTR ID:</strong> $utr</li>
                        </ul>
                        <p><strong>Event Coordinator:</strong></p>
                        <ul>
                            <li><strong>Name:</strong> $coordinatorName</li>
                            <li><strong>Email:</strong> $coordinatorEmail</li>
                            <li><strong>Phone:</strong> $coordinatorPhone</li>
                        </ul>
                        <p>For any queries, please contact the event coordinator.</p>
                        <p>Best regards,<br>Event Team</p>";

        $mail->send();
        echo "Registration successful! An invoice has been sent to your email.";
    } catch (Exception $e) {
        echo "Registration successful, but email could not be sent. Mailer Error: {$mail->ErrorInfo}";
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
 */?>
