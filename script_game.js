let enemyImg = [
  'assets/meteorite.png',
  'assets/meteorite_red.png',
  'assets/meteorite_new.png'
]

let bonusImg = [
  'assets/planet1.png',
  'assets/planet2.png',
  'assets/planet3.png',
  'assets/planet4.png'
]


var hp = 3;
var score = 0;
var enemyUp = 0;
var bonusUp = 0;
var speed = 0.12
function bonSpawn() {
  let bonusProg = document.createElement("img");
  var rand = Math.floor(Math.random()*bonusImg.length);
  bonusProg.setAttribute("src", bonusImg[rand]);
  
  bonusProg.setAttribute("class", "bonus");
  document.getElementById("bonus_spawn");
  let bonus_spawn = document.getElementById("bonus_spawn");
  bonus_spawn.append(bonusProg);


  bonusProg.style.marginTop = "0";
  bonusProg.style.width = Math.floor(Math.random() * 10) + "%";
  bonusProg.style.marginLeft = Math.floor(Math.random() * 100) + "%";
  bonusProg.style.opacity = ".99";
  
  
  Interval1 = setInterval(function () {
    var bonusSpeed = Math.random()* (0.2 - 0.005) + 0.005;
    bonusLeft = parseInt(getComputedStyle(bonusProg).marginLeft)
    bonusUp += bonusSpeed;
    bonusProg.style.marginTop = bonusUp + "%";
    var styleLeftJWST = getComputedStyle(document.getElementById("jwst"));
    var jwstLeft = parseInt(styleLeftJWST.marginLeft);

      var L = (jwstLeft - 30)
      var N = (jwstLeft + 130)
      const jwstHitbox = [...Array(N + 1).keys()].slice(L); 


    if (bonusUp >= 40 && bonusUp <= 50 && jwstHitbox.includes(bonusLeft) == true) {
      // if (jwstHitbox.includes(bonusLeft) == true) {
          bonusProg.remove();
          bonusUp = 0;
          speed += 0.03
          clearInterval(Interval1);
          score += 1;
          bonSpawn();
    }

    // }
    if (bonusUp >= 60) {
      console.log(bonusUp)
      bonusProg.remove();
      clearInterval(Interval1);
      bonusUp = 0;
      bonSpawn();
    } 
  }, 5);
}



function enemySpawn() {
  document.getElementById("hp").innerHTML = hp + '❤';
  document.getElementById("score").innerHTML = score + '🥇';
  if (hp == 0) {
    alert('Гра завершена. Ви програли!')
    clearInterval(Interval);
    enemyProg.remove();
    return;
  }
  let enemyProg = document.createElement("img");
  var rand = Math.floor(Math.random()*enemyImg.length);
  enemyProg.setAttribute("src", enemyImg[rand]);
  
  enemyProg.setAttribute("class", "enemy");
  document.getElementById("enemy_spawn");
  let enemy_spawn = document.getElementById("enemy_spawn");
  enemy_spawn.append(enemyProg);


  enemyProg.style.marginTop = "0";
  enemyProg.style.width = Math.floor(Math.random() * 10) + "%";
  enemyProg.style.marginLeft = Math.floor(Math.random() * 100) + "%";
  enemyProg.style.opacity = ".99";
  
  
  Interval = setInterval(function () {
    enemyLeft = parseInt(getComputedStyle(enemyProg).marginLeft)
    enemyUp += speed;
    enemyProg.style.marginTop = enemyUp + "%";
    var styleLeftJWST = getComputedStyle(document.getElementById("jwst"));
    var jwstLeft = parseInt(styleLeftJWST.marginLeft);

      var L = (jwstLeft - 30)
      var N = (jwstLeft + 130)
      const jwstHitbox = [...Array(N + 1).keys()].slice(L); 


    if (enemyUp >= 40 && enemyUp <= 50) {
      if (jwstHitbox.includes(enemyLeft) == true) {
          console.log("Damage!");
          enemyProg.remove();
          enemyUp = 0;
          speed += 0.01
          clearInterval(Interval);
          hp -= 1;
          enemySpawn();
    }

    }
    if (enemyUp >= 60) {
      enemyProg.remove();
      clearInterval(Interval);
      enemyUp = 0;
      enemySpawn();
      speed += 0.005
    } 
  }, 10);
}



function startFunction() {
  enemySpawn();
  bonSpawn()
  jwstControl();
}

function jwstControl() {
  var left = 45;
  if (left < 90) {
    document.addEventListener("keydown", function (event) {
      if (event.code == "KeyA") {
        left -= 5;
        if (left > 4) {
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 5;
        }
      } else if (event.code == "KeyD") {
        left += 5;
        if (left < 86) {
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 85;
        }
        
      }
    });

}}
