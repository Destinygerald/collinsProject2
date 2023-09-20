document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('back-button');
    const offersList = document.getElementById('offers-list');

    // Mock data for waste offers (replace with real data from your system)
    const wasteOffers = [
        { id: 1, title: 'Offer 1', description: 'Description for Offer 1' },
        { id: 2, title: 'Offer 2', description: 'Description for Offer 2' },
        { id: 3, title: 'Offer 3', description: 'Description for Offer 3' },
    ];

    // Function to populate the waste offers list
    function populateOffers() {
        offersList.innerHTML = '';
        wasteOffers.forEach(offer => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
                <button class="view-offer-button" data-offer-id="${offer.id}">View Offer</button>
            `;
            offersList.appendChild(li);
        });
    }

    // Populate the offers list when the page loads
    populateOffers();

    // Handle "Back" button click
    backButton.addEventListener('click', function () {
        // Implement navigation logic to go back to the dashboard or previous page
        // For demonstration purposes, we'll redirect to the dashboard.
        window.location.href = 'dashboard.html';
    });

    // Handle "View Offer" button click
    offersList.addEventListener('click', function (e) {
        if (e.target.classList.contains('view-offer-button')) {
            const offerId = e.target.getAttribute('data-offer-id');
            // Implement logic to view the details of the selected offer (e.g., open a modal).
            // You can add your functionality here based on your system's requirements.
            console.log(`View Offer ${offerId}`);
        }
    });
});
