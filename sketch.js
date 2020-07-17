var ground,player,corona
var groundImage, playerImage,coronaImage
var edges;

function preload(){
 groundImage = loadImage("Images/ground.png")
 playerImage = loadAnimation("Images/player1.png","Images/player2.png",
 "Images/player3.png","Images/player4.png","Images/player5.png","Images/player6.png",
 "Images/player7.png"
 )
 coronaImage1 = loadImage("Images/corona 1.png");
 coronaImage2 = loadImage("Images/corona 2.png");
 coronaImage3 = loadImage("Images/corona 3.png");
 coronaImage4 = loadImage("Images/corona 4.png");
 }
function setup(){
createCanvas(1200,400)
player = new Player(50,300,40,80)
ground = new Ground(600,500,1200,20)
corona = new Corona(200,20,20,40)
edges = createEdgeSprites();
}

function draw(){
background("grey");
ground.reset();
player.behaviour();
corona.spawnCorona1();
corona.spawnCorona2()
corona.spawnCorona3()
corona.spawnCorona4()
drawSprites();
}