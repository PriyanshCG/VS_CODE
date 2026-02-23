const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');

// Add click event listeners to change background color
redBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

greenBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

blueBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});















// // data type -> string
// var email = "abcxy@gmail.com";
// var txt = "@gmail.com";
// //Array data type conversion process (string to array)
// email = email.split(""); // always use this empty string to convert each character into a array
// console.log(email);
// txt = txt.split("");
// console.log(txt);
// //comparison -> index travelling -> starting position-> last index of email...
// // ending point decide -> mathematical operaction email.length txt.length..
// var j =9;
// function emailCheck(){
//     for(let i = email.length-1; i>=(email.length = txt.length); --i){
//         if(email[i] == txt[j]){
//             console.log("both character in the given array are equal" + email[i]  + " " + txt[j]);
//             --j;
//         }
//         else{
//             alert("the particular index contain a character which is not same" + email[i] + " " + txt[j]);
//             j=9;
//         }
//     }
// };
// emailCheck();


// //data will be used in two ways...
// var name = "sandeep@m#";
// name1 = name1.split("");

// //travel-> starting from the zeroth index -> name array...

// function nameCheck(){
// name1.forEach((data)=>{
//     if(data != "!" && data != "@" && data != "&"){
//         console.log("the given character doesn't contain any special character symbols" + data );
//     }
//     else{
//         console.log("the current character is equal to one of the given special character " + data);
//     }
// })
// };

// nameCheck();