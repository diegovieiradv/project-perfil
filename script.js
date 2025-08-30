const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".menu-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  // Aplica fade-in quando a página carregar
  document.body.classList.add("fade-in");

  // Intercepta os links para aplicar fade-out antes de sair
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");

    // ignora links que começam com "#" (âncoras internas)
    if (href && !href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        setTimeout(() => {
          window.location = href;
        }, 500); // mesmo tempo do transition
      });
    }
  });
});
