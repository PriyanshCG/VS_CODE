#include <stdio.h>
int main()
{
    int num;
    printf("Enter the value of a: ");
    scanf("%d", &num);
    int track = 0;
    for ( int a =2; a <= num/2; a++){

        if (num % a == 0){
            track = 1;
            break;
        }
        
    }
    if (track == 0) {
        printf("Prime number\n");
    }
    else {
        printf("Not a prime number\n");
    }

    return 0;

}