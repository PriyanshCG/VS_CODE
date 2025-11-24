#include <stdio.h>
int main() {
    int amount, thousands , fivehundreds,   hundreds, fifties, twenties, tens, fives, ones;
    printf("Enter the amount: ");
    scanf("%d", &amount);

    thousands = amount / 1000;
    amount %= 1000;

    fivehundreds = amount / 500;
    amount %= 500;

    hundreds = amount / 100;
    amount %= 100;

    fifties = amount / 50;
    amount %= 50;

    twenties = amount / 20;
    amount %= 20;

    tens = amount / 10;
    amount %= 10;

    fives = amount / 5;
    amount %= 5;

    ones = amount;

    printf("Separation:\n");
    printf("1000: %d\n", thousands);
    printf("500s: %d\n", fivehundreds);
    printf("100s: %d\n", hundreds);
    printf("50s: %d\n", fifties);
    printf("20s: %d\n", twenties);
    printf("10s: %d\n", tens);
    printf("5s: %d\n", fives);
    printf("1s: %d\n", ones);
return 0;
}