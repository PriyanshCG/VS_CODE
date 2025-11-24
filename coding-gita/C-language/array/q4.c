// write a program to print the following pattern
// (example n=3)
// c
// c b
// c b a 
#include <stdio.h>

int main() {
    int n, i, j;
    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (i = n; i >= 1; i--) {
        for (j = n; j >= i; j--) {
            printf("%c ", 'A' + j - 1);
        }
        printf("\n");
    }
    return 0;
}