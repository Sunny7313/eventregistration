<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

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
        $utr_id = $_POST['utr'];
        $team_name = $_POST['teamName'];
        $num_members = $_POST['numMembers'];
        $college_name = $_POST['college'];
        $event_name = $_POST['event'];

        // Handle payment screenshot upload
        $target_dir = "uploads/";
        $random_number = rand(100, 999);
        $file_extension = pathinfo($_FILES['paymentScreenshot']['name'], PATHINFO_EXTENSION);
        $filename = $team_name . '_' . $random_number . '.' . $file_extension;
        $target_file = $target_dir . $filename;

        if (!move_uploaded_file($_FILES['paymentScreenshot']['tmp_name'], $target_file)) {
            throw new Exception("Failed to upload file.");
        }

        // Member details
        $members = [];
        for ($i = 1; $i <= $num_members; $i++) {
            $members[] = [
                'name' => $_POST["member{$i}_name"] ?? null,
                'degree' => $_POST["member{$i}_degree"] ?? null,
                'department' => $_POST["member{$i}_department"] ?? null,
                'year' => $_POST["member{$i}_year"] ?? null,
                'email' => $_POST["member{$i}_email"] ?? null,
                'phone' => $_POST["member{$i}_phone"] ?? null,
            ];
        }

        // Insert data into the database
        $stmt = $conn->prepare("INSERT INTO TeamDetails (utr_id, team_name, num_members, college_name, event_name, screenshot, member1_name, member1_degree, member1_department, member1_year, member1_email, member1_phone_number, member2_name, member2_degree, member2_department, member2_year, member2_email, member2_phone_number, member3_name, member3_degree, member3_department, member3_year, member3_email, member3_phone_number, member4_name, member4_degree, member4_department, member4_year, member4_email, member4_phone_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bindParam(1, $utr_id);
        $stmt->bindParam(2, $team_name);
        $stmt->bindParam(3, $num_members);
        $stmt->bindParam(4, $college_name);
        $stmt->bindParam(5, $event_name);
        $stmt->bindParam(6, $filename);
        for ($i = 0; $i < 4; $i++) {
            $stmt->bindParam(7 + $i * 6, $members[$i]['name']);
            $stmt->bindParam(8 + $i * 6, $members[$i]['degree']);
            $stmt->bindParam(9 + $i * 6, $members[$i]['department']);
            $stmt->bindParam(10 + $i * 6, $members[$i]['year']);
            $stmt->bindParam(11 + $i * 6, $members[$i]['email']);
            $stmt->bindParam(12 + $i * 6, $members[$i]['phone']);
        }

        $stmt->execute();

        // Send confirmation emails
        foreach ($members as $member) {
            if ($member['email']) {
                sendMail($member['email'], $member['name'], $utr_id, $event_name);
            }
        }

        echo "<script>alert('Registration successful!');window.location='register.html'</script>";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn = null;
}

function sendMail($recipientEmail, $recipientName, $utrID, $eventName)
{
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
        $mail->setFrom('sanyasi.naidu.336@gmail.com', 'Event Team');
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
?>
