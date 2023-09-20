document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('back-button');
    const paymentForm = document.getElementById('payment-form');

    // Replace with your Paystack public key
    const paystackPublicKey = 'your_paystack_public_key';

    // Handle "Back" button click
    backButton.addEventListener('click', function () {
        // Implement navigation logic to go back to the dashboard or previous page
        // For demonstration purposes, we'll redirect to the dashboard.
        window.location.href = 'dashboard.html';
    });

    // Handle payment form submission
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const invoiceNumber = document.getElementById('invoice-number').value;
        const amount = parseFloat(document.getElementById('amount').value) * 100; // Paystack requires the amount in kobo

        // Initialize Paystack inline payment
        const handler = PaystackPop.setup({
            key: paystackPublicKey,
            email: 'agency_email@example.com', // Replace with the agency's email
            amount: amount,
            currency: 'NGN', // Change to your currency code if not Nigerian Naira
            ref: invoiceNumber,
            callback: function (response) {
                // Implement logic to handle the payment response from Paystack.
                // You should contact your server to verify and record the payment.

                // For demonstration purposes, we'll log the response.
                console.log('Payment successful:', response);

                // Display a confirmation message to the user (customize as needed).
                alert('Payment was successful. Thank you!');
            },
            onClose: function () {
                // Handle payment cancellation or when the user closes the Paystack modal.
                console.log('Payment window closed.');
            }
        });

        // Open the Paystack payment modal
        handler.openIframe();
    });
});
