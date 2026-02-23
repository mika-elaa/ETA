const form = document.querySelector("#phoneForm");
const phoneInput = document.querySelector("#Phone-number");

form.addEventListener('submit', function(event) {
    // Prevent the default form submission (which refreshes the page)
    event.preventDefault();

    // Check if the input matches our [0-9]{8} pattern
    if (phoneInput.checkValidity()) {
        window.location.href = 'icons.html';
    } else {
        alert("Please enter a valid 8-digit phone number.");
    }
});
