const canvas = document.getElementById("p");
const ctx = canvas.getContext("2d");

let W,
  H,
  particles = [];
function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
}
addEventListener("resize", resize, { passive: true });
resize();

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
function init() {
  particles = [];
  const count = Math.round((W * H) / 50000);
  for (let i = 0; i < count; i++)
    particles.push({
      x: rand(0, W),
      y: rand(0, H),
      r: rand(0.6, 2.6),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.05, 0.25),
      life: rand(60, 300),
    });
}
init();

function tick() {
  ctx.clearRect(0, 0, W, H);
  ctx.globalCompositeOperation = "lighter";
  for (let p of particles) {
    p.x += p.vx;
    p.y -= p.vy * 0.6;
    p.life -= 1;
    if (p.life < 0) {
      p.x = rand(0, W);
      p.y = H + rand(0, 200);
      p.life = rand(60, 300);
    }
    let g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 20);
    g.addColorStop(0, "rgba(255,255,255,0.9)");
    g.addColorStop(0.2, "rgba(255,255,255,0.35)");
    g.addColorStop(0.6, "rgba(255,200,255,0.06)");
    g.addColorStop(1, "rgba(255,200,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(p.x - p.r * 20, p.y - p.r * 20, p.r * 40, p.r * 40);
  }
  ctx.globalCompositeOperation = "source-over";
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i],
        b = particles[j];
      let dx = a.x - b.x,
        dy = a.y - b.y,
        d = dx * dx + dy * dy;
      if (d < 90000) {
        ctx.strokeStyle =
          "rgba(255,255,255," + (0.12 - (d / 90000) * 0.12).toFixed(3) + ")";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);