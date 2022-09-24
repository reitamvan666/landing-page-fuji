const header = document.querySelector(".heading");
const theArticle = document.querySelector(".theArticle");

window.addEventListener("scroll", function () {
  if (this.window.scrollY !== 0) {
    header.classList.add("whenActive");
  } else if (this.window.scrollY === 0) {
    header.classList.remove("whenActive");
  }
});
