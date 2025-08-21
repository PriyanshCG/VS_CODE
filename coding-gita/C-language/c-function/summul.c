int add(int a, int b){
    
    return a + b;
}
int multiply(int a, int b){
    return a * b;
}
#include <stdio.h>
int main (){
    
    int a,b;
    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);
    add(a,b);
    multiply(a,b);
    printf("Sum of %d and %d is %d\n", a, b, add(a, b));
    printf("Product of %d and %d is %d\n", a, b, multiply(a, b));
    return 0;
}
