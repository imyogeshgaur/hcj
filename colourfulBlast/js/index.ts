function initCanvas() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      ctx: canvas.getContext('2d'),
    };
  }
  
  const { canvas, ctx } = initCanvas();
  class Circle {
    x: number;
  
    y: number;
  
    radius: number;
  
    dx: number;
  
    dy: number;
  
    color: string;
  
    minRadius: number;
  
    constructor(
      x: number,
      y: number,
      radius: number,
      dx = 1,
      dy = 3,
      color = 'white',
      minRadius = 1,
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.dy = dy;
      this.dx = dx;
      this.minRadius = minRadius;
    }
  
    draw(): this {
      if (ctx !== null) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      return this;
    }
  
    update(arr: Circle[]) {
      if (this.y + this.radius > canvas.height) {
        this.dy = (-this.dy * Math.random()) / 2;
        this.dx = (Math.random() - 0.5) * 10;
        this.color = `hsl(${Math.random() * 360},100%,50%)`;
        const countOfCircle = Math.round(this.radius / 4);
        this.radius /= Math.random() * 8 + 2;
        for (let i = 0; i < countOfCircle; i += 1) {
          const radius = (Math.random() * this.radius) / 2;
          arr.push(
            new Circle(
              this.x - radius,
              this.y + this.radius,
              radius,
              (Math.random() - 0.5) * 10,
              -Math.random() * 2,
              `hsl(${Math.random() * 360},100%,50%)`,
            ),
          );
        }
      }
      this.dy += 0.06;
      this.y += this.dy;
      this.x += this.dx;
      return this;
    }
  }
  
  function initAnimation() {
    const circleArray: Circle[] = [];
    const maxCircle=Math.random()*canvas.width/40+5;
    for (let i = 0; i < maxCircle; i += 1) {
      const radius = Math.random() * 30 + 20;
      circleArray.push(
        new Circle(
          Math.random() * (canvas.width - radius * 2) + radius,
          0 - ((Math.random() * canvas.height) / 2 + radius),
          radius,
          (Math.random() - 0.5) * 2,
          0.5,
        ),
      );
    }
    return circleArray;
  }
  let circleArray = initAnimation();
  
  setInterval(() => {
    circleArray = [...circleArray, ...initAnimation()];
  }, 1500);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circleArray = initAnimation();
  });
  function animation() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    circleArray
      .filter((c) => c.radius > c.minRadius)
      .forEach((circle) => circle.update(circleArray).draw());
    requestAnimationFrame(animation);
  }
  animation();
  