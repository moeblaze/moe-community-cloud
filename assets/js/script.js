
function filterCategory(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.querySelector('.lightbox').style.display = 'flex';
}
