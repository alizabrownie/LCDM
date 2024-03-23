<?php

// This fle writes the userinput into the sql table

include 'creds.php';
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $payer = $_POST['payer'];
    $totalPaid = $_POST['total_paid'];
    $indContribution = $_POST['ind_contribution'];
    $description = $_POST['description'];
    $category = $_POST['category'];

    // Insert data into database
    $sql = "INSERT INTO transaction_table (payer, total_paid, ind_contribution, description, category)
            VALUES ('$payer', '$totalPaid', '$indContribution', '$description', '$category')";
    if ($conn->query($sql) === TRUE) {
        echo "Thank you for using Bank of Andromeda today. Use this <a href='http://boa.lcdm.dx.am/'>link</a> here to return to the BoA homepage.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

?>