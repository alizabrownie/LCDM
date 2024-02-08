/*

    ____  ___    _   ____ __    ____  ______   ___    _   ______  ____  ____  __  _____________  ___ 
   / __ )/   |  / | / / //_/   / __ \/ ____/  /   |  / | / / __ \/ __ \/ __ \/  |/  / ____/ __ \/   |
  / __  / /| | /  |/ / ,<     / / / / /_     / /| | /  |/ / / / / /_/ / / / / /|_/ / __/ / / / / /| |
 / /_/ / ___ |/ /|  / /| |   / /_/ / __/    / ___ |/ /|  / /_/ / _, _/ /_/ / /  / / /___/ /_/ / ___ |
/_____/_/  |_/_/ |_/_/ |_|   \____/_/      /_/  |_/_/ |_/_____/_/ |_|\____/_/  /_/_____/_____/_/  |_|
                                                                                                     

*/

function BoA_submit() {
  console.log("button pressed");
  var payer = document.querySelector('#user_input select[name="payer"]').value;
    var totalPaid = "$" + document.querySelector('#user_input input[name="total_paid"]').value;
    var indContribution = "$" + document.querySelector('#user_input input[name="ind_contribution"]').value;
    var description = document.querySelector('#user_input input[name="description"]').value;
    var category = document.querySelector('#user_input select[name="category"]').value;

    // Create a new row element
    var newRow = document.createElement("tr");

    // Populate the new row with data from the form fields
    newRow.innerHTML = `
        <td>${payer}</td>
        <td>${totalPaid}</td>
        <td>${indContribution}</td>
        <td>${description}</td>
        <td>${category}</td>
    `;

    // Get the first row (excluding header) in the transaction table
    var firstRow = document.querySelector("#transaction_table tr:nth-child(2)");

    // Insert the new row before the first row
    var transactionTable = document.getElementById("transaction_table");
    transactionTable.insertBefore(newRow, firstRow);

    // Clear input fields in user_input table
    document.querySelector('#user_input select[name="payer"]').value = "";
    document.querySelector('#user_input input[name="total_paid"]').value = "";
    document.querySelector('#user_input input[name="ind_contribution"]').value = "";
    document.querySelector('#user_input input[name="description"]').value = "";
    document.querySelector('#user_input select[name="category"]').value = "";
}