function updateScrollButtons() {
    const grid = document.getElementById('artistGrid');
    const maxScrollLeft = grid.scrollWidth - grid.clientWidth;

    // Show the left button only if scrolled right from the start
    const leftButton = document.querySelector('.scroll-button.left');
    leftButton.style.display = grid.scrollLeft > 0 ? 'flex' : 'none';

    // Show the right button only if there is more content to scroll to the right
    const rightButton = document.querySelector('.scroll-button.right');
    const tolerance = 5; // A small tolerance in pixels
    rightButton.style.display = (maxScrollLeft - grid.scrollLeft) > tolerance ? 'flex' : 'none';
}

  
function scrollGrid(direction) {
    const grid = document.getElementById('artistGrid');
    const gridItemWidth = grid.querySelector('.grid-item').offsetWidth;
    const gridItemMargin = parseInt(window.getComputedStyle(grid.querySelector('.grid-item')).marginLeft);
    const scrollAmount = (gridItemWidth + gridItemMargin * 2) * 4;
    
    if (direction === 'left') {
      grid.scrollLeft -= scrollAmount;
    } else {
      grid.scrollLeft += scrollAmount;
    }
    
    // Update the buttons after the scroll event
    setTimeout(updateScrollButtons, 200); // Set timeout to ensure scroll event completes
}
  
// Initial button visibility check
document.addEventListener('DOMContentLoaded', updateScrollButtons);
  


