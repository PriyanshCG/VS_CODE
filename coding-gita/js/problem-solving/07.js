//61
// let arr = [1, 2, 3];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * 2);
// }
// console.log(result);


//62
// let arr = [1, 2, 3];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * arr[i]);
// }
// console.log(result);


//63
// let arr = [1, 2, 3];
// let rev = [];
// let lastIndex = arr.length - 1;
// for (let i = lastIndex; i >= 0; i--) {
//     rev[rev.length] = arr[i];
// }
// console.log(rev);


// //shorter way
// let rev=new Array(...arr);
// console.log(rev.reverse());

//onemoreway
// let i=0;
// let j=arr.length-1;
// while(i<=j){
// [arr[i],arr[j]]=[arr[j],arr[i]];
// i++;
// j--;
// }
// console.log(arr)

//64
// let arr = [1, 2, 3];
// let copy = [];
// for (let i = 0; i < arr.length; i++) {
//   copy[i] = arr[i];
// }
// console.log(copy);


//65
// let arr = [1, 2, 3];
// let value = 2;
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === value) {
//     found = true;
//     break;
//   }
// }

// console.log(found); 


//short method
// let arr = [1, 2, 3];
// let value = 2;

// console.log(arr.includes(value));


//66
// let arr = [10, 20, 30];
// let value = 20;
// let index = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === value) {
//     index = i;
//     break;
//   }
// }

// console.log(index);


//67
// let arr = [1, 2, 2, 3, 2];
// let value = 2;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         count++;
//     }
// }
// console.log(count); 


//68
// let arr = [1, 2, 3, 4];
// let sorted = true;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[i - 1]) {
//     sorted = false;
//     break;
//   }
// }

// console.log(sorted);   


