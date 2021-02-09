document.addEventListener("keypress",function(){
  if(event.key=="w")
  {
  var audio=new Audio('crash.mp3');
  audio.play();
  }
  if(event.key=="a")
  {
  var audio=new Audio('kick-bass.mp3');
  audio.play();
  }
  if(event.key=="s")
  {
  var audio=new Audio('snare.mp3');
  audio.play();
  }
  if(event.key=="d")
  {
  var audio=new Audio('tom-1.mp3');
  audio.play();
  }
  if(event.key=="j")
  {
  var audio=new Audio('tom-2.mp3');
  audio.play();
  }
  if(event.key=="k")
  {
  var audio=new Audio('tom-3.mp3');
  audio.play();
  }
  if(event.key=="l")
  {
  var audio=new Audio('tom-4.mp3');
  audio.play();
  }
});
var l=document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  if(this.innerHTML=="w")
  {
  var audio=new Audio('crash.mp3');
  audio.play();
  }
  if(this.innerHTML=="a")
  {
  var audio=new Audio('kick-bass.mp3');
  audio.play();
  }
  if(this.className=="s drum")
  {
  var audio=new Audio('snare.mp3');
  audio.play();
  }
  if(this.className=="d drum")
  {
  var audio=new Audio('tom-1.mp3');
  audio.play();
  }
  if(this.className=="j drum")
  {
  var audio=new Audio('tom-2.mp3');
  audio.play();
  }
  if(this.className=="k drum")
  {
  var audio=new Audio('tom-3.mp3');
  audio.play();
  }
  if(this.className=="l drum")
  {
  var audio=new Audio('tom-4.mp3');
  audio.play();
  }
});
}
