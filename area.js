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

  //trocar imagem
  const imagemResponsive = document.getElementById("banner1");

  function atualizarImagem (){
    if(window.innerWidth >= 768){
      imagemResponsive.src = "banner-area.png";
    } else{
      imagemResponsive.src = "areamobile.png";
    }
  }
  
  atualizarImagem();
  
  window.addEventListener("resize", atualizarImagem);