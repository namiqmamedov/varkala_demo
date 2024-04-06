let toggler = document.querySelector(".toggler");


document.addEventListener("click", event => {
    if (event.target.classList.contains("toggle") || event.target.classList.contains("fa-bars")) {
        document.body.classList.toggle("show-nav");
  } else if (event.target.className == "overlay-1") {
    document.body.classList.remove("show-nav");
  } else if (event.target.classList.contains("fa-xmark")) {
    document.body.classList.remove("show-nav");
  }
});

document.addEventListener("click", event => {
    if (event.target.classList.contains("toggle") || event.target.classList.contains("fa-shop")) {
        document.body.classList.toggle("show-nav-2");
  } else if (event.target.className == "overlay-2") {
    document.body.classList.remove("show-nav-2");
  } else if (event.target.classList.contains("fa-xmark")) {
    document.body.classList.remove("show-nav-2");
  }
});

