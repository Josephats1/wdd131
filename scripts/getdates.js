function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString();
}
// Call the function when the page is fully loaded
document.addEventListener("DOMContentLoaded", updateLastModified);
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle");
    const nav = document.querySelector(".nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});
   // Display last modified date
   document.getElementById("last-modified").textContent = document.lastModified;

   // Toggle the mobile navigation menu visibility
   document.getElementById('menu-toggle').addEventListener('click', function() {
       const navMenu = document.getElementById('nav-menu');
       navMenu.classList.toggle('show');
   });