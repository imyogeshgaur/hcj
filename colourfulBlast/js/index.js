var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function initCanvas() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
        canvas: canvas,
        ctx: canvas.getContext('2d')
    };
}
var _a = initCanvas(), canvas = _a.canvas, ctx = _a.ctx;
var Circle = /** @class */ (function () {
    function Circle(x, y, radius, dx, dy, color, minRadius) {
        if (dx === void 0) { dx = 1; }
        if (dy === void 0) { dy = 3; }
        if (color === void 0) { color = 'white'; }
        if (minRadius === void 0) { minRadius = 1; }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dy = dy;
        this.dx = dx;
        this.minRadius = minRadius;
    }
    Circle.prototype.draw = function () {
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
    };
    Circle.prototype.update = function (arr) {
        if (this.y + this.radius > canvas.height) {
            this.dy = (-this.dy * Math.random()) / 2;
            this.dx = (Math.random() - 0.5) * 10;
            this.color = "hsl(" + Math.random() * 360 + ",100%,50%)";
            var countOfCircle = Math.round(this.radius / 4);
            this.radius /= Math.random() * 8 + 2;
            for (var i = 0; i < countOfCircle; i += 1) {
                var radius = (Math.random() * this.radius) / 2;
                arr.push(new Circle(this.x - radius, this.y + this.radius, radius, (Math.random() - 0.5) * 10, -Math.random() * 2, "hsl(" + Math.random() * 360 + ",100%,50%)"));
            }
        }
        this.dy += 0.06;
        this.y += this.dy;
        this.x += this.dx;
        return this;
    };
    return Circle;
}());
function initAnimation() {
    var circleArray = [];
    var maxCircle = Math.random() * canvas.width / 40 + 5;
    for (var i = 0; i < maxCircle; i += 1) {
        var radius = Math.random() * 30 + 20;
        circleArray.push(new Circle(Math.random() * (canvas.width - radius * 2) + radius, 0 - ((Math.random() * canvas.height) / 2 + radius), radius, (Math.random() - 0.5) * 2, 0.5));
    }
    return circleArray;
}
var circleArray = initAnimation();
setInterval(function () {
    circleArray = __spreadArrays(circleArray, initAnimation());
}, 1500);
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circleArray = initAnimation();
});
function animation() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
    circleArray
        .filter(function (c) { return c.radius > c.minRadius; })
        .forEach(function (circle) { return circle.update(circleArray).draw(); });
    requestAnimationFrame(animation);
}
animation();
