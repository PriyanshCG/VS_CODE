// Write a program to print a reverse right-angled triangle of stars using nested for loops.

// Example (n = 5):

// * * * * *
// * * * *
// * * *
// * * *
// * *

#include <stdio.h>
int main() {
    int n, i, j;
    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (i = n; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}