#include <stdio.h>

int add(int , int);

int main() {
    int result;
    result = add(5,10);
    printf("The sum is: %d\n", result);
}
int add (int a, int b){
    return a+b;
}