const panels = document.querySelectorAll(".panel");

const toggleOpen = event => {
  if (event.target.tagName === "P") {
    event.target.parentNode.classList.toggle("open");
  } else {
    event.target.classList.toggle("open");
  }
};

const toggleActive = event => {
  if (event.propertyName.includes("flex")) {
    event.target.classList.toggle("open-active");
  }
};

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
