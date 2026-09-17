const card = document.querySelector(".location-card");
const toggle = document.getElementById("addressToggle");

toggle.addEventListener("click", () => {
  card.classList.toggle("open");
});

// Subtle reveal animation after the startup screen.
window.addEventListener("load", () => {
  document.querySelectorAll(".action-card,.location-card,.categories").forEach((el, i) => {
    el.animate(
      [{opacity:0, transform:"translateY(18px)"},{opacity:1, transform:"translateY(0)"}],
      {duration:650, delay:260 + i*90, easing:"cubic-bezier(.2,.8,.2,1)", fill:"both"}
    );
  });
});
