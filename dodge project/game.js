var player;
var enemy;
var isGameOver;
var score

function setup(){
    isGameOver = false;
    score = 0;
    createCanvas(500, 600);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 75, 25);
    enemy2 = createSprite(width/2, -200, 75, 25);
    enemy3 = createSprite(width/2, -400, 75, 25);
}

function draw() {
    if (enemy.overlap(player)) {
            gameOver();
            background(1,10,0);
            
        }
    if (isGameOver) {
        gameOver();
    }else{
        if (enemy.overlap(player)){
            isGameOver = true;
        } else {
            background(0,0,100);
        }
        if (enemy2.overlap(player)){
            isGameOver = true;
        } else {
            background(0,0,100);
        }
        if (enemy3.overlap(player)){
            isGameOver = true;
        } else {
            background(0,0,100);
        }
        
    }

    drawSprites ();
    
    if (keyDown(75) && player.position.x < (width - 25)){
     player.position.x =player.position.x + 20;
    }
    if (keyDown(68) && player.position.x > 25){
        player.position.x = player.position.x -20;
    }
    else if (keyDown(74) && player.position.x < width -25){
        player.position.x =player.position.x + 10
    }
    if (keyDown(70) && player.position.x > 25){
        player.position.x = player.position.x -10;
    }    
    enemy.position.y = enemy.position.y + 10;
    enemy2.position.y = enemy2.position.y + 10;
    enemy3.position.y = enemy3.position.y + 10;

    if (enemy.position.y > height) {
     enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
    }
    if (enemy2.position.y > height) {
     enemy2.position.y = 0;
        enemy2.position.x = random(5, width-5);
    }
    if (enemy3.position.y > height) {
     enemy3.position.y = 0;
        enemy3.position.x = random(5, width-5);
    }
    if (enemy.overlap(player)) {
        score = score + 1;
        textAlign(LEFT);
        text(score, 20, 20)
    drawSprites();
    }
    }
function gameOver(){
    background(0)
    textAlign(CENTER);
    fill("WHITE");
    text("Game Over", width/2, height/2)
    text("Click anywhere to try again", width/2, 3*height/4)
}
function mouseClicked(){
    score = 0;
    isGameOver = false;
    player.position.x = width/2;
    player.positiony = height-25;
    enemy.position.x = width/2
    enemy.position.y = 0;
    enemy2.position.x = width/2
    enemy2.position.y = -200;
    enemy3.position.x = width/2
    enemy3.position.y = -400;
}