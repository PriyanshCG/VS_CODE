#include <stdio.h>

void fibo(int a, int b, int n)
{
    if (n == 0)
        return;
    printf("%d ", a);
    fibo(b, a + b, n - 1);
}
int main()
{
    fibo(0, 1, 5);
    return 0;
}