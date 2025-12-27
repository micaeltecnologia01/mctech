document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px #38bdf8';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});

// Lightbox Dashboards
const modal = document.getElementById("modalDashboard");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".dashboard-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
