// Simple smooth scroll enhancement (optional, since CSS already handles it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Add subtle hover glow to project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 12px 30px rgba(37, 99, 235, 0.18)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "";
  });
});
