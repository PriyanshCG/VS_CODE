#include <stdio.h>
int main()
{
    int a , sum=0;
    printf("Enter a number: ");
    scanf("%d", &a);

    for (int i=0; i<=a; i=i+1)
    {
        sum = sum + i;
    }
    printf("The sum is: %d\n", sum);
}