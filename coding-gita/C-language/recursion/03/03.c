#include<stdio.h>
int fact(int num){
    int factorial=1;
    if(num==0){
        return 1;
    }
    return num*fact(num-1);
}
int main()
{
    printf("%d",fact(5));
    return 0;
}