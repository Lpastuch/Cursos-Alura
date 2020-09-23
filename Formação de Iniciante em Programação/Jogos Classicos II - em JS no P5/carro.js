// codigo dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let compCarros = 80;
let larguraCarros = 40;


function mostraCarro(){ 
  
  for(let i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarros, larguraCarros);
  }
  
}

function movimentaCarro(){ 
  for(let i=0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  
  for(let i=0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - compCarros;
}