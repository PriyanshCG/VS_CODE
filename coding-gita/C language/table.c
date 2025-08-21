#include <stdio.h>
int main()
{
   int a, total=1, i;
    printf("Enter a number: ");
    scanf("%d", &a);

    for (i=1; i<=a; i++)
    {
        total = total * i;
    }
    printf(" %d\n", total);
    return 0;
}