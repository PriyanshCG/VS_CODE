// Write a program to print a number pyramid using nested for loops. Example (n = 4):
// 1
// 1 2
// 1 2 3
// 1 2 3 4


#include <stdio.h>
int main(){
    int num, i, j;
    printf("enter a number:");
    scanf("%d",&num);

    for(i=1; i<=num ; i++){
        for(j=1; j<=i; j++){
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
















