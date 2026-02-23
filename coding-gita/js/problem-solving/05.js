//q41


function countWords(str) {
  let count = 0;
  let prev = " ";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch !== " " && prev === " ") {
      count++;
    }
    prev = ch; 
  }
  return count;
}

console.log(countWords("  JavaScript  is  fun"));    



// //q42
// let str = "banana";
// let result = str.replaceAll("a", "e");
// console.log(result);


// let str = "banana";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] == "A") {
//         result += "e";   // replace a → e
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);   


//q43
// let str = "hello";
// let ch = "e";

// let result = str.includes(ch);
// console.log(result);   



// let str = "hello";
// let ch = "e";
// let found = false;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//         found = true;
//         break;
//     }
// }

// console.log(found);   

//q44
// let str1 = "hello";
// let str2 = "hello";

// let result = (str1 === str2);
// console.log(result);   // true


//q45
// let str = "abc123";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= '0' && str[i] <= '9') {  
//         count++;
//     }
// }
// console.log(count); 


//q46
// let str = "HeLLo";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'A' && str[i] <= 'Z') {
//         count++;
//     }
// }

// console.log(count); 


// let str = "HeLLo";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//         count++;
//     }
// }

// console.log(count);


//q47
// let str = "HeLLo";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//         count++;
//     }
// }

// console.log(count); 



// let str = "HeLLo";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()) {
//         count++;
//     }
// }

// console.log(count);



//q48
// let str = "JavaScript";
// let vowels = "aeiouAEIOU";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (!vowels.includes(str[i])) {
//     result += str[i];
//   }
// }

// console.log(result);   

//q49
// let str = "Js 101 course";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (!(str[i]>="0" && str[i]<="9")) {  
//     result += str[i];
//   }
// }

// console.log(result);  


50
let str = "HeLLo";
let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (ch >= "a" && ch <= "z") {
    result += ch.toUpperCase();
  } else if (ch >= "A" && ch <= "Z") {
    result += ch.toLowerCase();
  } else {
    result += ch; 
  }
}

console.log(result);  
