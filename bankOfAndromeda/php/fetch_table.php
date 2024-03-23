<?php
// this file fetches the sql table from server and displays it in html

            include 'creds.php';
            $conn = new mysqli($servername, $username, $password, $database);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Fetch all data from the transaction_history table
            $sql = "SELECT payer, total_paid, ind_contribution, description, category FROM transaction_table";
            $result = $conn->query($sql);

            // Generate HTML for the transaction table
            $tableHtml = '<tr>
                            <th>Payer</th>
                            <th>Total Paid</th>
                            <th>Individual Contribution</th>
                            <th>Description</th>
                            <th>Category</th>
                        </tr>';
            if ($result->num_rows > 0) {
                // Output data of each row
                while ($row = $result->fetch_assoc()) {
                    $tableHtml .= '<tr>';
                    $tableHtml .= '<td>' . $row["payer"] . '</td>';
                    $tableHtml .= '<td>' . $row["total_paid"] . '</td>';
                    $tableHtml .= '<td>' . $row["ind_contribution"] . '</td>';
                    $tableHtml .= '<td>' . $row["description"] . '</td>';
                    $tableHtml .= '<td>' . $row["category"] . '</td>';
                    $tableHtml .= '</tr>';
                }
            } else {
                $tableHtml .= '<tr><td colspan="5">No transactions found.</td></tr>';
            }

            // Close the database connection
            $conn->close();

            echo $tableHtml; // Output the HTML table content
            ?>