function submitMood(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const mood = document.getElementById("mood").value;
    window.location.href = `recommendation.html?mood=${mood}`; // Redirect with mood as a URL parameter
}