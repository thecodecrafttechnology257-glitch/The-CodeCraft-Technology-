
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html") // ध्यान रखें फाइल का नाम सही हो
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
        console.error("Header load karne mein error aaya:", error);
    });
});
