function showMenu() {
  document.getElementById('navbar').classList.remove("navbar-hide");
  document.getElementById('navbar').classList.add("navbar-show");
}

function hideMenu() {
  document.getElementById('navbar').classList.remove("navbar-show");
  document.getElementById('navbar').classList.add("navbar-hide");
}

document.getElementById('show-menu').onclick = showMenu;
document.getElementById('hide-menu').onclick = hideMenu;
