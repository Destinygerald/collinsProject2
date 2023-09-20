document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('back-button');
    const recordsList = document.getElementById('records-list');

    // Mock data for payment records (replace with real data from your system)
    const paymentRecords = [
        { id: 1, invoiceNumber: 'INV123', amount: 500.00, date: '2023-09-01' },
        { id: 2, invoiceNumber: 'INV124', amount: 750.50, date: '2023-09-03' },
        { id: 3, invoiceNumber: 'INV125', amount: 320.25, date: '2023-09-05' },
    ];

    // Function to populate the payment records list
    function populateRecords() {
        recordsList.innerHTML = '';
        paymentRecords.forEach(record => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Invoice Number:</strong> ${record.invoiceNumber}<br>
                <strong>Amount:</strong> $${record.amount.toFixed(2)}<br>
                <strong>Date:</strong> ${record.date}<br><br>
            `;
            recordsList.appendChild(li);
        });
    }

    // Populate the payment records list when the page loads
    populateRecords();

    // Handle "Back" button click
    backButton.addEventListener('click', function () {
        // Implement navigation logic to go back to the dashboard or previous page
        // For demonstration purposes, we'll redirect to the dashboard.
        window.location.href = 'dashboard.html';
    });
});
