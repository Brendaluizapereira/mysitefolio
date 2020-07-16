/*/ ativer função de fixação do cabeçalho
window.onscroll = function() {fixar()};

// cabecalho 
var cabecalho = document.getElementById("cabecalho");

// posição offset
var sticky = cabecalho.offsetTop;

// adicionar sticky qdo offset for necessário
function fixar() {
  if (window.pageYOffset >= sticky) {
    cabecalho.classList.add("sticky")
  } else {
    cabecalho.classList.remove("sticky");
  }
}*/