// Function to calculate Windchill
function calculateWindChill(temp, windSpeed) {
    // Formula for windchill in Celsius
    if (windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
    } else {
        return 'N/A'; // Windchill only applicable for higher wind speeds
    }
}

        document.getElementById("lastModified").textContent = document.lastModified;
   
// On window load, calculate windchill and update footer
window.onload = function() {
    const temp = 20; // Static temperature value in °C
    const windSpeed = 15; // Static wind speed value in km/h

    // Calculate windchill
    const windchill = calculateWindChill(temp, windSpeed);

    // Display the windchill in the weather section
    document.getElementById('windchill').textContent = `${windchill} °C`;

    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
};
