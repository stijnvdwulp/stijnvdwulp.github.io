<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $input_field = $_POST["input_field"];

    // Do something with the data (e.g. send an email)
    mail("example@example.com", "Form Submission", $input_field);

    // Redirect the user to a thank-you page
    header("Location: thank-you.html");
    exit;
  }
?>
