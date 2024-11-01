window.addEventListener("load", () => {
    const logoScreen = document.getElementById("logoScreen");
    const logoContainer = document.getElementById("logoContainer");
    const logo = document.querySelector(".logo");
    const mainScreen = document.getElementById("mainScreen");
  
    // Zoom in the logo to fill the screen
    setTimeout(() => {
      logoContainer.style.width = "100%";
      logoContainer.style.height = "100%";
      logo.style.transform = "scale(2)"; // Zoom into the logo
    }, 500);
  
    // Transition to main screen after the zoom effect
    setTimeout(() => {
      logoScreen.style.opacity = "0";
      setTimeout(() => {
        logoScreen.style.display = "none";
        mainScreen.style.display = "flex";
      }, 1000); // Matches the CSS transition duration
    }, 3000);
  });
  
  function goToNextPage() {
    window.location.href = "nextpage.html"; // Link to the next page
  }
  