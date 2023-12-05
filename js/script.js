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
  "Mayday": "https://embed.music.apple.com/us/artist/%E4%BA%94%E6%9C%88%E5%A4%A9/369211611?l=zh-Hans-CN",
  "Yoga Lin": "https://embed.music.apple.com/us/artist/%E6%9E%97%E5%AE%A5%E5%98%89/436847316?l=zh-Hans-CN",
  "Eason Chan": "https://music.apple.com/us/artist/%E9%99%88%E5%A5%95%E8%BF%85/137938148?l=zh-Hans-CN",
  "Tanya Chua": "https://music.apple.com/us/artist/%E8%94%A1%E5%81%A5%E9%9B%85/387313548?l=zh-Hans-CN",
  "Coldplay": "https://music.apple.com/us/artist/coldplay/471744?l=zh-Hans-CN",
  "Imagine Dragons": "https://music.apple.com/us/artist/imagine-dragons/358714030?l=zh-Hans-CN",
  "Yanzi Sun": "https://music.apple.com/us/artist/%E5%AD%99%E7%87%95%E5%A7%BF/83405200?l=zh-Hans-CN",
  "Taylor Swift": "https://music.apple.com/us/artist/taylor-swift/159260351?l=zh-Hans-CN",
  "Justin Bieber": "https://music.apple.com/us/artist/justin-bieber/320569549?l=zh-Hans-CN",
  "Fish Leong": "https://music.apple.com/us/artist/%E6%A2%81%E9%9D%99%E8%8C%B9/531134701?l=zh-Hans-CN",
  "Ed Sheeran": "https://music.apple.com/us/artist/ed-sheeran/183313439?l=zh-Hans-CN"
};

function toggleAlbums(artistName) {
  const playlistId = artistName.replace(/\s+/g, '') + 'Albums';
  const playlistDiv = document.getElementById(playlistId);
  const iconId = artistName.replace(/\s+/g, '') + 'Icon';
  const icon = document.getElementById(iconId);
  
  if (playlistDiv.style.display === "none") {
    playlistDiv.style.display = "block";
    playlistDiv.innerHTML = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${artistEmbedUrls[artistName]}"></iframe>`;
    icon.classList.remove('fa-chevron-right');
    icon.classList.add('fa-chevron-down');
  } else {
    playlistDiv.style.display = "none";
    playlistDiv.innerHTML = '';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-right');
  }
}

function toggleAlbums(artistName) {
  const playlistId = artistName.replace(/\s+/g, '') + 'Albums';
  const iconId = artistName.replace(/\s+/g, '') + 'Icon';
  const playlistDiv = document.getElementById(playlistId);
  const icon = document.getElementById(iconId);

  if (!playlistDiv.style.display || playlistDiv.style.display === "none") {
    playlistDiv.style.display = "block";
    playlistDiv.innerHTML = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${artistEmbedUrls[artistName]}"></iframe>`;
    icon.className = 'fas fa-chevron-down'; // Change to down arrow
  } else {
    playlistDiv.style.display = "none";
    playlistDiv.innerHTML = '';
    icon.className = 'fas fa-chevron-right'; // Change to right arrow
  }
}


document.addEventListener('keydown', function(e) {
  // Target elements with class 'grid-container'
  const grids = document.querySelectorAll('.grid-container');
  grids.forEach((grid) => {
    if (grid === document.activeElement) { // Check if the grid is focused
      if (e.key === 'ArrowRight') {
        grid.scrollLeft += 100;
      } else if (e.key === 'ArrowLeft') {
        grid.scrollLeft -= 100;
      }
    }
  });
});

// Assuming toggleAlbums function is already defined and works correctly
document.querySelectorAll('.playlist-grid-item').forEach(item => {
  // Set tabindex to make the items focusable
  item.setAttribute('tabindex', '0');

  // Add a keydown event listener to each item
  item.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      // Retrieve the artist name from the item
      const artistName = this.querySelector('h3').textContent.trim();
      toggleAlbums(artistName);
    }
  });
});

function updateClock() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = dateString + ' ' + timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize clock on page load


// Initial button visibility check
document.addEventListener('DOMContentLoaded', updateScrollButtons);
  


