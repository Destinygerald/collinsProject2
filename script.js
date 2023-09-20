async function validateRegistration() {
    // e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // You can add more validation rules here as needed
    console.log(username);
    await fetch("https://wastetrade.onrender.com/register", {
        method: "POST",
        body: JSON.stringify({
            name: username,
            email: email,
            password: password,
            userType: userType
        }),
        headers: {
            "Content-type" : "application/json"
        }
    })

    window.location.href = '/login.html'

    return true;
}

async function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add validation rules for the login form here
  
    await fetch("https://wastetrade.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({
            name: username,
            password: password
        }),
        headers: {
            "Content-type" : "application/json"
        }
    })

    window.location.href = '/dashboard.html'

    return true; // Return true for now; implement further validation as needed
}
// Simulated data for waste offers and messages
const wasteOffersData = [
    { title: "Recyclable Paper", description: "10 kg of recyclable paper available.", type: "student" },
    { title: "Plastic Bottles", description: "100 plastic bottles for recycling.", type: "agency" },
    // Add more data as needed
];

const messagesData = [
    { sender: "John", message: "Hi, I'm interested in your waste offer.", type: "student" },
    { sender: "Green Recycling", message: "We can pick up the plastic bottles tomorrow.", type: "agency" },
    // Add more data as needed
];

// Function to display waste offers based on user type (student or agency)
async function displayWasteOffers(userType) {
    const offersSection = document.getElementById("offers");
    const offersList = offersSection.querySelector("ul");
    offersList.innerHTML = "";
    let listArr = [];
    
    try {
        const listings = await fetch('https://wastetrade.onrender.com/listings')

        listings.forEach((offer) => {
            if (offer.type === userType) {
                const listItem = document.createElement("li");
                listItem.textContent = `${offer.wasteInfo}: ${offer.dateListed}`;
                listArr.push(listItem);
            }
        });

        for(let i = 0; i < listArr.length; i++){
            offersList.appendChild(listArr[i]);
        }
    } catch (err) {
        wasteOffersData.forEach((offer) => {
            if (offer.type === userType) {
                const listItem = document.createElement("li");
                listItem.textContent = `${offer.title}: ${offer.description}`;
                listArr.push(listItem);
            }
        });
        // console.log(...listArr)
        for(let i = 0; i < listArr.length; i++){
            offersList.appendChild(listArr[i]);
        }
        
    }
}

// Function to display messages or conversations based on user type (student or agency)
async function displayMessages(userType) {
    const messagesSection = document.getElementById("messages");
    const messagesList = messagesSection.querySelector("ul");
    messagesList.innerHTML = "";
    let listArr = [];

    try {

        const listings = await fetch('https://wastetrade.onrender.com/myListings')

        messagesData.forEach((message) => {
            // message.type === userType
            if (true) {
                const listItem = document.createElement("li");
                listItem.textContent = `${message.sender}: ${message.message}`;
                messagesList.appendChild(listItem);
            }
        });
    } catch (err) {
        messagesData.forEach((message) => {
            // message.type === userType
            if (true) {
                const listItem = document.createElement("li");
                listItem.textContent = `${message.sender}: ${message.message}`;
                messagesList.appendChild(listItem);
            }
        });
    }

}

// Replace [User Type] with 'student' or 'agency' based on the user type
const userType = "student"; // Change this to the actual user type

// Display waste offers and messages based on user type
displayWasteOffers(userType);
displayMessages(userType);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recyclingForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect form data
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const wasteType = document.getElementById("wasteType").value;
        const quantity = document.getElementById("quantity").value;
        const location = document.getElementById("location").value;
        const collectionMethod = document.querySelector('input[name="collectionMethod"]:checked').value;
        const collectionDateTime = document.getElementById("collectionDateTime").value;
        const description = document.getElementById("description").value;
        const terms = document.getElementById("terms").checked;

        // You can now send this data to your server or process it as needed
        // For this example, let's just log the data to the console
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Phone Number:", phone);
        console.log("Type of Waste:", wasteType);
        console.log("Quantity:", quantity);
        console.log("Location:", location);
        console.log("Preferred Collection Method:", collectionMethod);
        console.log("Preferred Collection Date and Time:", collectionDateTime);
        console.log("Description of the Waste:", description);
        console.log("Agreed to Terms and Conditions:", terms);

        // You can also include code here to send the data to your server via AJAX or perform other actions.
    });
});
