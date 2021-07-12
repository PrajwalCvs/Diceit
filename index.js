var randomNumber1=Math.floor(Math.random()*6+1);
var random1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", random1);
var randomNumber2=Math.floor(Math.random()*6+1);
var random2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", random2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins"
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins"
}else{
    document.querySelector("h1").innerHTML="its a Draw"
}
//
// var randomNumber1=Math.floor(Math.random()*6+1);
// if(randomNumber1===6){
//     var randomNumber2=document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     var randomNumber3=document.querySelector(".img2").setAttribute("src","images/dice1.png");
//     document.querySelector("h1").innerHTML="player 1 wins";
//
//    }
//    if(randomNumber1===4){
//         var randomNumber2=document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     var randomNumber3=document.querySelector(".img2").setAttribute("src","images/dice6.png");
//     document.querySelector("h1").innerHTML="player 2 wins";
//    }
//    if(randomNumber1===2){
//         var randomNumber2=document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     var randomNumber3=document.querySelector(".img2").setAttribute("src","images/dice1.png");
//     document.querySelector("h1").innerHTML="player 1 wins";
//
//    }
//    if(randomNumber1===1){
//         var randomNumber2=document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     var randomNumber3=document.querySelector(".img2").setAttribute("src","images/dice5.png");
//             document.querySelector("h1").innerHTML="Its a draw";
//    }
//    if(randomNumber1===3){
//    var randomNumber2=document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     var randomNumber3=document.querySelector(".img2").setAttribute("src","images/dice4.png");
//     document.querySelector("h1").innerHTML="player 1 wins";}
//    if(randomNumber1===5){
//         var randomNumber2=document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     var randomNumber3=document.querySelector(".img2").setAttribute("src","images/dice6.png");
//     document.querySelector("h1").innerHTML="player 2 wins";}
