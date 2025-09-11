#include <stdio.h>
int main (){
    int a[5] = {10,15,20,25,30};
    int sum = 0;

    for (int i = 0; i<5;i++){
        sum+= a[i];
    }
printf("sum = %d\n",sum);
int avg = sum/5;
printf("avg = %d\n", avg);
    return 0;
}
