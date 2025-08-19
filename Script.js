// Theme toggle + persist
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);
document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
});

// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("primary-menu");
navToggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// Back to top
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) toTop.classList.add("show"); else toTop.classList.remove("show");
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth internal link scroll (for browsers without native smooth behavior)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});