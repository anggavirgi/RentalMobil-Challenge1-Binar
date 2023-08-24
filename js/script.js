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

const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-previous");

const sliderSatu = document.getElementById("slider-satu");
const sliderDua = document.getElementById("slider-dua");
const sliderTiga = document.getElementById("slider-tiga");

btnPrev.addEventListener('click', function () {  
  if(sliderSatu.classList.contains('order-1')){
    sliderSatu.classList.remove("order-1");
    sliderSatu.classList.add("order-3");
    sliderDua.classList.remove("order-2");
    sliderDua.classList.add("order-1");
    sliderTiga.classList.remove("order-3");
    sliderTiga.classList.add("order-2");
  } else if(sliderSatu.classList.contains('order-2')){
    sliderSatu.classList.remove("order-2");
    sliderSatu.classList.add("order-1");
    sliderDua.classList.remove("order-3");
    sliderDua.classList.add("order-2");
    sliderTiga.classList.remove("order-1");
    sliderTiga.classList.add("order-3");
  } else if(sliderSatu.classList.contains('order-3')){
    sliderSatu.classList.remove("order-3");
    sliderSatu.classList.add("order-2");
    sliderDua.classList.remove("order-1");
    sliderDua.classList.add("order-3");
    sliderTiga.classList.remove("order-2");
    sliderTiga.classList.add("order-1");
  }
});

btnNext.addEventListener('click', function () {  
  if(sliderSatu.classList.contains('order-1')){
    sliderSatu.classList.remove("order-1");
    sliderSatu.classList.add("order-2");
    sliderDua.classList.remove("order-2");
    sliderDua.classList.add("order-3");
    sliderTiga.classList.remove("order-3");
    sliderTiga.classList.add("order-1");
  } else if(sliderSatu.classList.contains('order-2')){
    sliderSatu.classList.remove("order-2");
    sliderSatu.classList.add("order-3");
    sliderDua.classList.remove("order-3");
    sliderDua.classList.add("order-1");
    sliderTiga.classList.remove("order-1");
    sliderTiga.classList.add("order-2");
  } else if(sliderSatu.classList.contains('order-3')){
    sliderSatu.classList.remove("order-3");
    sliderSatu.classList.add("order-1");
    sliderDua.classList.remove("order-1");
    sliderDua.classList.add("order-2");
    sliderTiga.classList.remove("order-2");
    sliderTiga.classList.add("order-3");
  }
});




