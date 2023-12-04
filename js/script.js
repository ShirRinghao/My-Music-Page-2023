// Example list of music tracks with YouTube links and initial count
const musicTracks = [
    { title: "Won't Cry", youtubeLink: "https://www.youtube.com/embed/HK7SPnGSxLM"}
    // Add more songs here
];

function renderMusicList() {
  const musicList = document.getElementById('musicList');
  musicList.innerHTML = ''; // Clear the list

  // Assuming the first track is the most played
  const track = musicTracks[0];

  const listItem = document.createElement('div');
  listItem.innerHTML = `
      <p>${track.title}</p>
      <iframe width="560" height="315" src="${track.youtubeLink}" frameborder="0" allowfullscreen></iframe>
      <br>
      <button onclick="window.open('${track.youtubeLink.replace('/embed/', '/watch?v=')}')">Watch on YouTube</button>
  `;
  musicList.appendChild(listItem);
}

// Initial render
renderMusicList();


function incrementPlayCount(index) {
    const track = musicTracks[index];
    track.count++;
    renderMusicList(); // Re-render the list to update counts and order
}

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
  

  

  
// Initial render
renderMusicList();
