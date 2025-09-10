#include <stdio.h>

void max(int arr[]) {
    int max = arr[0];
    for(int i = 1; i < 7; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    printf(" %d\n", max);
}
int main (){
    int arr[] = {4, 5, 7, 9, 10,122,43,};
     int arr2[] = {43, 67, 98, 74, 100,12,434,};
    max(arr);
    max(arr2);
    return 0;
}
