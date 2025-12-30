// CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function rand(min,max){return Math.random()*(max-min)+min}

// FIREWORKS
function firework(){
  const x = rand(0,canvas.width);
  const y = rand(0,canvas.height/2);
  const color = `hsl(${rand(0,360)},100%,60%)`;

  for(let i=0;i<40;i++){
    ctx.beginPath();
    ctx.arc(x+rand(-60,60),y+rand(-60,60),2,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
  }
}
setInterval(firework,250);

// COUNTDOWN
const target = new Date("Jan 1, 2026 00:00:00").getTime();
const cd = document.getElementById("countdown");

setInterval(()=>{
  const now = new Date().getTime();
  const diff = target-now;

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  const s = Math.floor((diff/1000)%60);

  cd.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
},1000);

// Animated Special Thanks Message
const msg = document.getElementById("thankMessage");
document.getElementById("thankButton").onclick = () => {
    msg.classList.add("show");
    setTimeout(()=> msg.classList.remove("show"), 4000);
}
