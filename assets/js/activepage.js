const pathname = window.location.pathname;
let currentPage = pathname.split("/").pop();

if (!currentPage || currentPage === "/") currentPage = "index.html";

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach((link) => {
  const parentLi = link.closest("li");
  if (parentLi && parentLi.classList.contains("btn")) return;
  ``;
  const href = link.getAttribute("href") || "";
  const hrefFile = href.split("/").pop();
  const isIndexLike = href === "" || href === "./" || href === "/" || hrefFile === "index.html";

  if (hrefFile === currentPage || (currentPage === "index.html" && isIndexLike)) {
    link.classList.add("active");
  }
});

// Animation Script

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .scale-in, .fade-in-left, .fade-in-right"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    link.parentElement.classList.remove("active");

    if (href && href.includes(currentPage)) {
      link.parentElement.classList.add("active");
    }
  });
});
