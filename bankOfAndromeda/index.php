<!DOCTYPE html>

<!--

BANK OF ANDROMEDA HP

-->

<html>

<head>
    <title>Bank of Andromeda</title>
    <meta name="description" content="lcdm">
    <meta name="keywords" content="lcdm,decisions">
    <meta name="author" content="Aliza Brown">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="mainCss.css" />
</head>

<body>
    <div class="intro">
        <img src="logo.png" />
        <p>Welcome to the Bank of Andromeda (BoA).
            <br /><br />This bank is tied directly to the Andromeda Black Hole system located in the Andromeda galaxy.
            It is run by Daddy Zuck, Alozo and NB. <br />This bank is SUPER secure and can only be accessed within 1500.
            <br />Please contact Ryan Beaver for customer service. Calls may be delayed due to the wormhole being down.
    </div>

    <div class="BoA">
        <form action="php/table_transfer.php" method="post" >
        <table id="user_input">
            <tr class="input_row">
                <td>
                    <select name="payer">
                        <option value="aBrown" selected>A Brown xx5408</option>
                        <option value="nBrown">N Brown xx5792</option>
                        <option value="other">Other</option>
                    </select>
                </td>
                <td><input type="number" name="total_paid" placeholder="$0.00" class="numeric_field"></td>
                <td><input type="number" name="ind_contribution" placeholder="$0.00" class="numeric_field"></td>
                <td><input type="text" name="description" placeholder="Short Transaction Description"></td>
                <td><select name="category">
                        <option value="travel" selected>Travel</option>
                        <option value="food">Food</option>
                        <option value="activities">Activities</option>
                        <option value="gas">Gas</option>
                    </select></td>
            </tr>
            <tr id="additionalRow">
                <td colspan="5">
                    <script src="BoA_submit.js"></script>
                    <button id="button" type="submit">Submit</button>
                </td>
            </tr>
        </table>
        </form>

        <h2>Transaction History</h2>
        <table id="transaction_table">
            <?php include 'php/fetch_table.php' ?>
            <tr>
                <td>Acount</td>
                <td>Total Paid</td>
                <td>Individual Contribution</td>
                <td>Description</td>
                <td>Category</td>
            </tr>
        </table>
    </div>

</body>

</html>