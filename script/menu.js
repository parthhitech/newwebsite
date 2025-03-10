const button = document.getElementById("menubutton");
const hiddenDiv = document.getElementById("menuphone");
const closeicon = document.getElementById("menuicon");


// Add a click event listener to the button
button.addEventListener("click", function () {
  // Toggle the visibility of the div
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block";
    closeicon.src="../files/closeicon.png"

    // button.textContent = "Hide Div"; // Change button text
  } else {
    hiddenDiv.style.display = "none";
    closeicon.src="../files/menuicon.png"
    // button.textContent = "Show Div"; // Change button text back
  }
  e.stopPropagation();
});
// document.addEventListener("click", function (e) {
//   if (!hiddenDiv.contains(e.target) && e.target !== button) {
//     hiddenDiv.style.display = "none"; // Hide the div if clicked outside
//   }
// }); 
//was for hiding menuphone when touched somewhere else but not working