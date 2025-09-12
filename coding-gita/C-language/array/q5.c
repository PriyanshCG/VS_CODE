#include <stdio.h>
int main(){
    int num, i, j;
    printf("enter a number:");
    scanf("%d",&num);

    for(i=num; i>=1; i--){
        for(j=i; j>=1; j--){
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
