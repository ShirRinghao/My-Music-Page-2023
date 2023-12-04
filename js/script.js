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

// Define a mapping of artist names to their respective Apple Music embed URLs
const artistEmbedUrls = {
  "Jay Chou": "https://embed.music.apple.com/us/artist/%E5%91%A8%E6%9D%B0%E4%BC%A6/300117743?l=zh-Hans-CN",
  "Mayday": "https://embed.music.apple.com/us/artist/mayday-link",
  // ... other artists
};

function toggleAlbums(artistName) {
  const playlistId = artistName.replace(/\s+/g, '') + 'Albums';
  const playlistDiv = document.getElementById(playlistId);

  if (playlistDiv.style.display === "none") {
    playlistDiv.style.display = "block";
    playlistDiv.innerHTML = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${artistEmbedUrls[artistName]}"></iframe>`;
  } else {
    playlistDiv.style.display = "none";
    playlistDiv.innerHTML = '';
  }
}




  
// Initial button visibility check
document.addEventListener('DOMContentLoaded', updateScrollButtons);
  


