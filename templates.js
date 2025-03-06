
function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString();
}
// Call the function when the page is fully loaded
document.addEventListener("DOMContentLoaded", updateLastModified);