document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("visited")) {
      // First visit: Show loader for 5 seconds
      setTimeout(() => {
          document.getElementById("loadingAnimation").style.display = "none";
          document.getElementById("homepage").style.display = "block";
          sessionStorage.setItem("visited", "true"); // Mark as visited
      }, 5000);
  } else {
      // Not first visit: Show content immediately
      document.getElementById("loadingAnimation").style.display = "none";
      document.getElementById("homepage").style.display = "block";
  }
});
