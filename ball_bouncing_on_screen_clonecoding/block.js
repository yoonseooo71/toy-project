export class Block {
  constructor(width, hegiht,x,y) {
    this.width = width ; 
    this.hegiht = hegiht ; 
    this.x = x ;
    this.y = y ; 
    this.maxX = width + x ; 
    this.maxY = hegiht + y ;
  }
  draw(ctx) {
    const xGap = 80 ; 
    const yGap = 60 ; 
    
    ctx.fillStyle = "#ff384e";
    ctx.beginPath() ; 
    ctx.rect(this.x, this.y, this.width,this.hegiht);
    ctx.fill() ; 

    ctx.fillStyle = "#190f3a";
    ctx.beginPath();
    ctx.moveTo(this.maxX,this.maxY) ;
    ctx.lineTo(this.maxX-xGap,this.maxY+yGap);
    ctx.lineTo(this.x-xGap,this.maxY+yGap);
    ctx.lineTo(this.x,this.maxY);
    ctx.fill();

    ctx.fillStyle = "#9d0919" ; 
    ctx.beginPath();
    ctx.moveTo(this.x, this.y) ;
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x-xGap,this.maxY+yGap);
    ctx.lineTo(this.x-xGap,this.maxY+yGap-this.hegiht);
    ctx.fill();

  }
}