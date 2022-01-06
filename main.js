ScrollReveal().reveal('.home');
ScrollReveal().reveal('.products', {delay: 300});
ScrollReveal().reveal('.howtoplay', {delay: 300});
ScrollReveal().reveal('.aboutus', {delay: 300});

VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
		speed: 400
	});

//var scene = document.getElementById('scene');
//var parallaxInstance = new Parallax(scene);

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

//parallax
document.addEventListener("mousemove", parallax)
function parallax(e){
  this.querySelectorAll(".mov").forEach(layer => {
  const speed = layer.getAttribute("data-speed")
  const x = (window.innerWidth - e.pageX*speed)/100

  layer.style.transform = `translateX(${x}px)`
  layer.style.transition = "transform 0.5s ease"
  })
}


//features
const accordion = document.getElementsByClassName("contentBx")

for (i = 0; i <accordion.length; i++) {
  accordion[i].addEventListener("click", function(){
    this.classList.toggle("active")
  })
}

document.addEventListener("DOMContentLoaded", (e)=>{
  menuHamburguesa(".panel-btn", ".navigation", ".navigation a");
})