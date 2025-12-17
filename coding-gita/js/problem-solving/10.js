//91
// let arr = [1, 2, 2, 3];
// let freq = {};

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];

//   if (freq[num]) {
//     freq[num]++;
//   } else {
//     freq[num] = 1;
//   }
// }

// console.log(freq);


//92
// let arr = [1, 2, 2, 3];
// let obj = {};

// for(let n of arr){
//     if(obj[n]==undefined){
//         obj[n]=1
//     }
//     else{
//         obj[n]++
//     }
// }
// let maxCount=0;
// let maxValue=0;

// for(let n in obj){
//     if(obj[n]>maxValue){
//         maxCount=obj[n];
//     }
// }
// console.log(maxCount);



//93
// let array = "hello";
// let obj={};

// for(let n of array){
//     if(obj[n]==undefined){
//         obj[n] =1;
//     }
//     else{
//         obj[n]++
    
//     }
// }
// console.log(obj);

//94
// let arr = [{name:"A",marks:50},{name:"B",marks:80},{name:"C",marks:70}]

// let maxmarks=0;
// let student="";
// for(let c of arr){
//   if(c.marks>maxmarks){
//     student=c.name;
//     maxmarks=c.marks
//   }
// }
// console.log(student)


// Q95.
// function calculateTotalCost(prices) {
//   let total = 0;
//   for (let product in prices) {
//     total += prices[product];
//   }
//   return total;
// }

// console.log(calculateTotalCost({apple: 50, banana: 20, mango: 30}));



// // Q96.
// function calculateAverageMarks(marksObj) {
//   let total = 0;
//   let count = 0;
//   for (let subject in marksObj) {
//     total += marksObj[subject];
//     count++;
//   }
//   if (count === 0) return 0;
//   return total / count;
// }

// console.log(calculateAverageMarks({math: 80, science: 90, english: 70}));



// // Q97.
// function getObjectKeys(obj) {
//   let keys = [];
//   for (let key in obj) {
//     keys.push(key);
//   }
//   return keys;
// }

// console.log(getObjectKeys({a: 1, b: 2, c: 3}));



//otherway
// function print(obj){
//     console.log(Object.keys(obj));
// }

// print({a: 1, b: 2, c: 3})



// // Q98.
// function getObjectValues(obj) {
//   let values = [];
//   for (let key in obj) {
//     values.push(obj[key]);
//   }
//   return values;
// }

// console.log(getObjectValues({a: 1, b: 2, c: 3}));


//other way
// function print(obj){
//     console.log(Object.values(obj));
// }

// print({a: 1, b: 2, c: 3})



// // Q99.
// function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }
//   return count;
// }

// console.log(countProperties({a: 1, b: 2, c: 3}));




// // Q100.
// function filterAdults(people) {
//   let adults = [];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > 18) {
//       adults.push(people[i]);
//     }
//   }
//   return adults;
// }

// console.log(filterAdults([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}]));
