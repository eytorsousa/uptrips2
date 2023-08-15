const menu = document.getElementById("menu-barras");

menu.addEventListener("click", menuOnClick);

function menuOnClick() {
    document.getElementById("menu-barras").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}
