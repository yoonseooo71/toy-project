export class Ball { //공이동 관련 클래스 
  constructor(stageWidth, stageHeight, radius, spead) { 
    this.radius = radius ; //공 반지름
    this.vx = spead ; //이동 x축 증가값
    this.vy = spead ; //이동 y축 증가값
    const diameter = this.radius * 2 ; //공 지름
    this.x = diameter + (Math.random() * stageWidth - diameter) ; //공의 x축 시작위치 
    this.y = diameter + (Math.random() * stageHeight - diameter) ; //공의 y축 시작위치 
  }

  draw(ctx, stageWidth, stageHeight, block) { //공 그리기 함수
    this.x += this.vx ; //x축 이동
    this.y += this.vy ; //y축 이동

    this.bounceWindow(stageWidth,stageHeight) ; 

    this.bouncBlock(block);

    ctx.fillStyle = "#fdd700" ; 
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth,stageHeight) { //공이 창에 부디쳤을때 함수 
    const minX =this.radius ;
    const maxX = stageWidth - this.radius ; 
    const minY = this.radius ; 
    const maxY = stageHeight - this.radius ; 
    if (this.x <= minX || this.x >= maxX) { // 공이 x축에 부디쳤을때
      this.vx *= -1 ; //방향 바꾸기
      this.x += this.vx ;
    } else if (this.y <= minY || this.y >= maxY) { // 공이 y축에 부디쳤을때
      this.vy *= -1 ; //방향 바꾸기
      this.y += this.vy ;
    }
  }

  bouncBlock(block){ //공이 블럭에 부디쳤을때 함수 
    const minX = block.x - this.radius ;
    const maxX = block.maxX + this.radius ; 
    const minY = block.y - this.radius ; 
    const maxY = block.maxY + this.radius ; 
    if (this.x > minX && this.x < maxX && this.y > minY && this.y <maxY) {
      const x1 = Math.abs(minX-this.x);
      const x2 = Math.abs(this.x - maxX);
      const y1 = Math.abs(minY-this.y);
      const y2 = Math.abs(this.y - maxY);
      const min1 = Math.min(x1,x2);
      const min2 = Math.min(y1,y2);
      const min = Math.min(min1,min2); //어느 면에 부디쳤는지 알기위한 변수
      if(min === min1) { //블럭 좌 or 우에 부디쳤을때
        this.vx *= -1 ; //방향 바꾸기
        this.x += this.vx ;
      } else if (min === min2) { //블럭 위 or 아래에 부디쳤을때
        this.vy *= -1 ; //방향 바꾸기
        this.y += this.vy ; 
      }
    } 
  }
}