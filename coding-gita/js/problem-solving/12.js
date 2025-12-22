// Q121. Multiple of 10

function multipleOf10(num){
    return num%10 == 0
}
console.log(multipleOf10(20));



// Q122. Minimum of Two Numbers
function minimum(num1,num2){
    if(num1>=num2) return num2
    else return num1;
}

console.log(minimum(5,9));


// Q123. Minimum of Three Numbers

function minimum(num1,num2,num3){
    if(num1<num2 && num1<num3) return num1
    else if(num2<num3 && num2<num1) return num2
    else return num3;
}

console.log(minimum(3,7,5));


// Q124. Print from n Down to 1

function downPrint(num){
    if(num === 0)return;
    console.log(num);
    return downPrint(num-1);
}

downPrint(5);



// Q125. Sum of All Even Numbers from 1 to n

function allEven(num,sum=0){
    if(num<1) return sum;
    if(num%2==0){

        sum+=num;
    }
    return allEven(num-1,sum)
}

console.log(allEven(6));



// Q126. Sum of All Odd Numbers from 1 to n

function allOdd(num, sum = 0){
    if(num<1) return sum;
    if(num%2!==0){
        sum+=num
    }
    return allOdd(num-1,sum);
}

console.log(allOdd(5));



// Q127. Count Numbers Divisible by 2 or 3 (1 to n)

function divisible(num,count=0){
    if(num<1) return count;
    if(num%2==0 || num%3==0) count++;
    return divisible(num-1,count);
}

console.log(divisible(6));



// Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)

function divisible(num,count=0){
    if(num<1) return count;
    if(num%2==0 && num%5==0) count++;
    return divisible(num-1,count);
}

console.log(divisible(20));



// Q129. Perfect Number

function perfect(num){
    let sum = 0;
    for(let i=1; i<=num/2;i++){
        if(num%i === 0){
            sum += i;
        }
    }
    return sum === num
}

console.log(perfect(6));
console.log(perfect(28));



// Q130. Co-prime Numbers

function coPrime(num1,num2){
    let Range = Math.min(num1,num2);
    let GCD = 1;
    for(let i=Range;i>=1;i--){
        if(num1 % i === 0 && num2 % i === 0){
            GCD = i;
            break;
        }
    }
    return GCD === 1;
}

console.log(coPrime(7,9));



// Q131. Largest Digit in a Number


function largestDigit(num){
    let arr = String(num).split("");
   let res = Math.max(...arr);
   console.log(res);
   
}

largestDigit(5823)




// Q132. Smallest Digit in a Number

function largestDigit(num){
    let arr = String(num).split("");
   let res = Math.min(...arr);
   console.log(res);
   
}

largestDigit(5823)




// Q133. Count Even Digits in a Number



function countEven(num){
let count =0;
while(n>0){
    if(n%2==0 && n%10!=0){
        count++
    }
    n=Math.floor(n/10);
}
console.log(count);

}
digit(4305)




// Q134. Count Odd Digits in a Number


function countOdd(num){
    let arr = String(num).split("");
    let count = arr.filter((element)=>{
        return element%2!=0
    })
    return count.length;
}

console.log(countOdd(1234));




// Q135. Absolute Difference of Two Numbers


function difference(num1,num2){
    return Math.abs(num1-num2)
}

console.log(difference(10,7));


function difference2(num1, num2){
    let res = num1-num2;
    if(res<0){
        res *= -1;
    }
    return res;
}

console.log(difference2(10,7));





// Q136. Is 3-digit Number


function digit(num){
    return (num>=100 && num<=999)
}

console.log(digit(150));





// Q137. Sum of Squares 1² + 2² + … + n²


function sumOfSquars(num,sum=0){
    if(num==0) return sum;
    sum += num**2;
    return sumOfSquars(num-1,sum)
}

console.log(sumOfSquars(3));




// Q138. Sum of Cubes 1³ + 2³ + … + n³

function sumOfCube(num, sum = 0) {
    if (num == 0) return sum;
    sum += num ** 3;
    return sumOfCube(num - 1, sum);
}

console.log(sumOfCube(3));


// Q139. Harshad Number (Niven Number)
// A number is Harshad if it’s divisible by sum of its digits.



function isHarshad(n) {
  let sum = 0;
  for (let d of String(n)) {
    sum += Number(d);
  }
  return n % sum === 0;
}

console.log(isHarshad(18)); 



// Q140. Automorphic Number
// A number is automorphic if its square ends with the same digits as the number.

function isAutomorphic(n) {
    let square = n * n;
    return String(square).endsWith(String(n));
}
console.log(isAutomorphic(6));



function automorphicNumber2(num){
    let square = num**2;
    let digit = String(num).length;
    let power = 10**digit;
    return square%power === num;
}

console.log(automorphicNumber2(5));
