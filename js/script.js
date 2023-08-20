const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const bgDarken = document.getElementById("bg-darken");

burger.addEventListener('click', function() {
  menu.classList.remove("d-none");
  menu.classList.add("d-flex");
  bgDarken.style.display = 'block';
});

const btnClose = document.getElementById("btnClose");

btnClose.addEventListener('click', function() {
  menu.classList.add("d-none");
  menu.classList.remove("d-flex");
  bgDarken.style.display = 'none';
});





