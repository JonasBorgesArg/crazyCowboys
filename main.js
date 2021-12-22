ScrollReveal().reveal('.home');
ScrollReveal().reveal('.products', {delay: 300});
ScrollReveal().reveal('.howtoplay', {delay: 300});
ScrollReveal().reveal('.aboutus', {delay: 300});

VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
		speed: 400
	});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

function menuHamburguesa(panelBtn, navMenu, menuLink){

  document.addEventListener("click", (e)=>{
    //el * hace referencia a todos sus elementos hijos (el boton, las tres lineas)
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
      document.querySelector(navMenu).classList.toggle("is-active")
      document.querySelector(panelBtn).classList.toggle("is-active")
    }
  
    if(e.target.matches(menuLink)){
      document.querySelector(navMenu).classList.remove("is-active")
      document.querySelector(panelBtn).classList.remove("is-active")
    }
  })
}

//features
function security(){
  document.getElementById("container-title").textContent = "Security"
  document.getElementById("container-text").textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima exercitationem odit natus, molestias quos, voluptate provident sapiente praesentium. Vel."
}
function staking(){
  document.getElementById("container-title").textContent = "Staking"
  document.getElementById("container-text").textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima exercitationem odit natus"
}
function antibots(){
  document.getElementById("container-title").textContent = "Antibots"
  document.getElementById("container-text").textContent ="Dolorum minima exercitationem odit natus, molestias quos, voluptate provident sapiente praesentium."
}
function noBnbFees(){
  document.getElementById("container-title").textContent = "No BNB Fees"
  document.getElementById("container-text").textContent ="dolor sit amet consectetur adipisicing elit. Dolorum minima exercitationem odit natus, molestias quos, voluptate provident sapiente praesentium"
}
function playEarn(){
  document.getElementById("container-title").textContent = "Play & Earn"
  document.getElementById("container-text").textContent ="voluptate provident sapiente praesentium. Vel."
}

document.addEventListener("DOMContentLoaded", (e)=>{
  menuHamburguesa(".panel-btn", ".navigation", ".navigation a");
})