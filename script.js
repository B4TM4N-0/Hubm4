// Global popup elements
const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupClose = document.getElementById("popupClose");
const copyBtn = document.getElementById("copyBtn");

let currentScript = ""; // Shared with hub.js

// Function to handle any card click
function setupCardPopup(card) {
  const title = card.querySelector('.card-title').textContent;
  const script = card.getAttribute('data-script');

  card.addEventListener('click', () => {
    popupTitle.textContent = title;
    currentScript = script;
    popupOverlay.classList.add('active');
  });
}

// Setup all cards in index.html
document.querySelectorAll('.card').forEach(setupCardPopup);

// Close popup when clicking X
popupClose.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

// Close popup when clicking outside the popup box
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});

// Copy to clipboard
copyBtn.addEventListener('click', () => {
  if (currentScript) {
    navigator.clipboard.writeText(currentScript).then(() => {
      alert("Copied to clipboard!");
      popupOverlay.classList.remove('active');
    });
  }
});

addHub("GodMode", "player.Character.Humanoid.MaxHealth = math.huge", "key", "images/god.jpg");
addHub("SpeedHack", "player.Character.Humanoid.WalkSpeed = 100", "universal", "images/speed.jpg");