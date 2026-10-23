'use strict'

let backgroundbox = document.querySelector(".background-box");
let toggle_box = document.querySelector(".toggle-box");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");

toggle_box.onclick = function(){
    if (checkbox.checked) {
        circle.style.left = "100px";
    } else {
        circle.style.left = "0px";
    }
}