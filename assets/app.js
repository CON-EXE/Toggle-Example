'use strict'

let background_box = document.querySelector(".background-box");
let toggle_box = document.querySelector(".toggle-box");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");

toggle_box.onclick = function(){
    if (checkbox.checked) {
        circle.style.left = "100px";
        circle.style.backgroundColor = "#000";
        toggle_box.style.backgroundColor = "#fff";
        background_box.style.backgroundColor = "#000";
    } else {
        circle.style.left = "0px";
        circle.style.backgroundColor = "#fff";
        toggle_box.style.backgroundColor = "#000";
        background_box.style.backgroundColor = "#fff";
    }
}