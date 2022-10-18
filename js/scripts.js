window.onload = function() {

//let body = document.querySelector("body");
//button.onclick = function() {
    //body.style.backgroundColor = "black";
    //body.style.color = "white";  
//}

// let body = document.body;
// body.onclick = function() {
// body.style.backgroundColor = "black";
// body.style.color = "white";
// }

let dark = document.getElementById('dark');
dark.onclick = function() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
}

let light = document.getElementById('light');
light.onclick = function() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

let original = document.getElementById('original');
original.onclick = function() {
  document.body.style.fontSize = "12px";
}

let large = document.getElementById('large');
large.onclick = function() {
  document.body.style.fontSize = "75px";
}
}