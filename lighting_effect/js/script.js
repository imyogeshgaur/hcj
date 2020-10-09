var smoothTrail = function(c, cw, ch){
      this.init = function(){
        this.loop();
      };		
      var _this = this;
      this.c = c;
      this.ctx = c.getContext('2d');
      this.cw = cw;
      this.ch = ch;
      this.mx = 0;
      this.my = 0;
      
      this.trail = [];
      this.maxTrail = 200;
      this.mouseDown = false;
      
      this.ctx.lineWidth = .1;
      this.ctx.lineJoin = 'round';
      
      this.radius = 1;
      this.speed = 0.4;
      this.angle = 0;
      this.arcx = 0;
      this.arcy = 0;
      this.growRadius = true;
      this.seconds = 0;
      this.milliseconds = 0;			
      this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
      this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
      this.createPoint = function(x, y){					
        this.trail.push({
          x: x,
          y: y						
        });
      };
      this.updateTrail = function(){					
        
        if(this.trail.length < this.maxTrail){
          this.createPoint(this.arcx, this.arcy);
        }					
        
        if(this.trail.length >= this.maxTrail){
          this.trail.splice(0, 1);
        }					
      };
      this.updateArc = function(){
        this.arcx = (this.cw/2) + Math.sin(this.angle) * this.radius;
        this.arcy = (this.ch/2) + Math.cos(this.angle) * this.radius;					
        var d = new Date();
        this.seconds = d.getSeconds();
        this.milliseconds = d.getMilliseconds();
        this.angle += this.speed*(this.seconds+1+(this.milliseconds/1000));
        
        if(this.radius <= 1){
          this.growRadius = true;
        } 
        if(this.radius >= 200){
          this.growRadius = false;
        }
        
        if(this.growRadius){
          this.radius += 1;	
        } else {
          this.radius -= 1;	
        }
      };
      this.renderTrail = function(){
        var i = this.trail.length;					
        
        this.ctx.beginPath();
        while(i--){
          var point = this.trail[i];
          var nextPoint = (i == this.trail.length) ? this.trail[i+1] : this.trail[i];
          
          var c = (point.x + nextPoint.x) / 2;
          var d = (point.y + nextPoint.y) / 2;						
          this.ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
        };
        this.ctx.strokeStyle = 'hsla('+this.rand(170,300)+', 100%, '+this.rand(50, 75)+'%, 1)';	
        this.ctx.stroke();
        this.ctx.closePath();
        
      };			
      this.clearCanvas = function(){
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = 'rgba(0,0,0,.1)';
        this.ctx.fillRect(0,0,this.cw,this.ch);					
        this.ctx.globalCompositeOperation = 'lighter';
      };
      this.loop = function(){
        var loopIt = function(){
          requestAnimationFrame(loopIt, _this.c);
          _this.clearCanvas();
          _this.updateArc();
          _this.updateTrail();
          _this.renderTrail();							
        };
        loopIt();					
      };
      
    };
    var isCanvasSupported = function(){
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    };
    var setupRAF = function(){
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
      };
      
      if(!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback, element){
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      };
      
      if (!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id){
          clearTimeout(id);
        };
      };
    };			
      if(isCanvasSupported){
        var c = document.createElement('canvas');
        c.width = 400;
        c.height = 400;			
        var cw = c.width;
        var ch = c.height;	
        document.body.appendChild(c);	
        var cl = new smoothTrail(c, cw, ch);				
        setupRAF();
        cl.init();
      }
    