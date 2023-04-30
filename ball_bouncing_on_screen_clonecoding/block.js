export class Block {//블럭 그리는 클래스
  constructor(width, hegiht,x,y) { 
    this.width = width ; //블럭 넓이 
    this.hegiht = hegiht ; //블럭 높이 
    this.x = x ; //블럭 x축 위치 
    this.y = y ; //블럭 y축 위치 
    this.maxX = width + x ; 
    this.maxY = hegiht + y ;
  }
  draw(ctx) {
    const xGap = 80 ; //그림자 관련값
    const yGap = 60 ; //그림자 관련값
    
    ctx.fillStyle = "#ff384e"; //블럭 그리기
    ctx.beginPath() ; 
    ctx.rect(this.x, this.y, this.width,this.hegiht);
    ctx.fill() ; 

    ctx.fillStyle = "#190f3a"; //블럭 그림자 그리기
    ctx.beginPath();
    ctx.moveTo(this.maxX,this.maxY) ;
    ctx.lineTo(this.maxX-xGap,this.maxY+yGap);
    ctx.lineTo(this.x-xGap,this.maxY+yGap);
    ctx.lineTo(this.x,this.maxY);
    ctx.fill();

    ctx.fillStyle = "#9d0919" ; //블럭 그림자 테두리 그리기
    ctx.beginPath();
    ctx.moveTo(this.x, this.y) ;
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x-xGap,this.maxY+yGap);
    ctx.lineTo(this.x-xGap,this.maxY+yGap-this.hegiht);
    ctx.fill();

  }
}