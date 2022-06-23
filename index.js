const canvas=document.querySelector('canvas')
const c=canvas.getContext('2d')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
const gravity=1.5
class Player{
    constructor(){
       this.speed=10
        this.position={
            x:200,
            y:100
        }
        this.velocity={
            x: 0,
            y: 0

        }
        this.image=image;
        this.width=60
        this.height=90
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
    }
    update(){

         this.draw()
         this.position.x+=this.velocity.x
         this.position.y+=this.velocity.y



        this.velocity.y+=gravity




    }
}
class Platform{
  constructor({ x, y, img}){
    this.position={
       x,
       y
    }
    this.img=img;
    this.width=852;
    this.height=25;
  }
    draw(){
      c.drawImage(this.img,this.position.x,this.position.y)
    }

}
class Platforma{
  constructor({ x, y, img}){
    this.position={
       x,
       y
    }
    this.img=img;
    this.width=265;
    this.height=23;
  }
    draw(){
    /*  c.fillStyle='blue';
      c.fillRect(this.position.x,this.position.y,this.width,this.height);*/
      c.drawImage(this.img,this.position.x,this.position.y)
    }

}
class Dec{
  constructor({ x, y, img}){
    this.position={
       x,
       y
    }
    this.img=img;
    this.width=852;
    this.height=25;
  }
    draw(){
      c.drawImage(this.img,this.position.x,this.position.y)
    }


}
class Decg{
  constructor({ x, y, img}){
    this.position={
       x,
       y
    }
    this.img=img;

  }
    draw(){
      c.drawImage(this.img,this.position.x,this.position.y,35,35)
    }
  }
class Goal{
  constructor({ x, y, img}){
    this.position={
       x,
       y
    }
    this.img=img;
    this.width=50;
    this.height=50;
  }
    draw(){
      c.drawImage(this.img,this.position.x,this.position.y,this.width,this.height)
    }
  }
let imge= new Image();
imge.src='buildings.png';
let image=new Image();
image.src='boywalking.png';
let img=new Image();
img.src='platform.png';
let imga=new Image();
imga.src='platforma.png';
let imgg=new Image();
imgg.src='goal.png';
let imgw= new Image()
imgw.src='win.png'


let player= new Player();
let decs= [new Dec({x:0,y:180,img:imge}),new Dec({x:1500,y:180,img:imge})]
let platforms=[new Platform({x:0,y:550,img}),new Platform({x:852+500,y:550,img}),new Platform({x:2000+500,y:550,img}),new Platform({x:3200+500,y:550,img}),new Platform({x:4552,y:550,img}),new Platform({x:6700,y:550,img}),new Platform({x:6700+852,y:550,img})]
let platformas=[new Platforma({x:1800+500,y:400,img: imga}),new Platforma({x:750,y:350,img: imga}),new Platforma({x:5550,y:500,img: imga}),new Platforma({x:5850,y:300,img: imga}),new Platforma({x:6100,y:450,img: imga})]
let scrollout=0;
let scrollup=0
let goals=[new Goal({x:1250,y:350,img: imgg}),new Goal({x:2000,y:200,img: imgg}),new Goal({x:5525,y:50,img: imgg}),new Goal({x:6380,y:30,img: imgg})]
let score=0;
let showg=['yes','yes','yes','yes']
let decgs=[new Decg({x:0,y:0,img: imgg}),new Decg({x:40,y:0,img: imgg}),new Decg({x:80,y:0,img: imgg}),new Decg({x:120,y:0,img: imgg})]


function init(){
  scrollup=0
 scrollout=0;
 imge= new Image();
imge.src='buildings.png';
 image=new Image();
image.src='boywalking.png';
img=new Image();
img.src='platform.png';
imga=new Image();
imga.src='platforma.png';
imgg=new Image();
imgg.src='goal.png';
imgw= new Image()
imgw.src='win.png'

 player= new Player();
 decs= [new Dec({x:0,y:180,img:imge}),new Dec({x:1500,y:180,img:imge})]
 platforms=[new Platform({x:0,y:550,img}),new Platform({x:852+500,y:550,img}),new Platform({x:2000+500,y:550,img}),new Platform({x:3200+500,y:550,img}),new Platform({x:4552,y:550,img}),new Platform({x:6700,y:550,img}),new Platform({x:6700+852,y:550,img})]
 platformas=[new Platforma({x:1800+500,y:400,img: imga}),new Platforma({x:750,y:350,img: imga}),new Platforma({x:5550,y:500,img: imga}),new Platforma({x:5850,y:300,img: imga}),new Platforma({x:6100,y:450,img: imga})]
goals=[new Goal({x:1250,y:350,img: imgg}),new Goal({x:2000,y:200,img: imgg}),new Goal({x:5525,y:50,img: imgg}),new Goal({x:6380,y:30,img: imgg})]
 score=0;
 showg=['yes','yes','yes','yes']
 decgs=[new Decg({x:0,y:0,img: imgg}),new Decg({x:40,y:0,img: imgg}),new Decg({x:80,y:0,img: imgg}),new Decg({x:120,y:0,img: imgg})]



}
const keys={
right: {
    pressed: false
},
 left: {
    pressed: false
}}
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    decs.forEach(dec => {
      dec.draw()
    });
    platforms.forEach(platform => {
      platform.draw()
    });
    platformas.forEach(platforma => {
      platforma.draw()
    });
    for(i=0;i<=3;i++){
      goal=goals[i];
      if(showg[i]=='yes'){
      goal.draw()
    }
    }
    for(i=0;i<=3;i++){
      decg=decgs[i];
      if(showg[i]=='no'){
      decg.draw()
    }
    }
player.update()



if (keys.right.pressed && player.position.x<=550||keys.right.pressed && scrollout>=690 && player.position.x<=canvas.width-50){
   scrollout+=1
    player.velocity.x=player.speed
} else if(keys.left.pressed && player.position.x>=150||keys.left.pressed && player.position.x>=0 && scrollout<=0) {
    scrollout-=1
    player.velocity.x=-player.speed
}else {
  player.velocity.x=0
  if(keys.right.pressed && scrollout<=690){
    scrollout+=1;
    platforms.forEach(platform => {
      platform.position.x-=player.speed
    });
    decs.forEach(dec => {
      dec.position.x-=player.speed*0.33
    });
    platformas.forEach(platforma => {
      platforma.position.x-=player.speed
    });
    for(i=0;i<=3;i++){
      goal=goals[i];
      goal.position.x-=player.speed
    };

  }else if(keys.left.pressed && scrollout>0){
    if(scrollout>=0){
    scrollout-=1}
    platforms.forEach(platform => {
      platform.position.x+=player.speed
    });
    platformas.forEach(platforma => {
      platforma.position.x+=player.speed
    });
    decs.forEach(dec => {
      dec.position.x+=player.speed*0.33
    });
    for(i=0;i<=3;i++){
      goal=goals[i];
      goal.position.x+=player.speed;
    };
  }
}
//detecting collision
platforms.forEach((platform) => {



if(player.position.y+player.height<=platform.position.y && player.position.y+player.height+player.velocity.y>=platform.position.y
&& player.position.x+player.width>=platform.position.x && player.position.x<=platform.position.x+platform.width){
  player.velocity.y=0
  scrollup=0
}
});
for(i=0;i<=3;i++){
  goal=goals[i];
 if(player.position.y+45>=goal.position.y && player.position.y+45<=goal.position.y+goal.height
  &&player.position.x+30>=goal.position.x && player.position.x+30<=goal.position.x+goal.width)
{
  showg[i]='no'

}
}
platformas.forEach((platforma) => {



if(player.position.y+player.height<=platforma.position.y && player.position.y+player.height+player.velocity.y>=platforma.position.y
&& player.position.x+player.width>=platforma.position.x && player.position.x<=platforma.position.x+platforma.width){
  player.velocity.y=0
  scrollup=0
}
});
console.log(scrollout)
if(scrollout>=690 && showg[0]=='no' && showg[1]=='no' && showg[2]=='no' && showg[3]=='no'){
  //console.log("You won")
  c.drawImage(imgw,canvas.width*0.25,0)
}
if(player.position.y>canvas.height){
  init()
}
}


animate()
window.addEventListener('keydown',({keyCode})=>{
    
    switch(keyCode){
        case 38:
            console.log('up');
          if(scrollup<1){
            scrollup+=1
            player.velocity.y -=25;}
    break;
        case 39:
            console.log('right');
            keys.right.pressed=true
            break;
        case 40:
            console.log('down');
            break;
        case 37:
            console.log('left');
            keys.left.pressed=true
            break;

    }
})

window.addEventListener('keyup',({keyCode})=>{
    
    switch(keyCode){
        case 38:
            console.log('up');

            break;
        case 39:
            console.log('right');
           keys.right.pressed=false
            break;
        case 40:
            console.log('down');
            break;
        case 37:
            console.log('left');
            keys.left.pressed=false
            break;

    }
})
