var box = document.querySelector("#box");
var target = document.querySelector("#target");
var greeting = document.querySelector("#greeting");
var greetBox = document.querySelector("#greetBox");
var container = document.querySelector("#container");
var stars = document.querySelectorAll(".star");
var introElements = document.querySelectorAll(".intro");
var sphere = document.querySelector("#sphere");

box.addEventListener("dragend",function(e){

    this.style.top = `${e.clientY}px`;
    this.style.left = `${e.clientX}px`;
});
target.addEventListener("dragover", function(e){
    e.preventDefault();
});
target.addEventListener("drop",function(e){
    e.preventDefault();
    console.log("test");
    greeting.style.color = "green";
    greeting.classList.add("animation");
    stars.forEach(star => {
        star.style.display = "block";
    });
    introElements.forEach(introElement => {
        introElement.style.display = "none";
    });
    greetBox.style.display = "block";
    greetBox.classList.add("greetBoxAnimation");
    sphere.style.display = "block";

});
