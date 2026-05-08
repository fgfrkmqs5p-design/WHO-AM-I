let bg, lines, face, face2;
let dots = [];
let showDots = true;

function preload() {
  bg = loadImage("./asstes/background.png");
  lines = loadImage("./asstes/lines.png");
  face = loadImage("./asstes/face.png");
  face2 = loadImage("./asstes/secondface.png");
}

function setup() {
  createCanvas(800, 1000);
}

function draw() {
  background(255);

  // 背景
  image(bg, 0, 0, width, height);
  image(lines,0,0,width,height);
 
  // 
  for (let i = 0; i < 2; i++) {
    dots.push({
      x: mouseX + random(-150, 150),
      y: mouseY + random(-150, 150),
      size: random(3, 10)
    });
  }

  // 
  if (dots.length > 200) {
    dots.splice(0, 2);
  }

  // 黑点
  if (showDots) {
    noStroke();
    fill(0);

    for (let d of dots) {
      // 吸向鼠标
      d.x += (mouseX - d.x) * 0.001;
      d.y += (mouseY - d.y) * 0.001;

      circle(d.x, d.y, d.size);
    }
  }

  // 人脸
  let dis = dist(mouseX, mouseY, width / 2, height / 2);
  let alpha = map(dis, 0, 400, 255, 80);

  tint(255, alpha);
  image(face, 400, 400, 790, 790);
  image(face2, 0, 0, 800, 800);
  noTint();

  // 问号
  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.05);
  textSize(300);
  fill(0);
  textAlign(CENTER, CENTER);
  text("?", 0, 0);
  pop();

  // 文字
  let c = 150 + sin(frameCount * 0.05) * 30;
  fill(c);
  textSize(130);
  textAlign(CENTER);

  let jitterX = random(-2, 2);
  let jitterY = random(-2, 2);

  text("Who am I", width / 2.65 + jitterX, height - 80 + jitterY);
}

// 
function mousePressed() {
  showDots = !showDots;
}