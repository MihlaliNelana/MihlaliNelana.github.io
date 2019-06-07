var i = 0;
var txt = "Hey I'm Mihlali"; 
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 //for "to be added projects"
 function noRepo(){
    alert("This project is still under the pipelines, we will update soon."); 
}           