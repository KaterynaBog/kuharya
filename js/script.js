document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".recipe-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("liked");
    });
  });
});
