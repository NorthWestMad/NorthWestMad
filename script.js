const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

menu?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

const form = document.getElementById("form");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  note.hidden = false;
  form.reset();
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
