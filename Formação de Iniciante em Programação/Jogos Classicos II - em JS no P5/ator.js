// código do ator

let xAtor = 100;
let yAtor = 366;
let colidiu = false;
let meusPontos = 0;

function mostraAtor(){ 
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW) && yAtor < 365){
    yAtor +=3;
  }
}

function verificaColisao(){
  for(let i=0; i < imagemCarros.length; i++){
   colidiu = collideRectCircle(xCarros[i], yCarros[i], compCarros, larguraCarros, xAtor, yAtor, 15); 
    if(colidiu){
      voltaAtorPosicaoOriginal();
      somDaColisao.play();
      xCarros[5] = 600;
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoOriginal(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(23);
  fill(255, 240, 60);
  text(meusPontos, width/3, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorPosicaoOriginal();
    xCarros[5] = 600;
    somDoPonto.play();
  }
}

