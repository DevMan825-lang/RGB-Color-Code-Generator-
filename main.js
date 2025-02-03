function rgbColor(){
  const red = document.getElementById("red").value; 
  const green = document.getElementById("green").value; 
  const blue = document.getElementById("blue").value; 
  const color = 'rgb(' + red + ' , ' + green + ' , ' + blue + ')'; 
  document.body.style.backgroundColor = color; 
  document.getElementById("text").value = color; 
}
document.getElementById("red").addEventListener("input", rgbColor); 
document.getElementById("green").addEventListener("input", rgbColor); 
document.getElementById("blue").addEventListener("input", rgbColor);

function colorCode(){
  const copyText = document.getElementById("text"); 
  copyText.select();
  document.execCommand("copy"); 
} 
function reset(){
  location.reload(); 
}