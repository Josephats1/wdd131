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
