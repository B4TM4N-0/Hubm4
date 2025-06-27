function addHub(title, scriptCode, badgeType = "universal", bgImage = null) {
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
  badge.textContent = badgeType.toLowerCase() === "key" ? "Key System" : "Universal";
  badge.classList.add(badgeType.toLowerCase() === "key" ? "badge-key" : "badge-universal");

  // Append
  card.appendChild(cardTitle);
  card.appendChild(badge);
  document.body.appendChild(card);

  setupCardPopup(card); // from script.js
}