const header = document.querySelector(".header");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__link");

function opdaterAktivNav() {
  const hashLinks = Array.from(navLinks).filter(l => (l.getAttribute("href") || "").includes("#"));
  if (!hashLinks.length || !sections.length) return;

  let currentId = "";
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = 150;
    if (rect.top <= offset && rect.bottom > offset) currentId = section.id;
  });

  hashLinks.forEach(link => {
    link.classList.remove("nav__link--active");
    const href = link.getAttribute("href") || "";
    if (href.endsWith(`#${currentId}`) || href === `#${currentId}`) {
      link.classList.add("nav__link--active");
    }
  });
}

function opdaterHeader() {
  if (!header) return;
  if (window.scrollY > 10) header.classList.add("header--scrolled");
  else header.classList.remove("header--scrolled");
}

window.addEventListener("scroll", () => {
  opdaterAktivNav();
  opdaterHeader();
});

opdaterAktivNav();
opdaterHeader();
