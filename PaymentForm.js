
// Get the payment method radio buttons
const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');

// Get the payment details container
const paymentDetailsContainer = document.getElementById('paymentDetails');

// Add an event listener to each radio button
paymentMethodRadios.forEach((radio) => {
  radio.addEventListener('click', () => {
    // Get the selected payment method
    const selectedPaymentMethod = radio.value;

    // Update the payment details container
    switch (selectedPaymentMethod) {
      case 'creditCard':
        paymentDetailsContainer.innerHTML = `
          <h2>Credit Card Payment</h2>
          <p>Enter your credit card details:</p>
          <input type="text" placeholder="Card number">
          <input type="text" placeholder="Expiration date">
          <input type="text" placeholder="CVV">
          <button>Pay</button>
        `;
        break;
      case 'mpesa':
        paymentDetailsContainer.innerHTML = `
          <h2>M-Pesa Payment</h2>
          <p>Enter your M-Pesa details:</p>
          <input type="text" placeholder="Phone number">
          <input type="text" placeholder="M-Pesa PIN">
          <button>Pay</button>
        `;
        break;
      case 'bankTransfer':
        paymentDetailsContainer.innerHTML = `
          <h2>Bank Transfer Payment</h2>
          <p>Enter your bank transfer details:</p>
          <input type="text" placeholder="Account number">
          <input type="text" placeholder="Bank name">
          <button>Pay</button>
        `;
        break;
      default:
        alert('Please select a payment method');
    }
  });
});