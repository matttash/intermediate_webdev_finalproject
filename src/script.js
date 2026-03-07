// src/script.js

// Import CSS so Webpack can bundle it
require('./style.css');

// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Select DOM elements
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

// Add event listener to button
calculateBtn.addEventListener('click', () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        resultDiv.textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const interest = calculateSimpleInterest(principal, rate, time);
    resultDiv.textContent = `Simple Interest: $${interest.toFixed(2)}`;
});