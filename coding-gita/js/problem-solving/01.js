//  Q1 Check Even Odd

function evenOddCheck(n1){
    if(n1%2==0){
        console.log(n1,"is Even");
    } else{
        console.log(n1 , "is Odd");
    }
}
evenOddCheck(33);


// Q2 Check maximum 

function maximum(n2,n3){
    if(n2>n3){
        console.log(n2 , "is Big");
    } else{
        console.log(n3 , "is Big");
    }
}
maximum(223,33);


// Q3 maximum Of Three

function maximumOfThree(n1,n2,n3){
    if(n1>n2 && n1>n3){
        console.log(n1 , "is Big");
    } else if(n2>n3 && n2>n1){
         console.log(n2 , "is Big");
    } else{
         console.log(n3 , "is Big");
    }
}

maximumOfThree(45,2,18);



// Q4 positive negitive and zero


function ponezo(num){
    if(num>0){
        console.log(num , "is Pos+");
    } else if(num==0){
         console.log(num , "is Zero");
    } else{
         console.log(num , "is Neg-");
    }
}
ponezo(33);


// Q5 Age Group

function ageGroup(age){
    if(age<=12 && age>0){
        console.log(age , "is Consider as Child");
    } else if(age>12 && age<19){
        console.log(age , "is Consider as Teen");
    } else{
        console.log(age , "is Consider as Adult");
    }
}
ageGroup(18);


//  Q6 Grade Calculator

function gradeCal(grade){
    if(grade>=90 && grade<101){
        console.log(grade , "-> Grade A");
    } else if(grade>80 && grade<90){
        console.log(grade , "-> Grade B");
    } else if(grade>70 && grade<80){
        console.log(grade , "-> Grade C");
    } else if(grade>60 && grade<70){
        console.log(grade , "-> Grade D");
    } else{
        console.log("Fail");
    }
}
gradeCal(99);

//  baki Swich Case

function gradeCalculator2(marks) {
    switch (true) {
        case (marks > 0 && marks <= 59):
            console.log("F");
            break;
        case (marks >= 60 && marks <= 69):
            console.log("D");
            break;
        case (marks > 69 && marks <= 79):
            console.log("C");
            break;
        case (marks > 79 && marks <= 89):
            console.log("B");
            break;
        case (marks >= 89 && marks <= 100):
            console.log("A");
            break;
        default:
            console.log("Invalid marks! Enter 0–100.");
    }
}
gradeCalculator2(90);

//another method for switch case
function getGrade(marks) {
    switch (Math.floor(marks / 10)) {
        case 10: 
        case 9: 
            return "A";
        case 8:  
            return "B";
        case 7: 
            return "C";
        case 6:
            return "D";
        default:
            return "F";
    }
}
let marks = 85;
console.log("Grade:", getGrade(marks));

//  Q7 Divisible by 5

function divisibleByFive(num){
    if(num%5==0){
        console.log(num , "is Divisible By 5");
    } else{
        console.log(num , "is not Divisible By 5");
    }
}
divisibleByFive(33);


//  Q8 Divisible by 3 and 5

function diviByThrAndFive(num1){
    if(num1%5==0 && num1%3==0){
        console.log(num1 ,"is Divisible by 3 and 5");
    } else{
        console.log(num1 ,"is not Divisible by 3 and 5");
    }
}
diviByThrAndFive(15);


//  Q9 Leap Year

function leapYear(year){
    if(year%4==0){
        console.log(year , "is a Leap Year");
    } else{
        console.log(year , "is not a Leap Year");
    }
}
leapYear(2020);


function leapYear1(year){
    if(year%100==0 && year%400==0){
        console.log(year , "is a Leap Year");
    } 
    else if(year%4==0){
        console.log(year, "is leap year");
        
    }
    else{
        console.log(year , "is not a Leap Year");
    }
}
leapYear1(2000);

//  Q10 In Range 10–50

function inRange(range){
    if(range>=10 && range<=50){
        console.log(range , "is in The Range");
    } else{
        console.log(range , "is not The Range");
    }
}
inRange(33);