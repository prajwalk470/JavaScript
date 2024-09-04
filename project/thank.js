function displayBookingDetails() {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    if (bookingDetails) {
        document.getElementById('booking-details').innerHTML = `
            <div><span class="booking-details-key">Name:</span> <span class="booking-details-value">${bookingDetails.name}</span></div>
            <div><span class="booking-details-key">Email:</span> <span class="booking-details-value">${bookingDetails.email}</span></div>
            <div><span class="booking-details-key">Phone: </span> <span class="booking-details-value"> +${bookingDetails.countryCode}-${bookingDetails.phoneNumber}</span></div>
            <div><span class="booking-details-key">Car Company:</span> <span class="booking-details-value">${bookingDetails.carCompany}</span></div>
            <div><span class="booking-details-key">Car Model:</span> <span class="booking-details-value">${bookingDetails.carModel}</span></div>
            <div><span class="booking-details-key">Fuel Type:</span> <span class="booking-details-value">${bookingDetails.fuelType}</span></div>
            <div><span class="booking-details-key">Service Date:</span> <span class="booking-details-value">${bookingDetails.serviceDate}</span></div>
            <div><span class="booking-details-key">Address:</span> <span class="booking-details-value">${bookingDetails.address}</span></div>
        `;
    }
}

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let countdownValue = 10;
    const countdownInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;
        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'home.html';
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    displayBookingDetails();
    startCountdown();
});