// var heading=document.querySelector('h1');
// heading.addEventListener('click',function(){
//     heading.textContent="ClickedMe";
// });

let text=document.querySelector('h1');
var count=0;
text.addEventListener('click',()=>
{
text.textContent="helololo",
text.style.backgroundColor="red";


})
function change()
{
text.textContent="pri";
text.style.backgroundColor="white";
}
var id =setInterval(change,2000)

function add(){
    count++;
if(count<=10){
    console.log();
}
else{
    clearInterval(id)
}
}