const menu = document.getElementsByClassName("checkbtn")[0];
const navLink = document.getElementsByClassName("navigation")[0];

menu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
