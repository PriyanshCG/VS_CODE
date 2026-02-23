//Q161. Count Positive, Negative, and Zero

function countArr(arr){
    let countp = 0;
    let countn = 0;
    let countz = 0;

    for(let i = 0 ; i < arr.length ; i++){
        if (arr[i] > 0){
            countp++ ;
        }
        else if(arr[i] < 0){
            countn++ ;
        }
        else{
            countz++ ;
        }
    }
    console.log("Positives : "+ countp + " Negatives : "+ countn + " Zeros : "+countz);
}
countArr([1, -2, 0, 5, -3]);
countArr([-1, -2, -3]);
countArr([0 , 0 , 0]);

//Q162. Triple Each Element

function tripleArr(arr){
    let res = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        res.push (arr[i] * 3) ;
    }
    return res;
}
console.log(tripleArr([1, 2, 3]));
console.log(tripleArr([-1, 0, 4]));

//Q163. Absolute Values of Array Elements

function Absolute(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push (Math.abs(arr[i])) ;
    }
    return res;
}
console.log(Absolute([-1, 2, -3]));
console.log(Absolute([0, -5, 7]));

//Q164. All Elements Even?

function evenCheck(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) return false;
    }
    return true;
}

console.log(evenCheck([2,4,6]));
console.log(evenCheck([2,3,6]));

// Q165. At Least One Even?

function atLeastOneEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) return true;
    }
    return false;
}
console.log(atLeastOneEven([1,3,5]));
console.log(atLeastOneEven([1,2,5]));


// INBUILT METHOD
function OneEven(arr) {
    return arr.some(num => num % 2 === 0);
}
console.log(OneEven([1,3,5]));
console.log(OneEven([1,2,5]));

// Q166. All Elements Positive?

function allPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) return false;
    }
    return true;
}

// INBUILT METHOD
function Positive(arr) {
    return arr.every(num => num > 0);
}

// Q167. Count Elements Greater Than k

function Greater(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > k) count++;
    }
    return count;
}

// INBUILT METHOD
function countGreater(arr, k) {
    return arr.filter(num => num > k).length;
}

// Q168. Index of Maximum Element

function Max(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

// INBUILT METHOD
function indexOfMax(arr) {
    return arr.indexOf(Math.max(...arr));
}

// Q169. Index of Minimum Element

function Min(arr) {
    let min = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    return index;
}

// INBUILT METHOD
function indexOfMin(arr) {
    return arr.indexOf(Math.min(...arr));
}

// Q170. Contains Any Duplicate?

function Duplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}

//By objects

function dublicates(arr){
  let freq = {};
  
  for(let i = 0 ; i< arr.length ; i++){
    if (freq[arr[i]] !== undefined){
      return true;
    }
    else{
      freq[arr[i]] = 1
    }
  }
  return false;
}

console.log(dublicates([1, 2, 3, 1])); 
console.log(dublicates([1, 2, 3]));  


// INBUILT METHOD
function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

// Q171. Unique Elements Without Set

function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) res.push(arr[i]);
    }
    return res;
}

// INBUILT METHOD
function uniqueOne(arr) {
    return arr.filter((v, i) => arr.indexOf(v) === i);
}

// Q172. Strictly Increasing Sorted Array?

function strictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
}

// INBUILT METHOD
function strictlyInc(arr) {
    return arr.every((v, i) => i === 0 || v > arr[i - 1]);
}

// Q173. Move All Negative Numbers to Front

function moveNegatives(arr) {
    let neg = [];
    let pos = [];
    for (let num of arr) {
        if (num < 0) neg.push(num);
        else pos.push(num);
    }
    return neg.concat(pos);
}

//....................................
function Neg(arr){
    console.log(arr.sort());
}
Neg([-1,-4,4,3,6]);

// INBUILT METHOD

function moveNeg(arr) {
    return [...arr.filter(n => n < 0), ...arr.filter(n => n >= 0)];
}
console.log(moveNeg([-1,-4,2,4,9]));


// Q174. Maximum Difference (max - min)

function maxDifference(arr) {
    let max = arr[0], min = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return max - min;
}

// INBUILT METHOD
function maxDiff(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

// Q175. Elements at Even Indices

function evenIndices(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

// INBUILT METHOD
function Indices(arr) {
    return arr.filter((_, i) => i % 2 === 0);
}

// Q176. Elements at Odd Indices

function oddIndices(arr) {
    let res = [];
    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

// INBUILT METHOD
function Indices(arr) {
    return arr.filter((_, i) => i % 2 !== 0);
}

// Q177. Count Strings with Length > 3

function countLongStrings(arr) {
    let count = 0;
    for (let str of arr) {
        if (str.length > 3) count++;
    }
    return count;
}

// INBUILT METHOD
function LongStrings(arr) {
    return arr.filter(s => s.length > 3).length;
}

// Q178. First Character of Each String

function firstChars(arr) {
    let res = [];
    for (let str of arr) {
        res.push(str[0]);
    }
    return res;
}

// INBUILT METHOD
function Chars(arr) {
    return arr.map(str => str[0]);
}

// Q179. Remove Empty Strings from Array
// Remove only "" (not spaces)

function removeEmpty(arr) {
    let res = [];
    for (let str of arr) {
        if (str !== "") res.push(str);
    }
    return res;
}

// INBUILT METHOD
function Empty(arr) {
    return arr.filter(str => str !== "");
}

// Q180. Sum of Even Numbers in Array

function sumEven(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) sum += num;
    }
    return sum;
}

// INBUILT METHOD
function sumEven(arr) {
    return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
}