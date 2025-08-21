#include <stdio.h>

int even_odd  (int num1, int num2, char op) {
    int num3 = num1+num2;
    printf("%d\n", num3);
    printf("%c\n", op);
}

int main() {
    
    even_odd(8,6, '+');
    
    return 0;
}

