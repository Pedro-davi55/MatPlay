var tela = 1
var largura = 200
var altura = 50
var xMenu = 225
var yMenu1 = 315
var yMenu2 = 375
var yMenu3 = 435
var xA13 = 80
var xA24 = 400
var yA13 = 315
var yA24 = 400


let img;

function preload(){
  img = loadImage('Logo_sBG.png')
  img2 = loadImage('logo_responsiva.png')
  eu = loadImage('eu.png')
  adriano = loadImage('Adriano.Jpeg')
  close = loadImage('close.png')
  triangulo = loadImage('triangulo.png')
  quadrado = loadImage('Quadrado.png')
  pent = loadImage('Pentagono.png')
  next = loadImage('next.png')
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  textStyle(NORMAL);
  textFont('Exo')

    //tela de menu
  if (tela == 1){
    background('#7d1426');
    image(img, 160, 45, 350, 250)

    //botão iniciar
    textAlign(CENTER);
    textSize(26);

    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xMenu, yMenu1, largura, altura, 15);
      if (mouseIsPressed){
        tela = 4;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#2816D0')
      rect(xMenu, yMenu1, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("START", 325, 350);

      //botão info
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
      stroke('#f0f0f0');
      fill('#242424')
      rect(xMenu, yMenu2, largura, altura, 15)
      if (mouseIsPressed){
        tela = 2;
      }
    }
    else{
    stroke('#f0f0f0');
    fill('#2819D0')
    rect(xMenu, yMenu2, largura, altura, 15)
    }
      fill('#f0f0f0')
      noStroke()
      text("Como Jogar", 325, 410)

    //botão creditos
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xMenu, yMenu3, largura, altura, 15);
      if (mouseIsPressed){
      tela = 3;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#2819D0')
      rect(xMenu, yMenu3, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("Créditos", 325, 470);
  }
  
  //tela de Regras
  if (tela == 2){
    background('#7d1426');
    textAlign(CENTER)
    image(img2, 10, 10, 100, 100)
    text("COMO JOGAR", 325, 180)
    textAlign(LEFT)
    textSize(25)
    text("Irão aparecer algumas figuras e você\ntera que marcar a opção que corresponde\na figura representada. o assunto será:", 100, 230)
    text("-Geometria plana", 100, 350)
    
      //botão para voltar
    if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {                 
      fill(240);
      rect(537, 17.8, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 1;

          }
   } 
      image(close,540,20,40,40);
  }
  
  //tela de creditos
  if (tela == 3){
    background('#7d1426');
    textSize(75)
    text("CRÉDITOS", 325, 100)
    textAlign(CENTER)
    image(img2, 10, 10, 100, 100)

    image(eu, 100,200, 150, 195)
    textSize(20)
    text("desenvolvido por:", 175, 195)
    text("Pedro Davi", 175, 420) 
    
    image(adriano, 405, 200, 150, 195)
    text("Orientado por:", 480, 195)
    text("Adriano Marques", 483, 420)
    textSize(10)
    text("2021 Copyright © Todos os direitos reservados", 325, 475)

    if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {                 
      fill(240);
      rect(537, 17.8, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 1;
            
          }
   } 
      image(close,540,20,40,40);
  }

  //1 pergunta
  if (tela == 4){
    background('#7d1426')
    fill ('#242424')  
    textSize(23);
    text("Que figura geometrica é essa?", 150,250,400)
    image(img2, 10, 10, 100, 100)
    image(triangulo, 245, 40, 200, 200)

    //botão A1
    if( mouseX > xA13 && mouseX < xA13 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA13, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 10;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA13, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("triangulo", 181, 350);

    //botão A2
    if( mouseX > xA24 && mouseX < xA24 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA24, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 8;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA24, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("quadrado", 500, 350)
  }
 //tela de acerto
  if(tela == 10){
    background('#7d1426')
    image(img2, 10, 10, 100, 100)
    textSize(100)
    text("parabéns", 350, 250)
    textSize(26)
    text("você acertou! passe para a proxima pergunta", 350, 350)

    if (mouseX > 325 && mouseX < 325 + 40 && mouseY > 390 && mouseY < 390 + 40) {                 
      fill(240);
      rect(322, 387, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 5;

          }
   } 
      image(next,325,390,40,40);
  }
  
  //2 pergunta
  if (tela == 5){
    background('#7d1426')
    fill ('#242424')  
    textSize(23);
    text("Que figura geometrica é essa?", 150,250,400)
    
    image(img2, 10, 10, 100, 100)
    image(quadrado, 245, 40, 200, 200)

    //botão A1
    if( mouseX > xA13 && mouseX < xA13 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA13, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 11;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA13, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("quadrado", 181, 350);

    //botão A2
    if( mouseX > xA24 && mouseX < xA24 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA24, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 8;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA24, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("paralelepipedo", 500, 350)
  }

  if(tela == 11){
    background('#7d1426')
    textSize(100)
    text("parabéns", 350, 250)
    textSize(26)
    text("você acertou! passe para a proxima pergunta", 350, 350)
    image(img2, 10, 10, 100, 100)
    if (mouseX > 325 && mouseX < 325 + 40 && mouseY > 390 && mouseY < 390 + 40) {                 
      fill(240);
      rect(322, 387, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 6;

          }
   } 
      image(next,325,390,40,40);
  }

  if (tela == 6){
    background('#7d1426')
    fill ('#242424')  
    textSize(23);
    text("Que figura geometrica é essa?", 150,250,400)
    
    image(img2, 10, 10, 100, 100)
    image(pent, 245, 40, 200, 200)

    //botão A1
    if( mouseX > xA13 && mouseX < xA13 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA13, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 8;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA13, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("triangulo", 181, 350);

    //botão A2
    if( mouseX > xA24 && mouseX < xA24 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA24, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 9;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA24, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("pentagono", 500, 350)
  }

  //tela de erro
  if(tela == 8){
    background('#7d1426')
    textSize(100)
    text("você errou", 350, 250)
    image(img2, 10, 10, 100, 100)

    if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {                 
      fill(240);
      rect(537, 17.8, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 1;

          }
   } 
      image(close,540,20,40,40);
  }
  //acertou tudo
  if(tela == 9){
    background('#7d1426')
    textSize(100)
    text("parabéns", 350, 250)
    textSize(26)
    text("você acertou todas as perguntas", 350, 350)
    image(img2, 10, 10, 100, 100)
    if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {                 
      fill(240);
      rect(537, 17.8, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 1;

          }
   } 
      image(close,540,20,40,40);
  }
}