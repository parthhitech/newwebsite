document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".projectsGrid > *");
  const columns = getComputedStyle(document.querySelector(".projectsGrid")).gridTemplateColumns.split(" ").length;
  
  items.forEach((item, index) => {
    const column = (index % columns) + 1; // Get column position (1-based index)

    gsap.from(item, {
      opacity: 0,
      x: column <= columns / 2 ? -100 : 100, // Left side moves left, right side moves right
      duration: 3,
      ease: "power3.out",
      stagger: 1,
    });
  });
});