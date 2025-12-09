//31
// function lengthOfString(string) {
//   console.log(string.length);
// }
// lengthOfString("hello pajji");


//other method
// let str="javascrript"
// let count=0;

// while(str[count]){
//     count++;
// }
// console.log(count);



//32
// const str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//33

// let input = "HELLO WORLD"
// var count = 0;
// var vowels = "aeiouAEIOU";

// for (var i = 0; i < input.length; i++) {
//     if (vowels.indexOf(input[i])) {
//         count++;

//     }
// }

// other method
// let obj = {
//     a:1, A:1,
//     e:1, E:1,
//     i:1, I:1,
//     o:1, O:1,
//     u:1, U:1
// };

// let str = "Hello World";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] === 1) {
//         count++;
//     }
// }

// console.log("Total vowels:", count);


//34
// let input = "HELLO WORLD";
// let count = 0;

// for (let i = 0; i < input.length; i++) {
//     let ch = input[i].toLowerCase();

//     if ("bcdfghjklmnpqrstvwxyz".includes(ch)) {
//         count++;
//     }
// }

// console.log("Total consonants:", count);


//35
// function upperCase(str) {
//     console.log(str.toUpperCase());
// }
// upperCase("helloji123");

//otherway
// let str="Hello world";
// let res="";
// for(let i = 0; i<str.length;i++){
// let ascii =str.charCodeAt(i);
// if(ascii>=97 && ascii<= 122 ){
// ascii=ascii-32;
// }
// let char=String.fromCharCode(ascii);
// res=res+char;
// }
// console.log(res);

//36
// function lowercase(string){
//     let temp=string.toLowerCase();
//     console.log(temp);

// }

//37

// function reverseString(string) {
//     let reverse = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }
//     console.log(reverse);
// }

//38

// function palindrome(string){
//     let temp=string;
//     let reverse = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }
//     if(temp==reverse){
//         console.log("yes it's a palindrome");

//     }
//     else{
//         console.log("no it's not plaindrome");

//     }
// }

//39

// function CountA(string){
//     var count=0;
//     var temp=string.split("");
//     for(var i=0;i<string.length;i++){
//         if(temp[i]=="a" ||temp[i]=="A"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// CountA("Apple")

//40

// function removeSpaces(string) {
//   let temp = string.split(" ").join("");
//   console.log(temp);
// }
// removeSpaces("hello world");

// function removeSpaces(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             continue;
//         }
//         else {
//             result += str[i];
//         }
//     }

//     console.log(result);

// }
// removeSpaces("hello world");