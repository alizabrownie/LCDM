<?php
include 'creds.php';
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT * FROM transaction_table";
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["payer"] . "</td>";
        echo "<td>$" . $row["total_paid"] . "</td>";
        echo "<td>$" . $row["ind_contribution"] . "</td>";
        echo "<td>" . $row["description"] . "</td>";
        echo "<td>" . $row["category"] . "</td>";
        // Add a delete button for each row
        echo "<td><form id='deleteForm" . $row["id"] . "' method='post' action='php/delete.php'><input type='hidden' name='row_id' value='" . $row["id"] . "'><input type='submit' value='Delete' onclick='return confirmDelete(" . $row["id"] . ")'></form></td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='6'>No rows found</td></tr>";
}

// Check if row_id is set and not empty
if(isset($_POST['row_id']) && !empty($_POST['row_id'])) {
    // Get the row_id value
    $row_id = $_POST['row_id'];

    // SQL query to delete row from the table based on the row_id
    $sql = "DELETE FROM transaction_table WHERE id = $row_id";

    // Execute the SQL query
    if ($conn->query($sql) === TRUE) {
        echo "Row deleted successfully";
    } else {
        echo "Error deleting row: " . $conn->error;
    }

    // Close the database connection
    $conn->close();
} 
?>