import cm from "./add.js"
import miles from "./sub.js"

function feet(a){
    return a * 3280.84;
}




export function cal(a){
   var a = feet(a);
   var b = cm(a);
   var c = miles(a);

   return [a, b, c];
}