int function(int num){
int fact = 1;
for (int i=1; i<=num; i++){
    fact = i * fact;
}
return fact;
}

#include <stdio.h>
int main (){
    int n1,n2,n3,n4;
    n1 = function(5);
    n2 = function(6);
    n3 = function(7);
    n4 = function(8);
    printf("Factorial of 5 is %d\n", n1);
    printf("Factorial of 6 is %d\n", n2);
    printf("Factorial of 7 is %d\n", n3);
    printf("Factorial of 8 is %d\n", n4);
    return 0;

}