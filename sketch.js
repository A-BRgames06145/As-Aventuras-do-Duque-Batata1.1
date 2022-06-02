var backgroundImg, backgroundImg2, nuvemImg, logo, logoImg;
var gamestate = 0;
var batataLife = 20, gigaSlimeLife = 200, larryLife = 200;
var monsterKillCount = 0;
var isGameOver = false;
var invisibleGround, morro1, morro2, morro3;
var batata, batataImg, batataImg2, batataImgPulo, batataImgTiro1, batataImgTiro2, batataImgTiro3;
var cenoura, cenouraImg, cenoura2, cenouraImg2, cenoura3, cenouraImg3, cenoura4, cenouraImg4, pofImg;
var slime, slime2, slimeImg, slimeImg2;
var armandibula, armandibulaImg, armandibulaImg2;
var prato, prato2, pratoImg, pratoImg2, faca, faca2, facaImg, facaImg2;
var isPratoAlive1 = false, isPratoAlive2 = false;
var gigaSlime, gigaSlimeImg1, gigaSlimeImg2, gigaSlimeImg3, fogoImg;
var isGigaSlimeAlive = false, isBatataTeleported =false, isGigaSlimeAttacking = false, gigaSlimeState = 1;
var flyme, flymeAni, flymeAni2, flyCollider, flyCollider2;
var larry, larryImg, teiaImg;
var isLarryAlive = false;
var introSound, backgroundMusic, backgroundMusic2, backgroundBoss, backgroundBoss2;
var isIntro = false, isWon = false, isLost = false;
var tiroSound, danoSound, hitGiga, flameSound, hitLarry, winSound, loseSound;

function preload(){
  backgroundImg = loadImage("./assets/Background.png");
  backgroundImg2 = loadImage("./assets/Background2.png")
  batataImg = loadImage("./assets/DuqueBatata1.png");
  batataImg2 = loadImage("./assets/DuqueBatata2.png");
  batataImgPulo = loadImage("./assets/DuqueBatataPulo1.png");
  nuvemImg = loadImage("./assets/Nuvem.png");
  logoImg = loadImage("./assets/Logo.png");
  cenouraImg = loadImage("./assets/Cenojetil1.png");
  batataImgTiro1 = loadImage("./assets/DuqueBatataTiro1.png");
  cenouraImg2 = loadImage("./assets/Cenojetil2.png");
  batataImgTiro2 = loadImage("./assets/DuqueBatataTiro2.png");
  cenouraImg3 = loadImage("./assets/Cenojetil3.png");
  batataImgTiro3 = loadImage("./assets/DuqueBatataTiro3.png");
  cenouraImg4 = loadImage("./assets/Cenojetil4.png");
  slimeImg = loadImage("./assets/Slime1.png");
  slimeImg2 = loadImage("./assets/Slime2.png");
  pofImg = loadImage("./assets/POF.png")
  armandibulaImg = loadImage("./assets/Armandibula1.png");
  armandibulaImg2 = loadImage("./assets/Armandibula2.png");
  pratoImg = loadImage("./assets/Prato1.png");
  pratoImg2 = loadImage("./assets/Prato2.png");
  facaImg = loadImage("./assets/Faca1.png");
  facaImg2 = loadImage("./assets/Faca2.png");
  gigaSlimeImg1 = loadImage("./assets/GigaSlime1.png");
  gigaSlimeImg2 = loadImage("./assets/GigaSlime2.png");
  gigaSlimeImg3 = loadImage("./assets/GigaSlime3.png");
  fogoImg = loadImage("./assets/Fogo.png");
  flymeAni = loadAnimation("./assets/Flyme1.png","./assets/Flyme2.png","./assets/Flyme3.png")
  flymeAni2 = loadAnimation("./assets/Flyme4.png","./assets/Flyme5.png","./assets/Flyme6.png");
  larryImg = loadImage("./assets/LarryMuquiaranha.png");
  teiaImg = loadImage("./assets/Teia.png");

  introSound = loadSound("./assets/Intro.mp3");
  backgroundMusic = loadSound("./assets/BackgroundSound.mp3");
  backgroundMusic2 = loadSound("./assets/BackgroundSound2.mp3");
  backgroundBoss = loadSound("./assets/BossTheme.mp3");
  backgroundBoss2 = loadSound("./assets/BossTheme.mp3");
  tiroSound = loadSound("./assets/tiro.mp3");
  danoSound = loadSound("./assets/Ouch.mp3");
  hitLarry = loadSound("./assets/danoAranha.mp3");
  hitGiga = loadSound("./assets/danoSlime.mp3");
  flameSound = loadSound("./assets/gigaBarulho.mp3");
  winSound = loadSound("./assets/ta-Da!.mp3");
  loseSound = loadSound("./assets/vcPerdeu.mp3");
}

function setup() {
  canvas = createCanvas(1350, 630);
  invisibleGround = createSprite(675,600,1350,160);
  invisibleGround.visible = false;

  logo = createSprite(670, 100, 320, 100);
  logo.addImage("logo", logoImg)
  logo.scale = 0.6;

  morro1 = createSprite(0,480, 320, 100);
  morro2 = createSprite(665,480, 320, 100)
  morro3 = createSprite(1320,480, 320, 100)
  morro1.visible = false;
  morro2.visible = false;
  morro3.visible = false;

  batata = createSprite(675 ,315, 50,80);
  batata.addImage("DuqueBatata",batataImg);
  batata.addImage("DuqueBatata2",batataImg2);
  batata.addImage("DuqueBatataPulo",batataImgPulo);
  batata.addImage("DuqueBatataTiro",batataImgTiro1);
  batata.addImage("DuqueBatataTiro2",batataImgTiro2);
  batata.addImage("DuqueBatataTiro3",batataImgTiro3);

  batata.scale = 0.2;
  batata.visible = false;

  batata.setCollider("rectangle", -10,-50,350,500);

  gigaSlime = createSprite (675, 260, 100, 100);
  gigaSlime.addImage("GigaSlime",gigaSlimeImg1);
  gigaSlime.addImage("GigaSlimeCarregando",gigaSlimeImg2);
  gigaSlime.addImage("GigaSlimeAtacando",gigaSlimeImg3);

  gigaSlime.scale = 0.45;
  gigaSlime.visible = false;
  gigaSlime.setCollider("rectangle", -30,-32,500,750);

  larry = createSprite (675, 300, 100, 100);
  larry.addImage("LarryMuquiaranha",larryImg);

  larry.scale = 0.5;
  larry.visible = false;
  larry.debug = true;
  larry.setCollider("rectangle", -30,-32,500,750);

  nuvensGroup = createGroup();
  cenouraGroup = createGroup();
  morroGroup = createGroup();

  slimeGroup1 = createGroup();
  slimeGroup2 = createGroup();
  armandibulaGroup = createGroup();
  pratoGroup1 = createGroup();
  pratoGroup2 = createGroup();
  facaGroup = createGroup();
  flymeGroup = createGroup();
  teiaGroup = createGroup();

  morroGroup.add(morro1);
  morroGroup.add(morro2);
  morroGroup.add(morro3);

  batataLifeCount= createElement("h1");
  hordeCount= createElement("h1");

  form = new Form();
  form.display();
}

function draw() {
  // console.log();
  background(backgroundImg, 0, 0, width, height);
  
  if (gamestate === 0){
    if (!isIntro&& !introSound.isPlaying()){
      introSound.play();
      isIntro = true;
    }
  }

  if(gamestate >= 1 && gamestate<=15){
  batataLifeCount.html("Vida: "+batataLife)
  batataLifeCount.style('color:black'); 
  batataLifeCount.position(50,20);
  
  hordeCount.html("Horda: "+gamestate)
  hordeCount.style('color:black'); 
  hordeCount.position(50,70);

  logo.visible = false;
  batata.visible = true;
  batata.velocityY = batata.velocityY + 1;
  
  if (isGameOver === false){
  if(keyDown("d") && frameCount % 10 === 0){
    atiraCenoura1();
    batata.changeImage("DuqueBatataTiro",batataImgTiro1);
  }
  if(keyDown("a") && frameCount % 10 === 0){
    atiraCenoura2();
    batata.changeImage("DuqueBatataTiro2",batataImgTiro2);
  }
  if(keyDown("w") && frameCount % 10 === 0){
    atiraCenoura3();
    batata.changeImage("DuqueBatataTiro3",batataImgTiro3);
  }
  if(keyDown("s") && frameCount % 10 === 0){
    atiraCenoura4();
    batata.changeImage("DuqueBatata",batataImg);
  }
  
  moveBatata();
  }
  }

  if(gamestate >= 1 && gamestate<=7){
    if(!backgroundMusic.isPlaying()){
      backgroundMusic.play();
      // backgroundMusic.setVolume(0.5);
    }
  }


  if(gamestate >= 1 && gamestate<=14 && gamestate != 8){
    if(slimeGroup1.collide(cenouraGroup)){
      handleMonsterCollision(slimeGroup1,slime);
    }
    if(slimeGroup2.collide(cenouraGroup)){
      handleMonsterCollision(slimeGroup2, slime2);
    }
    
    if(slimeGroup1.collide(batata)){
      handleGameOver(slimeGroup1);
    }
    if(slimeGroup2.collide(batata)){
      handleGameOver(slimeGroup2);
    }
  
    spawnSlime1();
    if(slimeGroup1.collide(morro2)){
      slime.velocityX = slime.velocityX -3;
      slime.changeImage("Slime2",slimeImg2);
    }
    if(slimeGroup1.collide(morro1)){
      slime.velocityX = slime.velocityX +3;
      slime.changeImage("Slime",slimeImg);
    }
  
    spawnSlime2();
    if(slimeGroup2.collide(morro2)){
      slime2.velocityX = slime2.velocityX +3;
      slime2.changeImage("Slime",slimeImg);
    }
    if(slimeGroup2.collide(morro3)){
      slime2.velocityX = slime2.velocityX -3;
      slime2.changeImage("Slime2",slimeImg2);
    }

    spawnNuvens();
  }
  if(monsterKillCount >= 2 && gamestate === 1){
    gamestate = 2;
  }

  if(gamestate >=2 && gamestate<=14 && gamestate != 8){
    spawnArmandibula();
    if(armandibulaGroup.collide(cenouraGroup)){
      handleMonsterCollision(armandibulaGroup,armandibula);
    }
    if(armandibulaGroup.collide(batata)){
      armandibula.changeImage("ArmandibulaAcordado",armandibulaImg2);
      if(frameCount%5 === 0){
        handleGameOver(armandibulaGroup);
      }
    }
  }

  if(monsterKillCount >= 7 && gamestate === 2){
    gamestate = 3;
  }
  if(monsterKillCount >= 15 && gamestate === 3){
    gamestate = 4;
  }

  if(gamestate >=4 && gamestate<=14 && gamestate != 8){
    spawnPrato1();
    if(pratoGroup1.collide(cenouraGroup)){
      handleMonsterCollision(pratoGroup1,prato);
      isPratoAlive1 = false;
    }
    if(pratoGroup1.collide(batata)){
      handleGameOver(pratoGroup1);
      isPratoAlive1 = false;
    }

    spawnPrato2();
    if(pratoGroup2.collide(cenouraGroup)){
      handleMonsterCollision(pratoGroup2,prato2);
      isPratoAlive2 = false;
    }
    if(pratoGroup2.collide(batata)){
      handleGameOver(pratoGroup2);
      isPratoAlive2 = false;
    }

    if(facaGroup.collide(batata)){
      handleGameOver(facaGroup);
    }

    if(frameCount% 200 === 0){
      atiraFaca1();
      atiraFaca2();
    }
  }

  if(monsterKillCount >= 25 && gamestate === 4){
    gamestate = 5;
  }
  if(monsterKillCount >= 35 && gamestate === 5){
    gamestate = 6;
  }
  if(monsterKillCount >= 45 && gamestate === 6){
    gamestate = 7;
  }
  if(monsterKillCount >= 50 && gamestate === 7){
    gamestate = 8;
    isGigaSlimeAlive = true;
  }

  if(gamestate === 8){
    slimeGroup1.destroyEach();
    slimeGroup2.destroyEach();
    armandibulaGroup.destroyEach();
    pratoGroup1.destroyEach();
    pratoGroup2.destroyEach();
    facaGroup.destroyEach();
    nuvensGroup.destroyEach();
    backgroundMusic.stop();

    if(!backgroundBoss.isPlaying()){
      backgroundBoss.play();
    }

    if (isBatataTeleported === false){
    batata.x = 100;
    isBatataTeleported = true;
    }
    
    if (isGigaSlimeAlive === true){
      gigaSlime.visible = true;
      showBossLife(gigaSlimeLife);
      flamethrower();
      
      push();
      textSize(25);
      textFont("papyrus");
      fill("black");
      text("Giga-Slime", 605, 70);
      pop();

      gigaSlime.x = 675;
      gigaSlime.y = 260;
    }

    if(gigaSlime.collide(cenouraGroup)){
      handleGigaSlimeCollision();
      if (gigaSlimeState === 2){
        gigaSlimeState = 3;
        gigaSlime.changeImage("GigaSlimeAtacando",gigaSlimeImg3);
      }
    }
    if(gigaSlime.collide(batata) && isBatataTeleported === true){
      handleTouchBoss();
    }
  }

  if (gamestate >= 9 && gamestate <= 15){
    background(backgroundImg2, 0, 0, width, height);
    backgroundBoss.stop();
  }

  if(gamestate >= 9 && gamestate<=14){
    if(!backgroundMusic2.isPlaying()){
      backgroundMusic2.play(1);
      // backgroundMusic2.setVolume(0.5);
    }
  }

  if(monsterKillCount >= 10 && gamestate === 9){
    gamestate = 10;
  }

  if(gamestate >=10 && gamestate<=14){
    flyCollider = createSprite(100, 200, 10, 10);
    flyCollider.visible = false;
    flyCollider2 = createSprite(1250, 200, 10, 10);
    flyCollider2.visible = false;
    
    spawnFlyme();
    if(flymeGroup.collide(cenouraGroup)){
      handleMonsterCollision(flymeGroup,flyme);
    }
    if(flymeGroup.collide(batata)){
      handleGameOver(flymeGroup);
    }

    if(flymeGroup.collide(flyCollider)){
      flyme.velocityX = flyme.velocityX +3;
      flyme.changeAnimation("Flyme",flymeAni);
    }
    if(flymeGroup.collide(flyCollider2)){
      flyme.velocityX = flyme.velocityX -3;
      flyme.changeAnimation("Flyme2",flymeAni2);
    }
  }

  if(monsterKillCount >= 20 && gamestate === 10){
    gamestate = 11;
  }
  if(monsterKillCount >= 30 && gamestate === 11){
    gamestate = 12;
  }
  if(monsterKillCount >= 40 && gamestate === 12){
    gamestate = 13;
  }
  if(monsterKillCount >= 50 && gamestate === 13){
    gamestate = 14;
  }
  if(monsterKillCount >= 60 && gamestate === 14){
    gamestate = 15;
    isLarryAlive = true;
  }

  if(gamestate === 15){
    slimeGroup1.destroyEach();
    slimeGroup2.destroyEach();
    armandibulaGroup.destroyEach();
    pratoGroup1.destroyEach();
    pratoGroup2.destroyEach();
    facaGroup.destroyEach();
    flymeGroup.destroyEach();
    nuvensGroup.destroyEach();
    backgroundMusic2.stop();

    if (isBatataTeleported === false){
    batata.x = 100;
    isBatataTeleported = true;
    }
    
    if (isLarryAlive === true){
      if(!backgroundBoss2.isPlaying()){
        backgroundBoss2.play();
      }
      
      larry.visible = true;
      showBossLife(larryLife);
      
      if(frameCount% 50 === 0){
        stringShot();
      }
      
      push();
      textSize(25);
      textFont("papyrus");
      fill("black");
      text("Larry, o Muquiaranha", 565, 70);
      pop();

      larry.x = 675;
      larry.y = 300;
    }

    if(larry.collide(cenouraGroup)){
      handleLarryCollision();
    }
    if(larry.collide(batata) && isBatataTeleported === true){
      handleTouchBoss();
    }
    if(teiaGroup.collide(batata)){
      handleGameOver(teiaGroup);
    }
  }
  
  batata.collide(invisibleGround);
  batata.collide(morroGroup);

  if(cenouraGroup.isTouching(morroGroup) || cenouraGroup.isTouching(invisibleGround)){
    cenouraGroup.destroyEach();
  }

  drawSprites();
}

function moveBatata() {
  if (keyIsDown(LEFT_ARROW) && batata.x > 0) {
    batata.x -= 5;
    batata.changeImage("DuqueBatata2",batataImg2);
  }
  if (keyIsDown(RIGHT_ARROW) && batata.x < 1350) {
    batata.x += 5;
    batata.changeImage("DuqueBatata",batataImg);
  }
  if (keyDown(UP_ARROW) && batata.y >= 480 || keyDown(UP_ARROW) && batata.y === 390) {
    batata.velocityY = -18;
    batata.changeImage("DuqueBatataPulo",batataImgPulo);
  }
}

function spawnNuvens() {
  if (frameCount % 200 === 0) {
    nuvem = createSprite(0,100,40,10);
    nuvem.y = Math.round(random(10,200));
    nuvem.addImage(nuvemImg);
    nuvem.scale = 0.3;
    nuvem.velocityX = 1;
    
    nuvem.lifetime = 1410;
    
    nuvem.depth = batata.depth;
    batata.depth = batata.depth + 1;

    nuvem.depth = gigaSlime.depth;
    gigaSlime.depth = gigaSlime.depth + 1;

    nuvensGroup.add(nuvem);
    }
}

function atiraCenoura1(){
  cenoura= createSprite(0, 0, 50, 20);
  cenoura.y= batata.y-14;
  cenoura.x= batata.x+60;
  cenoura.addImage(cenouraImg);
  cenoura.scale=0.05;
  cenoura.velocityX= 12;

  cenoura.lifetime = 185;

  cenouraGroup.add(cenoura);
}
function atiraCenoura2(){
  cenoura2= createSprite(0, 0, 50,20);
  cenoura2.y= batata.y-14;
  cenoura2.x= batata.x-60;
  cenoura2.addImage(cenouraImg2);
  cenoura2.scale=0.05;
  cenoura2.velocityX= -12;

  cenoura2.lifetime = 185;

  cenouraGroup.add(cenoura2);
}
function atiraCenoura3(){
  cenoura3= createSprite(0, 0, 50,20);
  cenoura3.y= batata.y-40;
  cenoura3.x= batata.x+30;
  cenoura3.addImage(cenouraImg3);
  cenoura3.scale=0.06;
  cenoura3.velocityY= -12;

  cenoura3.lifetime = 185;

  cenouraGroup.add(cenoura3);
}
function atiraCenoura4(){
  cenoura4= createSprite(0, 0, 50,20);
  cenoura4.y= batata.y+40;
  cenoura4.x= batata.x+30;
  cenoura4.addImage(cenouraImg4);
  cenoura4.scale=0.06;
  cenoura4.velocityY= 12;

  cenoura4.lifetime = 185;

  cenouraGroup.add(cenoura4);
}

function handleMonsterCollision(monsterGroup, monster){
  if (batataLife > 0) {
     monsterKillCount = monsterKillCount+1;
  }

  tiroSound.play();
  pof= createSprite(monster.x+60, monster.y, 50,50);
  pof.addImage(pofImg);
  pof.scale = 0.25;
  pof.life=15;
  cenouraGroup.destroyEach();
  monsterGroup.destroyEach();
}

function handleGigaSlimeCollision(){
  gigaSlimeLife = gigaSlimeLife - 5;
  hitGiga.play();
  hitGiga.setVolume(2.5);
  if (gigaSlimeLife <= 0){
    gigaSlime.destroy();
    isGigaSlimeAlive = false;
    if (batataLife > 0) {
      monsterKillCount = 0;
      gamestate = 9;
      batataLife = 20;
      isBatataTeleported = false;
    }
  }
  cenouraGroup.destroyEach();
}

function handleLarryCollision(){
  larryLife = larryLife - 3;
  hitLarry.play();
  hitLarry.setVolume(2.5);
  if (larryLife <= 0){
    larry.destroy();
    isLarryAlive = false;
    if (batataLife > 0) {
      youWon();
    }
  }
  cenouraGroup.destroyEach();
}

function handleTouchBoss(){
    if (!danoSound.isPlaying){
      danoSound.play();
    }
    batataLife = 0;
    batata.destroy();
    isGameOver = true;
    gameOverLol();
}

function handleGameOver(monsterGroup){
  batataLife = batataLife -1;
  danoSound.play();
  monsterGroup.destroyEach();
  if (batataLife <= 0){
    batata.destroy();
    isGameOver = true;
    gameOver();
  }
}

function gameOver(){
  if (!isLost&& !loseSound.isPlaying()){
    loseSound.play();
    isLost = true;
  }
  
  swal (
    {
      title: `Ih... Você está frito!`,
      text: `Horda: ${gamestate}`,
      imageUrl: "./assets/Frito.png",
      imageSize:"150x150",
      confirmButtonText: "Jogar Novamente"
    },
    function(isConfirm){
      if(isConfirm){
        location.reload();
      }
    }
  )
}

function youWon(){
  backgroundBoss2.stop();
  
  if (!isWon&& !winSound.isPlaying()){
    winSound.play();
    isWon = true;
  }
  
  swal (
    {
      title: `Parabéns!!`,
      text: `Você derrotou todas as Hordas!`,
      imageUrl: "./assets/DuqueBatataFeliz.png",
      imageSize:"150x150",
      confirmButtonText: "Jogar Novamente"
    },
    function(isConfirm){
      if(isConfirm){
        location.reload();
      }
    }
  )
}

function gameOverLol(){
  if (!isLost&& !loseSound.isPlaying()){
    loseSound.play();
    isLost = true;
  }

  swal (
    {
      title: `Ih... o combate corpo a corpo não deu certo :(`,
      text: `O que você esperava? Horda: ${gamestate}`,
      imageUrl: "./assets/Frito.png",
      imageSize:"150x150",
      confirmButtonText: "Jogar Novamente"
    },
    function(isConfirm){
      if(isConfirm){
        location.reload();
      }
    }
  )
}

function spawnSlime1(){
  if(frameCount%400 === 0){
  slime = createSprite (300, 480, 50, 50);
  slime.addImage("Slime",slimeImg);
  slime.addImage("Slime2",slimeImg2);
  slime.scale = 0.12;
  slime.velocityX = 3;

  slime.setCollider("rectangle", -10,-50,500,500);
  slime.lifetime = 399;

  slimeGroup1.add(slime);
  }
}
function spawnSlime2(){
  if(frameCount%400 === 0){
  slime2 = createSprite (1000, 480, 50, 50);
  slime2.addImage("Slime2",slimeImg2);
  slime2.addImage("Slime",slimeImg);
  slime2.scale = 0.12;
  slime2.velocityX = -3;

  slime2.setCollider("rectangle", -10,-50,500,500);
  slime2.lifetime = 399;

  slimeGroup2.add(slime2);
  }
}

function spawnArmandibula(){
  if(frameCount%500 === 0){
  armandibula = createSprite (675, 390, 50, 50);
  armandibula.addImage("ArmandibulaDormindo",armandibulaImg);
  armandibula.addImage("ArmandibulaAcordado",armandibulaImg2);
  armandibula.scale = 0.12;
  armandibula.x = Math.round(random(480,850));

  armandibula.lifetime = 499;

  armandibulaGroup.add(armandibula);
  }
}

function spawnPrato1(){
  if(frameCount%800 === 0){
  prato = createSprite (0, 390, 50, 50);
  prato.addImage("Prato",pratoImg);
  prato.scale = 0.15;
  prato.x = Math.round(random(10,160));

  prato.setCollider("rectangle", -10,-50,350,500);
  isPratoAlive1 = true;
  prato.lifetime = 799;

  pratoGroup1.add(prato);
  }
}
function atiraFaca1(){
  if (isPratoAlive1 === true){
  faca= createSprite(0, 0, 50, 20);
  faca.y= prato.y-14;
  faca.x= prato.x+60;
  faca.addImage(facaImg);
  faca.scale=0.05;
  faca.velocityX= 9;

  faca.lifetime = 185;

  facaGroup.add(faca);
  }
}
function atiraFaca2(){
  if (isPratoAlive2 === true){
  faca2= createSprite(0, 0, 50, 20);
  faca2.y= prato2.y-14;
  faca2.x= prato2.x-60;
  faca2.addImage(facaImg2);
  faca2.scale=0.05;
  faca2.velocityX= -9;

  faca2.lifetime = 185;

  facaGroup.add(faca2);
  }
}
function spawnPrato2(){
  if(frameCount%800 === 0){
  prato2 = createSprite (0, 390, 50, 50);
  prato2.addImage("Prato2",pratoImg2);
  prato2.scale = 0.15;
  prato2.x = Math.round(random(1160,1340));

  prato2.setCollider("rectangle", -10,-50,350,500);
  isPratoAlive2 = true;
  prato2.lifetime = 799;

  pratoGroup2.add(prato2);
  }
}

function showBossLife(bossLife) {
  push();
  fill("white");
  rect(575, 15, 200, 20);
  fill("#f50057");
  rect(575, 15, bossLife, 20);
  noStroke();
  pop();
}

function flamethrower(){
  if (gigaSlimeLife === 160 && gigaSlimeState === 1 ||gigaSlimeLife === 120 && gigaSlimeState === 1|| gigaSlimeLife === 80 && gigaSlimeState === 1||gigaSlimeLife === 40 && gigaSlimeState === 1 ||gigaSlimeLife === 10 && gigaSlimeState === 1){
    gigaSlimeState = 2;
    gigaSlime.changeImage("GigaSlimeCarregando",gigaSlimeImg2);
  }
  if (gigaSlimeState === 3){
    if (isGigaSlimeAttacking === false){
    fogo = createSprite(305, 250, 100, 100);
    isGigaSlimeAttacking = true;
    }
    if (isGigaSlimeAttacking&& !flameSound.isPlaying()){
      flameSound.play();
      flameSound.setVolume(3);
    }

    fogo.addImage("Fogo", fogoImg);
    fogo.scale = 0.65;

    if (frameCount% 200 === 0){
      fogo.destroy();
      gigaSlimeState =1;
      flameSound.stop();
      gigaSlime.changeImage("GigaSlime",gigaSlimeImg1);
      isGigaSlimeAttacking = false;
    }
    if (fogo.collide(batata)){
      fogo.destroy();
      batataLife = batataLife -5;
       if (batataLife <= 0){
         batata.destroy();
         isGameOver = true;
         gameOver();
     }
      gigaSlimeState =1;
      gigaSlime.changeImage("GigaSlime",gigaSlimeImg1);
      flameSound.stop();
      isGigaSlimeAttacking = false;
    }
  }
}

function spawnFlyme(){
if(frameCount%400 === 0){
  flyme = createSprite (150, 200, 50, 50);
  flyme.addAnimation("Flyme",flymeAni);
  flyme.addAnimation("Flyme2",flymeAni2);
  flyme.scale = 0.1;
  flyme.velocityX = 3;

  flyme.setCollider("rectangle", -10,-50,500,500);
  flyme.lifetime = 399;

  flymeGroup.add(flyme);
  }
}

function stringShot(){
  if (isLarryAlive === true){
    teia= createSprite(0, 0, 50, 20);
    teia.y = Math.round(random(200,400));
    teia.x= larry.x-60;
    teia.addImage(teiaImg);
    teia.scale=0.12;
    teia.velocityX= -10;
  
    teia.lifetime = 105;
  
    teiaGroup.add(teia);
  }
}