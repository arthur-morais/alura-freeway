// código do ator

let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;  

function mostraAtor() {
    // função do carregamento da imagem, posicionamento x/y, tamanho da imagem (w/h)
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    
    if (keyIsDown(UP_ARROW)) {
            yAtor -= 3;
        }
    if (podeSeMover()) {    
        if (keyIsDown(DOWN_ARROW)) {
            yAtor += 3;
        }
    }
}

function verificaColisao() {
    // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao) {
            colidiu();
        }
    }
}

function colidiu() {
    voltaAtorPosicaoInicial();
    pontosMaiorQueZero();
    somDaColisao.play();
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(255, 240, 60);
    // o que vai ser exibido, x, y
    text(meusPontos, width/5, 27);
}

function marcaPonto() {
    if (yAtor < 15) {
        meusPontos += 1;
        voltaAtorPosicaoInicial();
        somDoPonto.play();
    }
}

function voltaAtorPosicaoInicial() {
    yAtor = 366;
}

function pontosMaiorQueZero() {
    if (meusPontos > 0) {
        meusPontos--;
    }
}

function podeSeMover() {
    return yAtor < 375;
}
