const hamburgerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");
const contentEl = document.querySelector(".content");

hamburgerEl.addEventListener("click", (_) => {
  // Open and Close the Nav container with the ULs
  navEl.classList.toggle("open");

  // Change the Hamburger to a X when clicked
  hamburgerEl.firstElementChild.classList.toggle("change");
  hamburgerEl.firstElementChild.nextElementSibling.classList.toggle("change");
  hamburgerEl.lastElementChild.classList.toggle("change");

  // Move the Container to the right
  contentEl.classList.toggle("shift");
});
