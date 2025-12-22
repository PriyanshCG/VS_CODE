#include <stdio.h>

int sumDigits(int n) 
{
    if (n == 0) 
        return 0;
    return (n % 10) + sumDigits(n / 10);
}

int main()
{
    printf("Sum = %d\n", sumDigits(567));
    return 0;
}
