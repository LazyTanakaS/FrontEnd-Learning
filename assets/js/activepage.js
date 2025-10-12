const pathname = window.location.pathname;
let currentPage = pathname.split("/").pop();

if (!currentPage || currentPage === "/") currentPage = "index.html";

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach((link) => {
  const parentLi = link.closest("li");
  if (parentLi && parentLi.classList.contains("btn")) return;

  const href = link.getAttribute("href") || "";
  const hrefFile = href.split("/").pop();
  const isIndexLike = href === "" || href === "./" || href === "/" || hrefFile === "index.html";

  if (hrefFile === currentPage || (currentPage === "index.html" && isIndexLike)) {
    link.classList.add("active");
  }
});
