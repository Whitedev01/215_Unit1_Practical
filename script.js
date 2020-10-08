var wrapperEle = document.body;

var numbers=[-30, 14, 66, 21, 72, -4];


function adding(numbers){
  var that= this;
  this.number = numbers;
  this.ele =document.createElement("div");
  this.ele.addEventListener("click", function(){
    that.addUp();
});
  adding.prototype.addUp=function(){
    this.number = this.number+1;
    this.ele.innerHTML=this.number;
};
  
  if(this.number < 0){
  this.ele.innerHTML = "The number is "+ this.number + " and is below 0";
}else if(this.number > 50){
  this.ele.innerHTML ="The number is "+ this.number + " and greater than 50";
}else if(this.number == 14){
  this.ele.innerHTML ="The number is "+ this.number + " and equal to 14";
}else{
  return
}
  wrapperEle.appendChild(this.ele);
}
  
for(var i = 0; i< numbers.length; i++){
  (new adding(numbers[i]));
}