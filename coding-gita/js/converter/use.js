import {cal} from "./cal.js"


var a = document.querySelector('.ip1');
// var b = document.querySelector(".ip2");
var btn = document.querySelector("button");
var miles = document.querySelector(".miles");
var feet = document.querySelector(".feet");
var cm = document.querySelector(".cm");


btn.addEventListener("click", ()=>{
    var x = parseInt(a.value);

    var arr = cal(x);

    console.log(arr);

    miles.textContent = arr[2];
    feet.textContent = arr[0];
    cm.textContent = arr[1];
})