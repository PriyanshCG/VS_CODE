// Q21 Count Digits in a Number

// function countDigits(num) {
//     if (num < 0) {
//         num = -num;
//     }
//     let count = 0;
//     while (num > 0) {
//         num = Math.floor(num / 10); 
//         count++;
//     }
//     return count;
// }
// let input = parseInt(prompt("Give N : "));
// let result = countDigits(input);
// console.log("Total digits =", result);

//Q22 sum of digits
// function sumOfDigits(num) {
//     num = Math.abs(num);  
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;     
//         sum = sum + digit;      
//         num = Math.floor(num / 10); 
//     }
//     return sum;
// }
// let num = parseInt(prompt("Give N : "));
// console.log("Sum of digits =", sumOfDigits(num));



//Q23 product of digits
// function productOfDigits(num) {
//     num = Math.abs(num);  
//     let product = 1;
//     while (num > 0) {
//         let digit = num % 10;     
//         product = product * digit;    
//         num = Math.floor(num / 10);  
//     }

//     return product;
// }
// let input = parseInt(prompt("Give N : "));
// console.log("Product of digits =", productOfDigits(input));



// 24
// function reverseNumber(num){
//     let original = num;
//     num = Math.abs(num);

//     if(num % 10 === 0){
//         console.log("Number ends with 0, reverse not allowed!");
//         return;
//     }

//     let reverse = 0;
//     while(num > 0){
//         let digit = num % 10;
//         reverse = reverse * 10 + digit;
//         num = Math.floor(num/10);
//     }

//     console.log("Absolute value of input=", Math.abs(original));
//     console.log("Reversed number=", reverse);
// }
// let n = parseInt(prompt("Enter a number : "));
// reverseNumber();


//25

// function checkPalindrome(num) {
//     let reverse = 0;
//     let original = num;   // store original number

//     num = Math.abs(num);  // handle negative numbers

//     while (num > 0) {
//         let digit = num % 10;
//         reverse = reverse * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     if (original === reverse) {
//         console.log("Yes, it's a palindrome");
//     } else {
//         console.log("No, it's not a palindrome");
//     }
// }
// let n = parseInt(prompt("enter a number"));
// checkPalindrome(n);


//26

// function primeNumberCheck(num){
//     if(num==2 || num==3){
//         console.log("yes it prime");
        
//     }
//      else if(num%2!=0 && num%3!=0){
//         console.log(" yes it is  prime num");
//     }
//     else{
//         console.log("it is not  prime number");
//     }
//   }
// primeNumberCheck(8);

// 27
// function primeNumberCheck(num) {
//     if (num < 2) {
//         return false;
//     }
//     if (num == 2 || num == 3) {
//         return true;
//     }
//     if (num % 2 != 0 && num % 3 != 0) {
//         return true;
//     }
//     return false;
// }
// let N = parseInt(prompt("Enter N : "));
// for (let i = 1; i <= N; i++) {
//     if (primeNumberCheck(i)) {
//         console.log(i);
//     }
// }




//28
// function printFibonacci(n) {
//     let a = 0, b = 1;
//     console.log(a); 
//     if (n > 1) console.log(b); 

//     for (let i = 2; i < n; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }
// printFibonacci(10);

// let n = 5
// let res=[];
// for (let i=1; i<=n; i++){
//     if(i==1){
//         res.push(0);
//         continue;
//     }
//     if(i==2){
//         res.push(1);
//         continue;
//     }
//     res.push(res[i-3] + res[i-2]) 
// }
// console.log(res);


//29
// let f = 33;
// let s = 11;

// let smallest = Math.min(f,s);

// for(let i=smallest;i>=1;i++){
//     if((f%i==0)&&(s%i==0)){
//         console.log(i);
//         return;
//     }
// }


//30
// function findLCM(a, b) {
//   let max = Math.max(a, b);
//   let step = max;
//   while (true) {
//     if (max % a === 0 && max % b === 0) {
//       return max;
//     }
//     max += step;
//   }
// }
// const a = 4;
// const b = 6;

// console.log(`LCM of ${a} and ${b} is ${findLCM(a, b)}`);
