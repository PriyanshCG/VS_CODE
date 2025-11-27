//q11 1 to 10

    // let str=" ";
    // for(num=1; num<=10; num++){
    //     str = str+num+" ";
    // }
    // console.log(str);


//q12 1 to N

// function oneton(numb){
//     let str=" ";
//     for(i=1; i<=numb; i++){
//         str = str+i+" ";
//     }
//     console.log(str);
// }
// oneton(12);

//q13 onetoneven

// function onetoneven(numbe){
//     let str=" ";
//     for(i=1;i<=numbe;i++){
//         if(i%2==0){
//             str=str+i+" ";
//         }
//     }
//     console.log(str);
// }
// onetoneven(15);

//q14 onetonodd

// function onetonodd(number){
//     let str="";
//     for(i=1;i<=number;i++){
//         if(i%2==1){
//            str=str+i+" ";
//         }
//     }
//      console.log(str);
// }
// onetonodd(15);

//q15 sum 1 to n

// function sumoneton(num1){
//     let sum = 0;
//     for(let i = 1; i <= num1; i++){
//         sum += i;
//     }
//     console.log(sum);
    
// }
// sumoneton(10)


//q16 product 1 to n

// function prodoneton(num2){
//     let prod=1;
//     for(let i =1; i<=num2;i++){
//         prod *=i;
//     }
//     console.log(prod);
// }
// prodoneton(5);

//q17 mul table of number

// function table(num3){
//     let str=" ";
//     for(let i = 1; i <= 10; i++){
//         str=str+(i*num3)+" ";
       
//     }
//      console.log(str);
// }
// table(5);


//q18 count number divisible by 3

// function countDivisibleBy3(N) {
//     let count = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             count++;
//         }
//     }
//     return count;
// }

// const input = parseInt(prompt("Give N: "));
// console.log(countDivisibleBy3(input));



// Q19 Factorial (Iterative)

// const input = parseInt(prompt("Give N : "));
// let multi = 1;

// for(let i=1; i<=input; i++){
//     multi = multi*i;
// }
// console.log(multi);



// Q20  First N Multiples of 7

const input = parseInt(prompt("Give N : "));

for (let i = 1; i <= input; i++) {
    console.log(7 * i);
}
