
/* Menu hambúrguer*/
function menuHamburguer() {
  let x = document.getElementById("mylinks");
 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.textDecoration = "none";
    x.className = "responsivo";
  }
}

/*Galeria de banners*/
let photos= ['../galeria/image1.png', '../galeria/image2.png', '../galeria/image3.png', 
'../galeria/image4.png', '../galeria/image5.png', '../galeria/image6.png'];
let iteracao = 0;

     
function forward (){  
  if (iteracao < 5) { 
    document.getElementById("img-galeria").src= photos[iteracao+1];
    iteracao ++;
  } else if(iteracao >= 5) {
      document.getElementById("img-galeria").src= photos[0];
      iteracao = 0;
    }
}

/*function backward (){   
  if (iteracao > 0) { 
    document.getElementById("img-galeria").src= photos[iteracao-1];
    iteracao --;
  } else  {
      document.getElementById("img-galeria").src= photos[4];
    }
  
  }*/


/*
function textosgaleria() {

  if (iteracao == 0) {
    document.getElementById("texto0").style.display="block";
  } else if (iteracao == 1) {
    document.getElementById("texto1").style.display="block";
  } else if (iteracao == 2) {
    document.getElementById("texto2").style.display="block";
  } else if (iteracao == 3) {
    document.getElementById("texto3").style.display="block";
  } else if (iteracao == 4) {
    document.getElementById("texto4").style.display="block";
  } else if (iteracao == 5) {
    document.getElementById("texto5").style.display="block";
  }
  switch (iteracao) {
    case "0": document.getElementById("texto0").style.display="block";
      break;
    case "1": document.getElementById("texto1").style.display="block";
      break;
    case "2": document.getElementById("texto2").style.display="block";
      break;
    case "3": document.getElementById("texto3").style.display="block";
      break;
    case "4": document.getElementById("texto4").style.display="block";
      break;
    case "5": document.getElementById("texto5").style.display="block";
      break;
  }*/
