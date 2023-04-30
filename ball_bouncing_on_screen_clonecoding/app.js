import { Ball } from "./ball.js";
import { Block } from "./block.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas"); //캔버스 요소 만들기 
    this.ctx = this.canvas.getContext("2d"); //2d요소 만드는거 같음?
    
    document.body.appendChild(this.canvas);//body에 캔버스 요소 추가

    window.addEventListener("resize",this.resize.bind(this),false); 
    this.resize() ; 

    
    this.ball = new Ball(this.stageWidth,this.stageHeight,60,10); //ball 클래스 생성
    this.block = new Block(700, 30 ,300, 450); //block 클래스 생성

    window.requestAnimationFrame(this.animate.bind(this));
  } 
  resize() { //변경된 창크기 저장
    this.stageWidth = document.body.clientWidth ; 
    this.stageHeight = document.body.clientHeight; 
    this.canvas.width = this.stageWidth * 2; 
    this.canvas.height = this.stageHeight  * 2;
    this.ctx.scale(2,2) ;  
  }
  animate(t) { //animation 관련 함수인거 같음
    window.requestAnimationFrame(this.animate.bind(this)); 
    this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);//이동전 공 지우기
    this.block.draw(this.ctx)//블럭 그리기
    this.ball.draw(this.ctx,this.stageWidth,this.stageHeight,this.block);//공 그리기

  }
}
window.onload = () => {
  new App() ; 
}