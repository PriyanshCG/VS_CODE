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


// short method
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
// let arr = [1, 2, 2, 3, 2,3,3,3,4,5,7,9];
// let value = 3;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         count++;
//     }
// }
// console.log(count); 


//67
// let obj={};
// for(let i=0;i<arr.length;i++){
// if(obj[arr[i]]!=undefined) {
// obj[arr[i]]++
// }

// else{
// obj[arr[i]]=1;
// }
// }
// console.log(obj[value]);



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


//69
// let arr = [10, 5, 8, 20];
// let largest = arr[0];
// let second = arr[1];
// if (second > largest) {
//   let temp = largest;
//   largest = second;
//   second = temp;
// }
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     second = largest;
//     largest = arr[i];
//   } else if (arr[i] > second) {
//     second = arr[i];
//   }
// }
// console.log(second);



//70
// let arr = [10, 5, 8, 20];
// let small = arr[0];
// let second = arr[1];
// // arrange them properly
// if (second < small) {
//   let temp = small;
//   small = second;
//   second = temp;
// }
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] < small) {
//     second = small;
//     small = arr[i];
//   } 
//   else if (arr[i] < second && arr[i] !== small) {
//     second = arr[i];
//   }
// }
// console.log(second);
