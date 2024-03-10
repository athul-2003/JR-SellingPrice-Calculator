function calcMargin() {
    // Get the cost input from the user
    var cost = document.getElementById('cost').value;
    var krs = document.getElementById('krs').value;
    var trans = document.getElementById('transport').value;
    var hamali = document.getElementById('hamali').value;
    var bInterest = document.getElementById('bankInterest').value;
    var dCost = document.getElementById('deliveryCost').value;
    var offExpns = document.getElementById('officeExpense').value;
    var misce = document.getElementById('miscellaneous').value || 0;

    // Calculate the total amount
    var totalAmount = calculateTotalAmount(cost,krs,trans,hamali,bInterest,dCost,offExpns,misce); // You need to define this function

    var sellingPrice = calculateMargin(totalAmount); //selling price fetch

    // Display the total amount in the hidden div
    var totalAmountDiv = document.getElementById('totalAmount');
    var totalAmountValue = document.getElementById('totalAmountValue');
    totalAmountDiv.style.display = 'block';
    totalAmountValue.innerHTML = totalAmount;

    // Display the selling price in the hidden div
    var marginDiv = document.getElementById('margin');
    var sellingPriceValue = document.getElementById('sellingPriceValue');
    marginDiv.style.display = 'block';
    sellingPriceValue.innerHTML = sellingPrice;

// Get the margin input element and the element that displays the margin
var marginInput = document.getElementById('marginVal');
var marginValueDisplay = document.getElementById('marginValue');

// Update the displayed margin value when the input changes
marginInput.addEventListener('input', function() {
    marginValueDisplay.textContent = this.value;

    // Recalculate the price
    var totalAmount = calculateTotalAmount(cost,krs,trans,hamali,bInterest,dCost,offExpns,misce);
    var price = calculateMargin(totalAmount, parseFloat(this.value)); // Convert the margin input value to a number

    // Update the price display
    document.getElementById('sellingPriceValue').innerHTML = price.toFixed(2);
});

// Trigger the input event to calculate the initial selling price
marginInput.dispatchEvent(new Event('input'));
}


//function to calculate selling price
function calculateMargin(totalAmount, marginPercentage) {
    // Calculate the selling price based on the total amount and the margin percentage
    var sellingPrice = totalAmount + (totalAmount * marginPercentage / 100);
    return sellingPrice;
}


//function to calculate total amount
function calculateTotalAmount(cost, krs, trans, hamali, bInterest, dCost, offExpns, misce) {
    // Convert all inputs to numbers and sum them up
    var totalAmount = parseFloat(cost) + parseFloat(krs) + parseFloat(trans) + parseFloat(hamali) + parseFloat(bInterest) + parseFloat(dCost) + parseFloat(offExpns) + parseFloat(misce);

    return totalAmount;
}

function clearValues(){
    document.getElementById('cost').value = "";
    document.getElementById('krs').value = "";
    document.getElementById('transport').value = "";
    document.getElementById('hamali').value = "";
    document.getElementById('bankInterest').value = "";
    document.getElementById('deliveryCost').value = "";
    document.getElementById('officeExpense').value = "";
    document.getElementById('miscellaneous').value = "";
    document.getElementById('totalAmountValue').innerHTML = "";
    document.getElementById('sellingPriceValue').innerHTML = "";
    document.getElementById('marginVal').value = "25";
    document.getElementById('totalAmount').style.display = 'none';
    document.getElementById('margin').style.display = 'none';
    document.getElementById('marginValue').innerHTML = "25";
}