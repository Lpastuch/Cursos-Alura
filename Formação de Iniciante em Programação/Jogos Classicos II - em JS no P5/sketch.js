function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  incluiPontos();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  marcaPonto();
}

