#include <stdio.h>
int main(){
    int arr1[9] = {2,5,7,3,9, 10};
    char arr2[] = {'a','b'};
    double arr3[] = {1,2};
    int len = sizeof(arr2)/sizeof(arr2[0]);

    printf("%d\n",len);




    return 0;
}