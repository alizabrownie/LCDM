<?php
include 'creds.php';
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT payer, total_paid, ind_contribution, description, category FROM transaction_table";
$result = $conn->query($sql);

// Initialize associative arrays to store debts for each payer
$Xdebt = 0;     // LDB Debt
$Ydebt = 0;     // AB Debt

$sql = "SELECT payer, total_paid, ind_contribution, description, category FROM transaction_table";
// Print the SQL query for debugging
echo "SQL Query: " . $sql . "<br>";

// Organize entries by payer and calculate debts
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $payer = $row["payer"];
        // Calculate the difference between total paid and individual contribution
        $difference = $row["total_paid"] - $row["ind_contribution"];
        // Add difference to the corresponding debt variable based on payer's name
        if ($payer == 'aBrown') {
            $Xdebt += $difference;
        } else {
            $Ydebt += $difference;
        }
    }
}

// Close the database connection
$conn->close();

// Calculate max and min debt
$maxDebt = max($Xdebt, $Ydebt);
$minDebt = min($Xdebt, $Ydebt);
// Calculate the difference between max and min debt
$differenceDebt = $maxDebt - $minDebt;

// Determine the payer for the max debt
$maxPayer = '';
if ($maxDebt == $Xdebt) {
    $maxPayer = 'aBrown';
} elseif ($maxDebt == $Ydebt) {
    $maxPayer = 'nBrown';
}

// Determine the debt message
$debtMessage = '';
if ($maxPayer == 'nBrown') {
    $debtMessage = 'AB owes this to LDB';
} elseif ($maxPayer == 'aBrown') {
    $debtMessage = 'LDB owes this to AB';
}

?>