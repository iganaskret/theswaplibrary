document.querySelector(".books-modal-toggle").addEventListener("click", e => {
  e.preventDefault();
  if (document.querySelector(".book-genres").style.display == "none") {
    document.querySelector(".book-genres").style.display = "grid";
  } else {
    document.querySelector(".book-genres").style.display = "none";
  }
});

document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".burger-menu-modal").classList.add("hide");
});

document.querySelector("#burger-menu-icon").addEventListener("click", () => {
  document.querySelector(".burger-menu-modal").classList.remove("hide");
});
