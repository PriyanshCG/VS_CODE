//31
function lengthOfString(string) {
  console.log(string.length);
}
lengthOfString("hello pajji");

//32

function charcterOnnewline(string){
    var temp=string.split("");
    let str="";
    for(var i=0;i<string.length;i++){
        str=str+ temp[i]+" ";
        
    }
    console.log(str);
}
charcterOnnewline("hello")

//33

function vowelsCount(string){
    var temp=string.split("");
    let count=0;

    for(var i=0;i<string.length;i++){
        if(temp[i]=="a" || temp[i]=="e"|| temp[i]=="i"||temp[i]=="o"|| temp[i]=="u" ){
            count++;
        }
    }
    console.log(count);
    

}

//34
function countConsonants(string){
    var temp=string.split("");
    let count=0;

    for(var i=0;i<string.length;i++){
        if(temp[i]=="a" || temp[i]=="e"|| temp[i]=="i"||temp[i]=="o"|| temp[i]=="u" ){
            
        }
        else{
            count++;
        }
    }
    console.log(count);
}

//35
function upperCase(string){
    let temp=string.toUpperCase();
    console.log(temp);
    
}

//36
function lowercase(string){
    let temp=string.toLowerCase();
    console.log(temp);
    
}

//37

function reverseString(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    console.log(reverse);
}

//38

function palindrome(string){
    let temp=string;
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    if(temp==reverse){
        console.log("yes it's a palindrome");
        
    }
    else{
        console.log("no it's not plaindrome");
        
    }
}

//39

function CountA(string){
    var count=0;
    var temp=string.split("");
    for(var i=0;i<string.length;i++){
        if(temp[i]=="a" ||temp[i]=="A"){
            count++;
        }
    }
    console.log(count);
}

//40
 
function removeSpaces(string) {
  let temp = string.split(" ").join("");
  console.log(temp);
}