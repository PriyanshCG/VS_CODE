#include <stdio.h>
int main()
{
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);

    int b;
    printf("Enter another number: ");
    scanf("%d", &b);

    char op;
    printf("Enter an operator ((1) +,(2) -,(3) *, (4) /,(5) %): ");
    scanf(" %c", &op);

    switch (op)
    {
    case '1':
    {
        printf("Result: %d\n", a + b);
        break;
    }
    case '2':
    {
        printf("Result: %d\n", a - b);
        break;
    }
    case '3':
    {
        printf("Result: %d\n", a * b);
        break;
    }
    case '4':
    {
        if (b != 0)
        {
            printf("Result: %d\n", a / b);
        }
        else
        {
            printf("Error: Division by zero is not allowed.\n");
        }
        break;
    }
    case '5':
    {
        if (b != 0)
        {
            printf("Result: %d\n", a % b);
        }
        else
        {
            printf("Error: Division by zero is not allowed.\n");
        }
        break;
    }
    default:
        printf("Error: Invalid operator.\n");
        break;
    }
    return 0;
}
    
