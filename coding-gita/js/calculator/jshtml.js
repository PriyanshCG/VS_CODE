import {cal} from "./cal.js"

var a = document.querySelector('.ip1');
var b = document.querySelector('.ip2');
var btn = document.querySelector('button');


btn.addEventListener("click",()=>{
    var x = parseInt(a.value);
    var y = parseInt(b.value);

    cal(x,y);
})