//81
// function number(n) {

//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }

// }
// number(3);


//82
// function triangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row=row + "* ";
//     }
//     console.log(row);
//   }
// }

// triangle(4);


//83
// function numberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }

// numberTriangle(4);


//84
// function numberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += i + " ";
//     }
//     console.log(row);
//   }
// }

// numberTriangle(4);

//85
// function printTables() {
//   for (let i = 1; i <= 10; i++) {
//     console.log("Table of " + i + ":");
    
//     let result = "";
//     for (let j = 1; j <= 10; j++) {
//       result = result + (i * j) + " ";
//     }
    
//     console.log(result);
//   }
// }

// printTables();


//86
// let arr = [[1, 2, 3], [4, 5, 6]];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum = sum + arr[i][j];
//   }
//   result.push(sum);
// }
// console.log(result);


//87
// let n = 16;
// let root = Math.sqrt(n);
// if (root * root === n) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// for (let i=1; i<number;i++){
//   if(i*i==number){
//     console.log("Perfect square");
//     return;
//   }
// }
// console.log("not a perfect square");


//88
// let number =153;
// let arr=String(number).split("");
// let res =0;
// for(let i=0;i<arr.length;i++){
//   res=res+Number(arr[i])**arr.length;
// }
// if(number==res){
//   console.log("Number is armstrong");
// }
// else{
//   console.log("Number is not armstrong");
// }


//89
// let arr = ["hi", "hello", "a"];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i].length);
// }

// console.log(result); 


//other way
// function main(arr){
//   let n = arr.length;
//   let res = [];
//   for(let i = 0; i < n; i++){
//     res.push(arr[i].length); 
//   }
//   console.log(res);
// }
// main(["Hello", "he", "the"]);


//90
// let arr = ["hi", "hello", "hey"];
// let longest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].length > longest.length) {
//     longest = arr[i];
//   }
// }
// console.log(longest);


//other way
function main(arr){
  let n = length(arr);
  let res = "";
  let maxLength=0
  for(let i = 0; i < n; i++){
    let stringLength=length(arr[i]);
    if(stringLength>maxLength){
      res=arr[i];
      maxLength=stringLength;
    }
  }
  console.log(res);
}
main(["Hello", "he", "the"]);