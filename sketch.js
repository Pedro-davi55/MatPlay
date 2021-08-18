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
  close = loadImage('close.png')
  triangulo = loadImage('triangulo.png')
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
        tela = 2;
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
        tela = 3;
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
      tela = 4;
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
  if (tela == 3){
    background('#7d1426');
    textAlign(CENTER)
    text("COMO JOGAR", 325, 180)
    textAlign(LEFT)
    text("Irão aparecer algumas figuras e você\ntera que marcar a opção que corresponde\na figura representada. o assunto será:", 100, 230)
    text("-Geometria plana", 100, 350)

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
  if (tela == 4){
    background('#7d1426');
    text("CRÉDITOS", 325, 200)
    textAlign(CENTER)
    text("Jogo desenvolvido por Pedro Davi", 330, 250) 
    text("aluno do curso de Ciência e tecnologia da UFRN", 330,280)
    text("Orientado por: Adriano Marques", 330, 310)

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
  if (tela == 2){
    background('#7d1426')
    fill ('#242424')  
    textSize(23);
    text("Que figura geometrica é essa?", 150,250,400)
    
    image(triangulo, 245, 40, 200, 200)

    //botão A1
    if( mouseX > xA13 && mouseX < xA13 + largura && mouseY > yA13 && mouseY < yA13 + altura ){
      stroke('#f0f0f0');
      fill('#242424');
      rect(xA13, yA13, largura, altura, 15);
      if (mouseIsPressed){
        tela = 6;
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
        tela = 5;
      }
    }
    else{
      stroke('#f0f0f0');
      fill('#0000')
      rect(xA24, yA13, largura, altura, 15);
    }
    fill('#f0f0f0');
    noStroke();
    text("Quadrado", 500, 350)
  }

  //tela de acerto
  if(tela == 5){
    background('#7d1426')
    textSize(100)
    text("você errou", 350, 250)

    if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {                 
      fill(240);
      rect(537, 17.8, 45, 45, 45); 
          if (mouseIsPressed) {
            tela = 1;

          }
   } 
      image(close,540,20,40,40);
  }
  //fim do jogo
  if(tela == 6){
    background('#7d1426')
    textSize(100)
    text("parabéns", 350, 250)
    textSize(26)
    text("você acertou todas as perguntas", 350, 350)

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