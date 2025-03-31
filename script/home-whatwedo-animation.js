document.querySelectorAll('.detail1-1, .detail1-2, .detail2-1, .detail2-2, .detail3-1, .detail3-2, .detail4-1, .detail4-2, .detail5-1, .detail5-2')
.forEach(element => {
    element.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents event from bubbling to document

        let parentGrid = document.querySelector('.whatdetail');

        // Get the corresponding detail element
        let detailToToggle = document.querySelector(`.${this.classList[0].replace('-1', '-3').replace('-2', '-3')}`);

        // If the clicked detail is already open, close it
        if (detailToToggle.classList.contains('active')) {
            detailToToggle.classList.remove('active');
            parentGrid.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr"; // Reset grid
            return; // Exit function early
        }

        // Reset all details and grid before opening new one
        document.querySelectorAll('.detail1-3, .detail2-3, .detail3-3, .detail4-3, .detail5-3')
            .forEach(detail => detail.classList.remove('active'));

        parentGrid.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr"; // Reset grid

        // Show the corresponding detail
        detailToToggle.classList.add('active');

        // Update grid row size
        let rowIndex = detailToToggle.classList[0].match(/\d+/)[0]; // Get the number (1-5)
        let gridTemplate = ["1fr", "1fr", "1fr", "1fr", "1fr"];
        gridTemplate[rowIndex - 1] = "3fr"; // Make the active one larger
        parentGrid.style.gridTemplateRows = gridTemplate.join(" ");
    });
});

// Hide details when clicking anywhere else (including on `.detailX-3`)
document.addEventListener('click', function () {
    document.querySelectorAll('.detail1-3, .detail2-3, .detail3-3, .detail4-3, .detail5-3')
        .forEach(detail => detail.classList.remove('active'));

    document.querySelector('.whatdetail').style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr"; // Reset grid
});
