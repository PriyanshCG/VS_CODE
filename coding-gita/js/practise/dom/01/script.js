


// var input = document.querySelector('input');
// input.addEventListener("keypress",(event)=>{
//     if(event.key == "Enter"){
//         namePrint();
//     }
// })

var btn = document.querySelector('#btn');
function nameCheck(){
    var name1 = document.querySelector('#name1');
    name1 = name1.value.split("");
    console.log(name1);
    name1.forEach((data)=>{
        if(data != "@" && data != "#"){
            console.log(data + "this particular element doesn't contain any symbol");
        }
        else{
             console.log(data + "this particular element does contain any symbol");
        }
    })
}

btn.addEventListener("click",nameCheck);

// var btn = document.querySelector('#btn');
// function nameCheck() {
//     var name1 = document.querySelector('#name1').value.split("");
//     name1.forEach((data) => {
//         if (data !== "@" && data !== "#") {
//             console.log(data + " this particular element doesn't contain any symbol");
//         } else {
//             console.log(data + " this particular element does contain a symbol");
//         }
//     });
// }

// btn.addEventListener("click", nameCheck);