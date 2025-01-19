document.addEventListener("DOMContentLoaded", () => {
  const menubtn = document.getElementById("menu");
  const navlinks = document.getElementById("navlinks");
  const body = document.body;

  menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("show");
    body.classList.toggle("no-scroll");
  });
});