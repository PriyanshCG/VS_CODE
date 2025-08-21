#include <stdio.h>
int main()
{
    int num;
    printf("Enter a number for factorial calculation: ");
    scanf("%d", &num);

    int factorial = 1;
    for (int i = 1; i <= num; i++)
    {
        factorial *= i;
    }

    printf("Factorial of %d is %d\n", num, factorial);
    return 0;
}