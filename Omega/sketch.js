var box;
//Funcion de configuracion
function setup() {
  //Diseño de area de juego
  createCanvas(400,400);
  //Diseñoi de objeto 
  box = createSprite (200,200,100,100);

}

//Funcion de dibujo
function draw() 
{
  //Establecer color de fondo
  background(51);
//Codigo para proyectar objetos
  drawSprites();
}

