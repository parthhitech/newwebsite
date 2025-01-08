const button = document.getElementById("menubutton");
const hiddenDiv = document.getElementById("menuphone");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Toggle the visibility of the div
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block"; // Show the div
    // button.textContent = "Hide Div"; // Change button text
  } else {
    hiddenDiv.style.display = "none"; // Hide the div
    // button.textContent = "Show Div"; // Change button text back
  }
});