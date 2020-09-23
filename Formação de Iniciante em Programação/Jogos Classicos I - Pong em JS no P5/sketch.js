//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variaveis raqueta do guda
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 90;
let velocidadeRaquete = 10;

//raqueta oponente
let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velocidadeRaqueteOp;
let chanceDeErrar = 0;

let colidiu = false;

//placar
let pontosJogador = 0;
let pontosOponente = 0;

//sons do jogo
let somRaquetada;
let somPonto;
let somTrilha;

function preload(){
  somTrilha = loadSound("trilha.mp3");
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");                   
}

function setup() {
  createCanvas(600, 400);
 // somTrilha.loop();
}

function draw() {
  background(0);
  fill(255);
  rect(300, 0, 2, 400);
  incluiPlacar();
  mostraBolinha();
  movimentaBolinha();
  verificaBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentaJogador();
  movimentaRaqueteOponente();
  verificaColisao(xRaquete, yRaquete);
  verificaColisao(xRaqueteOp, yRaqueteOp);
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaBorda(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }

}

function mostraRaquete(x, y){
    rect(x, y, compRaquete, altRaquete);
}

function movimentaJogador(){
  
   if(keyIsDown(UP_ARROW)){
     yRaquete -= velocidadeRaquete;
   }
   if(keyIsDown(DOWN_ARROW)){
     yRaquete += velocidadeRaquete;
   }
}

/*function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + compRaquete 
       && yBolinha - raio < yRaquete + altRaquete 
       && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}*/ //antiga checagem de colisão feita por mim

function verificaColisao(x, y){  //usando a biblioteca encontrada nas referencias
  colidiu = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, diametro);
  if(colidiu){
    velocidadeXBolinha *= -1;
    somRaquetada.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeRaqueteOp = yBolinha - yRaqueteOp - compRaquete / - 30;
  yRaqueteOp += velocidadeRaqueteOp + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar(){
  
  if (pontosOponente >= pontosJogador) {
    chanceDeErrar += 2;
  if (chanceDeErrar >= 19){
    chanceDeErrar = 20;
    }
  } 
  else {
    chanceDeErrar -= 2;
  if (chanceDeErrar <= 1){
    chanceDeErrar = 1;
    }
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(130, 10, 40, 20);
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosJogador, 150, 26);
  text(pontosOponente, 450, 26); 
}

function marcaPonto(){
  if(xBolinha > 600-raio){
    pontosJogador += 1;
    somPonto.play();
  }
  if(xBolinha  < 0+raio){
    pontosOponente += 1;
    somPonto.play();
  }
}


