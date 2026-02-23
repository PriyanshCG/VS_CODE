
// Q141. Middle Character(s) of a String
// function middleCharsManual(str) {
//     let len = str.length;
//     let mid = Math.floor(len / 2);
//     if (len % 2 === 0) {
//         return str[mid - 1] + str[mid];
//     } else {
//         return str[mid];
//     }
// }



// Q142. Starts with 'a' (case-insensitive)
// function startsWithAManual(str) {
//     let first = str[0];
//     return (first === 'a' || first === 'A');
// }



// Q143. Ends with '!'
// function endsWithExclamationManual(str) {
//     return str[str.length - 1] === '!';
// }

// Q144. Count Spaces in String
// function countSpacesManual(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') count++;
//     }
//     return count;
// }

// Q145. Remove Leading and Trailing Spaces 
// function removeSpaces(str){
//     let i=0;
//     let j=str.length-1;

//     while(str[i]==i){
//         i++
//     }
//     while(str[j]==j){
//         j--
//     }
//     let res="";
//     for(let k=i;k<=j;k++){
//         res=res+str[k];
//     }
//     console.log(res);
// }

// removeSpaces("    Hello world    ")



// Q146. Replace All '?' with '!'
// function replace(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         result += (str[i] === '?') ? '!' : str[i];
//     }
//     return result;
// }

// function replace(str) {
//     return str.replaceAll('?', '!');
// }




// Q147. Join Two Strings with a Space
// function joinWithSpaceManual(str1, str2) {
//     return str1 + " " + str2;
// }




// Q148. First Word of a Sentence
// function firstWordManual(sentence) {
//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === ' ') break;
//         result += sentence[i];
//     }
//     return result;
// }





// Q149. Last Word of a Sentence
// function lastWordManual(sentence) {
//     let result = "";
//     let i = sentence.length - 1;
//     while (i >= 0 && sentence[i] !== ' ') {
//         result = sentence[i] + result;
//         i--;
//     }
//     return result;
// }




// Q150. Length of Longest Word in a Sentence

//   function longestWordLength(str) {
//   let maxLen = 0;
//   let currentLen = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       currentLen++;
//     } else {
//       if (currentLen > maxLen) {
//         maxLen = currentLen;
//       }
//       currentLen = 0;
//     }
//   }

//   if (currentLen > maxLen) {
//     maxLen = currentLen;
//   }

//   return maxLen;
// }

// console.log(longestWordLength("I love coding"));          
// console.log(longestWordLength("JavaScript is awesome")); 
// console.log(longestWordLength("hi"));





//151 shortest word in a sentence
// function shortestWord(str) {
//   let minWord = "";
//   let currentWord = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       currentWord += str[i];
//     } else {
//       if (minWord === "" || currentWord.length < minWord.length) {
//         minWord = currentWord;
//       }
//       currentWord = "";
//     }
//   }


//   if (currentWord !== "") {
//     if (minWord === "" || currentWord.length < minWord.length) {
//       minWord = currentWord;
//     }
//   }

//   return minWord;
// }


// console.log(shortestWord("I love coding"));   
// console.log(shortestWord("Java is fun"));     
// console.log(shortestWord("one two three"));   




//152 count 'the' as a whole word
// function countThe(str) {
//   let words = str.toLowerCase().split(" ");
//   let count = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countThe("the cat and the dog")); 
// console.log(countThe("There is the book"));  
// console.log(countThe("no keyword here"));    


//other way
// function countThe(str) {
//   let count = 0;
//   let currentWord = "";

//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (ch !== " ") {
//       currentWord += ch.toLowerCase();
//     } else {
//       if (currentWord === "the") {
//         count++;
//       }
//       currentWord = "";
//     }
//   }

//   if (currentWord === "the") {
//     count++;
//   }

//   return count;
// }

// console.log(countThe("the cat and the dog")); 
// console.log(countThe("There is the book"));  
// console.log(countThe("no keyword here"));    




//153 contains any vowel
// function containsVowel(str) {
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();

//     if (
//       ch === "a" ||
//       ch === "e" ||
//       ch === "i" ||
//       ch === "o" ||
//       ch === "u"
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsVowel("hello"));       
// console.log(containsVowel("sky"));         
// console.log(containsVowel("JAVASCRIPT"));  



//154 contains only digits
// function containsOnlyDigits(str) {
//   if (str.length === 0) return false;

//   for (let ch of str) {
//     if (ch < '0' || ch > '9') {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(containsOnlyDigits("12345")); 
// console.log(containsOnlyDigits("123a5")); 
// console.log(containsOnlyDigits(""));      



//155 contains only letters
// function containsOnlyLetters(str) {
//   if (str.length === 0) return false;

//   for (let ch of str) {
//     if (
//       (ch < 'a' || ch > 'z') &&
//       (ch < 'A' || ch > 'Z')
//     ) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(containsOnlyLetters("Hello"));      
// console.log(containsOnlyLetters("Hello123"));   
// console.log(containsOnlyLetters("hello world"));


//156 repeat each character twice
// function repeatEachCharTwice(str) {
//   let result = "";

//   for (let ch of str) {
//     result += ch + ch;
//   }
//   return result;
// }

// console.log(repeatEachCharTwice("abc")); 
// console.log(repeatEachCharTwice("Hi"));  
// console.log(repeatEachCharTwice("A!")); 



//157 remove special charcters
// function removeSpecialChars(str) {
//   let result = "";

//   for (let ch of str) {
//     if (
//       (ch >= 'a' && ch <= 'z') ||
//       (ch >= 'A' && ch <= 'Z') ||
//       (ch >= '0' && ch <= '9')
//     ) {
//       result += ch;
//     }
//   }
//   return result;
// }


// console.log(removeSpecialChars("hello@123!")); 
// console.log(removeSpecialChars("JS#is$cool")); 
// console.log(removeSpecialChars("***"));        



//158 count words with length >= 5
// function countWordsLen5(sentence) {
//   let count = 0;
//   let wordLen = 0;

//   for (let i = 0; i <= sentence.length; i++) {
//     if (sentence[i] !== " " && i < sentence.length) {
//       wordLen++;
//     }
//      else {
//       if (wordLen >= 5) {
//         count++;
//       }
//       wordLen = 0;
//     }
//   }

//   return count;
// }
// console.log(countWordsLen5("I love JavaScript coding")); 
// console.log(countWordsLen5("short and tiny"));           
// console.log(countWordsLen5("all big words here"));       



// // Q159. Anagram Check
// function areAnagrams(str1, str2) {
//   function cleanString(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       let ch = str[i];
//       if (ch !== " ") {
//         result += ch.toLowerCase();
//       }
//     }
//     return result;
//   }

//   let s1 = cleanString(str1);
//   let s2 = cleanString(str2);

//   if (s1.length !== s2.length) return false;
 
//   let arr1 = s1.split('').sort().join('');
//   let arr2 = s2.split('').sort().join('');

//   return arr1 === arr2;
// }

// console.log(areAnagrams("listen", "silent"));          
// console.log(areAnagrams("Dormitory", "Dirty room"));  
// console.log(areAnagrams("hello", "world"));            


//other way
// function anagram(str1,str2){
//   let obj1={};
//   let obj2={};

//   for(let char of str1){
//     if(char== " "){
//       continue;
//     }
//     if(obj1[char]){
//       obj1[char]++;
//     }
//     else{
//       obj1[char]=1
//     }
//   }
//  for(let char of str2){
//     if(char==" "){
//     continue;
//   }
//   if(obj2[char]){
//     obj2[char]++;
//   }
//   else{
//     obj2[char]=1
//   }
// }
//   for(let char in obj1){
//     if(obj1[char]!=obj2[char]){
//       console.log("strings are not anagrams");
//       return;
//     }
//   }
//   console.log("string are anagrams")
// }


// anagram("hello","lleho");


//onemoreway
// let str1 = "listen";
// let str2 = "silent";
// let obj1 = {};
// let obj2 = {};

// str1 = str1.toLowerCase();
// str2 = str2.toLowerCase();

// for (let char of str1) {
//   if (char !== " ") {
//     obj1[char] = (obj1[char] || 0) + 1;
//   }
// }
// for (let char of str2) {
//   if (char !== " ") {
//     obj2[char] = (obj2[char] || 0) + 1;
//   }
// }
// let isAnagram = true;
// for (let char in obj1) {
//   if (obj1[char] !== obj2[char]) {
//     isAnagram = false;
//     break;
//   }
// }
// console.log(isAnagram);



//160
//Pangram Check
// function isPangram(str) {
//   str = str.toLowerCase();
//   let letters = "abcdefghijklmnopqrstuvwxyz";

//   for (let i = 0; i < letters.length; i++) {
//     if (!str.includes(letters[i])) {
//       return false;
//     }
//   }
//   return true;
// }

