
function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString();
}
// Call the function when the page is fully loaded
document.addEventListener("DOMContentLoaded", updateLastModified);
// JavaScript to toggle the navigation menu and change the hamburger icon to 'X' when clicked
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    const hamburger = document.getElementById("menu-toggle");

    // Toggle the 'show' class for the nav and 'active' class for the hamburger
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
});
