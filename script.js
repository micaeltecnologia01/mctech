document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px #38bdf8';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});