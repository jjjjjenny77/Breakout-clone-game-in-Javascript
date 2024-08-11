"use strict"
const GameWidth = 800, GameHeight = 590;
const COLORS= ["#FFC1BB ", "#FDFFBB ", "#C4FFBB ", "#BBF7FF  ", "#E5BBFF "];
const BRICK_SPACING = 10;
const BRICK_WIDTH = 88.7;
const BRICK_HEIGHT = 40;
const BRICK_COLS = 7;
const BRICK_OFFSET = 20;
const BRICK_XSTART = 10;
const BRICK_YSTART = 20;
const BALL_WIDTH = 30;
const STICK_WIDTH = 150;
const STICK_HEIGHT = 30;
const PADDLE_OFFSET = 10;
const PANEL_WIDTH = (BRICK_WIDTH+BRICK_SPACING)*BRICK_COLS+BRICK_SPACING;
const PANEL_HEIGHT = Math.floor(PANEL_WIDTH*0.75);

//設定遊戲區域
let container = document.getElementById("container")
container.style.width = GameWidth + "px";
container.style.height = GameHeight + "px";

let point = 0;

class Component {
	constructor(){
		this.coor = {x:GameWidth/2, y:GameHeight/2}
		this.node = document.createElement('div');
		container.appendChild(this.node);

	}
	setXY(x, y) {
		this.coor.x = x;
		this.coor.y = y;
		this.node.style.left = x + "px";
		this.node.style.top = y + "px";
	}
}

//設定磚塊顏色以及變色機制
class Brick extends Component {
	constructor(){
		super();
		this.level = Math.floor(Math.random()*5)+1;
		this.node.className = 'Brick';
		this.node.style.display = "flex";
		this.node.style.width = BRICK_WIDTH + "px";
		this.node.style.height = BRICK_HEIGHT + "PX";
		this.node.style.backgroundColor = COLORS[this.level - 1];
	}
	check(){
		this.node.style.backgroundColor = COLORS[this.level - 1];
		if(this.level == 0){
			this.node.style.display = "none";
		}
	}
}

//創造出24個磚塊，並且每8個換一行
let brick00 = new Brick();
brick00.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 0,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick01 = new Brick();
brick01.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 1,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick02 = new Brick();
brick02.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 2,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick03 = new Brick();
brick03.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 3,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick04 = new Brick();
brick04.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 4,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick05 = new Brick();
brick05.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 5,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick06 = new Brick();
brick06.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 6,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick07 = new Brick();
brick07.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 7,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 0);
let brick08 = new Brick();
brick08.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 0,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick09 = new Brick();
brick09.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 1,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick10 = new Brick();
brick10.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 2,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick11 = new Brick();
brick11.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 3,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick12 = new Brick();
brick12.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 4,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick13 = new Brick();
brick13.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 5,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick14 = new Brick();
brick14.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 6,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick15 = new Brick();
brick15.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 7,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 1);
let brick16 = new Brick();
brick16.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 0,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick17 = new Brick();
brick17.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 1,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick18 = new Brick();
brick18.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 2,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick19 = new Brick();
brick19.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 3,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick20 = new Brick();
brick20.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 4,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick21 = new Brick();
brick21.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 5,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick22 = new Brick();
brick22.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 6,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);
let brick23 = new Brick();
brick23.setXY(
	BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING) * 7,
	BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING) * 2);

//創造接住球的棍子
class Stick extends Component {
	constructor(){
		super();
		this.node.className = 'Stick';
		this.node.style.top = GameHeight - STICK_HEIGHT + "px";
		this.setXY(GameWidth / 2.5);//
	}
	setXY(x){
		this.coor.x = x;
		if(x > GameWidth - STICK_WIDTH)
		{
		x = GameWidth - STICK_WIDTH;
		}
		this.node.style.left = x + "px";
	}
}
class Ball extends Component {
	constructor(){
		super();
		this.node.className = 'Ball';
		this.offset = {x:2, y:3};
	}
	move(){
		//小球與垂直邊界以及水平邊界的碰撞判斷
		let nx = this.coor.x + this.offset.x;
		let ny = this.coor.y + this.offset.y;
		if(nx < 0){	nx = 0; this.offset.x = 2};
		if(ny < 0){	ny = 0; this.offset.y = 2};
		if(nx > GameWidth - BALL_WIDTH){
			nx = GameWidth - BALL_WIDTH;
			this.offset.x = -2;
		}
		//小球與棍子的碰撞檢測
		if(ny > GameHeight - STICK_HEIGHT - BALL_WIDTH &&
		nx > stick.coor.x && nx < stick.coor.x + STICK_WIDTH)
		{
			ny = GameHeight - STICK_HEIGHT - BALL_WIDTH;
			this.offset.y = -3;
		}
		//當小球觸碰到下邊界時，提示“You were dead!”，重新重新整理頁面
		else if(ny > GameHeight - BALL_WIDTH)
		{
			ny = GameHeight - BALL_WIDTH;
			this.offset.y = 0;
			this.offset.x = 0;
			alert("You were dead!");
			location.reload();
		}
		//小球與磚塊的碰撞檢測
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*7 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*7 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick23.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick23.level -= 1;
			brick23.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*6 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*6 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick22.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick22.level -= 1;
			brick22.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*5 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*5 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick21.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick21.level -= 1;
			brick21.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*4 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*4 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick20.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick20.level -= 1;
			brick20.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*3 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*3 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick19.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick19.level -= 1;
			brick19.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*2 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*2 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick18.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick18.level -= 1;
			brick18.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*1 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*1 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick17.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick17.level -= 1;
			brick17.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*0 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*0 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*2 + BRICK_HEIGHT + 2 &&
		brick16.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick16.level -= 1;
			brick16.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*7 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*7 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick15.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick15.level -= 1;
			brick15.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*6 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*6 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick14.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick14.level -= 1;
			brick14.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*5 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*5 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick13.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick13.level -= 1;
			brick13.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*4 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*4 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick12.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick12.level -= 1;
			brick12.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*3 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*3 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick11.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick11.level -= 1;
			brick11.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*2 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*2 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick10.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick10.level -= 1;
			brick10.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*1 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*1 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick09.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick09.level -= 1;
			brick09.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*0 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*0 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*1 + BRICK_HEIGHT + 2 &&
		brick08.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick08.level -= 1;
			brick08.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*7 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*7 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick07.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick07.level -= 1;
			brick07.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*6 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*6 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick06.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick06.level -= 1;
			brick06.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*5 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*5 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick05.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick05.level -= 1;
			brick05.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*4 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*4 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick04.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick04.level -= 1;
			brick04.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*3 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*3 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick03.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick03.level -= 1;
			brick03.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*2 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*2 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick02.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick02.level -= 1;
			brick02.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*1 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*1 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick01.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick01.level -= 1;
			brick01.check();
		}
		if(nx > BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*0 &&
		nx < BRICK_XSTART + (BRICK_WIDTH + BRICK_SPACING)*0 + BRICK_WIDTH &&
		ny > BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 &&
		ny < BRICK_YSTART + (BRICK_HEIGHT + BRICK_SPACING)*0 + BRICK_HEIGHT + 2 &&
		brick00.node.style.display != "none")
		{
			this.offset.y = 3;
			point++;
			brick00.level -= 1;
			brick00.check();
		}
		super.setXY(nx, ny);
	}
}

let ball = new Ball();
setInterval(function(){ball.move();},10);//設定球的移動速度
let stick = new Stick();

//讓棍子跟著滑鼠移動
container.addEventListener("mousemove", function(e){
	var e = e||event;
	stick.setXY(e.offsetX);
});