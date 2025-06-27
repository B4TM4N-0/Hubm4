function addHub(title, scriptCode, badgeType = "universal", bgImage = null) {
  const container = document.querySelector('.hub-container');
  if (!container) return console.error("Hub container not found.");

  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-script', scriptCode);

  if (bgImage) {
    card.style.backgroundImage = `url('${bgImage}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    card.style.backgroundRepeat = 'no-repeat';
  }

  // Title
  const cardTitle = document.createElement('div');
  cardTitle.className = 'card-title';
  cardTitle.textContent = title;

  // Badge
  const badge = document.createElement('div');
  badge.className = 'card-badge';

  if (badgeType.toLowerCase() === "key") {
    badge.textContent = "Key System";
    badge.classList.add("badge-key");
  } else {
    badge.textContent = "Universal";
    badge.classList.add("badge-universal");
  }

  // Assemble card
  card.appendChild(cardTitle);
  card.appendChild(badge);
  container.appendChild(card);

  // Setup popup
  setupCardPopup(card); // from script.js
}
