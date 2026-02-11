// send-contact.php

<?php
// send-contact.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/contact_errors.log');

// Include PHPMailer
require_once 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ========================================
// CONFIGURATION - UPDATE THESE VALUES
// ========================================
$config = [
    // Your Gmail/SMTP Settings
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_username' => 'sunspotengineering@gmail.com', 
    'smtp_password' => 'your-app-password-here', 
    'smtp_secure' => PHPMailer::ENCRYPTION_STARTTLS,
    
    // Email Settings
    'from_email' => 'sunspotengineering@gmail.com',
    'from_name' => 'Sunspot Contact Form',
    'to_email' => 'sunspotengineering@gmail.com', 
    'to_name' => 'Sunspot Team',
    
    // Debug mode (set to true for testing)
    'debug_mode' => false
];

// ========================================
// FUNCTIONS
// ========================================
function sendJsonResponse($success, $message, $data = null) {
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
    exit;
}

function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// ========================================
// VALIDATE REQUEST
// ========================================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(false, 'Invalid request method');
}

// Get POST data
$name = isset($_POST['name']) ? sanitizeInput($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitizeInput($_POST['email']) : '';
$message = isset($_POST['message']) ? sanitizeInput($_POST['message']) : '';

// Validate inputs
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Name is required and must be at least 2 characters';
}

if (empty($email) || !validateEmail($email)) {
    $errors[] = 'Valid email is required';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Message is required and must be at least 10 characters';
}

if (!empty($errors)) {
    sendJsonResponse(false, implode(', ', $errors));
}

// ========================================
// SEND EMAIL
// ========================================
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port = $config['smtp_port'];
    
    // Debug mode
    if ($config['debug_mode']) {
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {
            error_log("PHPMailer: $str");
        };
    }
    
    // Timeout settings
    $mail->Timeout = 30;
    
    // Recipients
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    $mail->addReplyTo($email, $name);
    
    // Content
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'New Contact Form Submission from ' . $name;
    
    // HTML Email Body
    $html_body = '<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                  padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #555; margin-bottom: 5px; font-size: 14px; }
        .value { padding: 15px; background: white; border-radius: 5px; 
                 border-left: 4px solid #667eea; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">New Contact Message</h2>
            <p style="margin: 10px 0 0 0;">Sunspot Renewable Engineering</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">FROM:</div>
                <div class="value">' . htmlspecialchars($name) . '</div>
            </div>
            <div class="field">
                <div class="label">EMAIL:</div>
                <div class="value"><a href="mailto:' . htmlspecialchars($email) . '" 
                    style="color: #667eea; text-decoration: none;">' . htmlspecialchars($email) . '</a></div>
            </div>
            <div class="field">
                <div class="label">MESSAGE:</div>
                <div class="value">' . nl2br(htmlspecialchars($message)) . '</div>
            </div>
            <div class="field">
                <div class="label">RECEIVED:</div>
                <div class="value">' . date('F j, Y \a\t g:i A') . '</div>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from your website contact form</p>
        </div>
    </div>
</body>
</html>';
    
    $mail->Body = $html_body;
    
    // Plain text alternative
    $plain_body = "New Contact Form Submission\n\n";
    $plain_body .= "From: $name\n";
    $plain_body .= "Email: $email\n\n";
    $plain_body .= "Message:\n$message\n\n";
    $plain_body .= "Received: " . date('F j, Y \a\t g:i A');
    
    $mail->AltBody = $plain_body;
    
    // Send email
    if ($mail->send()) {
        error_log("Contact form submitted successfully by: $email");
        sendJsonResponse(true, 'Thank you for contacting us! We will get back to you soon.');
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    error_log("Mailer Error: " . $mail->ErrorInfo);
    
    if ($config['debug_mode']) {
        sendJsonResponse(false, 'Error: ' . $mail->ErrorInfo);
    } else {
        sendJsonResponse(false, 'Unable to send message. Please try again later or email us directly at sunspotengineering@gmail.com');
    }
}
?>