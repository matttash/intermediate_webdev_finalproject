// script.js

// Calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // SI formula: (P * R * T) / 100
    return (principal * rate * time) / 100;
}

// Calculate total payable amount
const calculateTotalPayableAmount = (principal, interestAmount) => {
    // ✅ Fix: add principal + interest
    return principal + interestAmount;
}

// Main function called by HTML button
function calculate() {
    // Get input values and convert to numbers
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    // Validate input
    if (p <= 0 || r < 0 || t <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate interest
    let interest = calculateSimpleInterest(p, r, t);

    // Calculate total amount
    let totalAmount = calculateTotalPayableAmount(p, interest);

    // Display results
    document.getElementById("result").innerHTML =
        `<p>Simple Interest: ${interest.toFixed(2)}</p>
         <p>Total Payable Amount: ${totalAmount.toFixed(2)}</p>`;
}