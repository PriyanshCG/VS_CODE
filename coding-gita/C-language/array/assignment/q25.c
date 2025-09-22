#include <stdio.h>

int main() {
    int n ;
   printf("enter no.");
   scanf("%d",&n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%c ",'@'+ j);
        }
        for (int j = i - 1; j >= 1; j--) {
            printf("%c ",'@'+j);
        }
        printf("\n");
    }
    return 0;
}