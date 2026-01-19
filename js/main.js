/*
  JavaScript til interaktive elementer i portfolioet.
  Funktionalitet: aktiv navigation, header scroll-state, mobilmenu.
  Kildeinspiration: MDN Web Docs (DOM, events, classList, aria-attributter)
*/

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

// -----------------------------
// Header scroll-state
// -----------------------------
function opdaterHeader() {
  if (!header) return;
  if (window.scrollY > 10) header.classList.add("header--scrolled");
  else header.classList.remove("header--scrolled");
}

// -----------------------------
// Aktiv navigation (sektioner på index + aktuelle side)
// -----------------------------
function markActivePageLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    link.classList.remove("nav__link--active");
    const href = link.getAttribute("href") || "";

    // Match side-links (projekter.html / univers.html)
    if (href === path) link.classList.add("nav__link--active");

    // Match index.html links (Forside/Om/Kontakt)
    if (path === "index.html" && href.startsWith("index.html#")) {
      // aktiv sektion håndteres længere nede
    }
  });
}

function markActiveSectionOnIndex() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  if (path !== "index.html") return;

  const sections = document.querySelectorAll("main section[id]");
  const hashLinks = Array.from(navLinks).filter((l) => (l.getAttribute("href") || "").includes("#"));
  if (!hashLinks.length || !sections.length) return;

  let currentId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offset = 150;
    if (rect.top <= offset && rect.bottom > offset) currentId = section.id;
  });

  hashLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isMatch = href.endsWith(`#${currentId}`) || href === `#${currentId}`;
    if (isMatch) link.classList.add("nav__link--active");
    else link.classList.remove("nav__link--active");
  });
}

// -----------------------------
// Mobilmenu toggle (hamburger)
// -----------------------------
function setupMobileMenu() {
  const toggle = document.querySelector(".header__toggle");
  if (!toggle || !header || !nav) return;

  function openMenu() {
    header.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.contains("is-open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Luk når man klikker på et link (mobil UX)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches(".nav__link")) closeMenu();
  });

  // Luk ved ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Luk menu hvis man ændrer størrelse op (så den ikke “hænger”)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

// -----------------------------
// Init
// -----------------------------
window.addEventListener("scroll", () => {
  opdaterHeader();
  markActiveSectionOnIndex();
});

markActivePageLink();
markActiveSectionOnIndex();
opdaterHeader();
setupMobileMenu();
