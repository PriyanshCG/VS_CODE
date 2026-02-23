//71 Remove Even Numbers (Keep Only Odd)
//method1
// let arr = [1, 2, 3, 4, 5];
// let res2 = arr.filter((value)=>{
// return value%2!= 8;
// })
// console.log(res2);
 

//method2
// let arr = [1, 2, 3, 4, 5];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {  
//         result.push(arr[i]);
//     }
// }
// console.log(result); 


//method3
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         arr.splice(i,1);
//     }
// }


//72 Remove Duplicates
// function removeDuplicates(arr) {
// //     let b = {};
// //     let result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (!b[arr[i]]) {
// //             result.push(arr[i]);
// //             b[arr[i]] = true;
// //         }
// //     }
// //     return result;
// // }

// // let input = [1, 2, 2, 3, 3, 3];
// // console.log(removeDuplicates(input))


//73 Concatenate Two Arrays
// let array = [1,2,3,4];
// let array2 = [5,6,7,8];
// let combo = array.concat(array2);
// console.log(combo);


// let comibined = [...array, ...array2];
// console.log(comibined);

// let res =[];
// for(let i=0; i<array.length; i++){
//     res.push(array[i]);
// }
// for(let i=0; i<array2.length; i++){
//     res.push(array2[i]);
// }
// console.log(res);



//74 Intersection of Two Arrays (Common Elements)
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5];

// let obj = {};
// let result = [];

// for (let i = 0; i < arr1.length; i++) {
//   obj[arr1[i]] = true;
// }

// for (let i = 0; i < arr2.length; i++) {
//   if (obj[arr2[i]]) {
//     result.push(arr2[i]);
//     obj[arr2[i]] = false;
//   }
// }

// console.log(result); 


//75 Rotate Array Right by 1
// let arr = [1, 2, 3, 4];
// let last = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = last;
// console.log(arr); 

//76 Rotate Array Left by 1
// let arr = [1, 2, 3, 4];
// let res = [];
// for (let i = 1; i < arr.length; i++) {
//     res.push(arr[i]);
// }
// res.push(arr[0]);
// console.log(res);

//other method
// let arr = [1,2,3,4,5];
// let add = arr.shift();
// arr.push(add);
// console.log(arr);

//77 Count Elements Greater than Average
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// } 

// let avg = sum / arr.length;

// let count = 0;
// for (let i = 0; i < arr.length; i++) { 
//   if (arr[i] > avg) {
//     count++;
//   }
// } 

// console.log("Count =", count); 


//78 Largest Positive and Smallest Negative
// let arr=[1,2,3,5,10,19,20,-21];

// let max=Math.max( ... arr);
// let min=Math.min( ... arr);

// console.log(max>0 ? max : null);
// console.log(min<0 ? min : null)



//other way
// let arr=[1,2,3,5,10,19,20,-21];
// let max=0;
// let min=0;
// for(let i=0; i<arr.length;i++){
//     if(arr[i>max]){
//         max=arr[i];
//     }
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }

// console.log(max>0 ? max : null);
// console.log(min<0 ? min : null);



//79 Count 0s and 1s in Binary Array
// let arr = [0, 1, 0, 1, 1];
// let zeros = 0;
// let ones = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     zeros++;
//   } else {
//     ones++;
//   }
// }
// console.log("zeros =", zeros);
// console.log("ones =", ones);


//80 Separate Even and Odd into Two Arrays
// let arr = [1, 2, 3, 4, 5];

// let evens = [];
// let odds = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evens.push(arr[i]);
//   } else {
//     odds.push(arr[i]);
//   }
// }

// console.log("evens =", evens);
// console.log("odds =", odds);
