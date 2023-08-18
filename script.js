function redirectToLinkIndex() {
  // Redireciona para o link desejado
  window.location.href = "index.html";
}
function redirectToLinkInfos() {
  // Redireciona para o link desejado
  window.location.href = "infos.html";
}
function redirectToLinkArea() {
  // Redireciona para o link desejado
  window.location.href = "area.html";
}

function showDialog() {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "block";
}

function closeDialog() {
  let dialog = document.getElementById("dialog");
  dialog.style.display = "none";
}

const imagemResponsive = document.getElementById("banner1");

function atualizarImagem (){
  if(window.innerWidth >= 768){
    imagemResponsive.src = "banner1.png";
  } else{
    imagemResponsive.src = "mobile.png";
  }
}

atualizarImagem();

window.addEventListener("resize", atualizarImagem);

const imagemResponsive2 = document.getElementById("logos");
function atualizarImagem2 (){
  if(window.innerWidth >= 768){
    imagemResponsive2.src = "logos.png";
  } else{
    imagemResponsive2.src = "mobileparceiros.png";
  }
}

atualizarImagem2();

window.addEventListener("resize", atualizarImagem2);

//abre menu dropdown
document.addEventListener("DOMContentLoaded", function(){
  const menuIcon = document.querySelector(".hamburger-icon");
  const menuDropdown = document.querySelector(".menu-dropdown");

  menuIcon.addEventListener("click", function(){
    menuDropdown.classList.toggle("show");
  });
});

//fecha menu dropdown
const menuItems = menuDropdown.querySelector("a");
menuItems.forEach(function(item){
  item.addEventListener("click", function(){
    menuDropdown.classList.remove("show");
  });
});