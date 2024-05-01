function btn(){
    alert("hello world");
}

var flappy = document.getElementById('image');
var flappy2 = document.getElementById("container");
flappy2.addEventListener('click',function(){
console.log("bird was clicked");
flappy.classList.add("flappy-bird");
setTimeout(()=>{
    flappy.classList.remove("flappy-bird");
},5000);
});
function text_id(){
    document.getElementById("text_id").style.display="block";
    document.getElementById("playBtn").style.display="none";
    document.getElementById("image").style.display="block";
document.getElementById("pipes").style.display="block";
document.getElementsByClassName('checkbox').style.display="none";
document.getElementById("image").classList.remove("flappy-bird");
}