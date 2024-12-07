let language = 'english'; // Default language

function toggleLanguage() {
    const elements = document.querySelectorAll('.translate'); // Elements with translations

    // Toggle language
    language = language === 'english' ? 'odia' : 'english';
    document.getElementById('translateButton').innerText =
        language === 'english' ? 'Translate to Odia' : 'Translate to English';

    // Update text for each element
    elements.forEach((element) => {
        const translation = element.dataset[language];
        if (translation) {
            element.innerText = translation;
        }
    });
}

function callNumber() {
    alert('This feature is not yet implemented. Please contact us at your@email.com');
}

// Google Maps Integration
const apiKey = 'YOUR_API_KEY';
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
script.defer = true;
document.head.appendChild(script);

function initMap() {
    const latitude = 20.3456; // Replace with your latitude
    const longitude = 86.0123; // Replace with your longitude

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: latitude, lng: longitude },
    });

    new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
    });
}
