#include <stdio.h>

int main() {
    int n,m,p, i;
    int fact1 = 1, fact2 =1, fact3 =1;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        fact1 = fact1 * i;
    }

    printf("Factorial of %d is %d\n", n, fact1);
    
     printf("Enter a number: ");
    scanf("%d", &m);

    for (i = 1; i<= m; i++) {
        fact2 = fact2 * i;
    }

    printf("Factorial of %d is %d\n",m, fact2);
    
     printf("Enter a number: ");
    scanf("%d", &p);

    for (i = 1; i <= p; i++) {
        fact3 = fact3 * i;
    }

    printf("Factorial of %d is %d\n", p, fact3);
    return 0;
}
