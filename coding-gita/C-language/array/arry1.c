#include <stdio.h>

void max() {
    int arr[] = {4, 5, 7, 9, 10,122,43,};
    
    int max = arr[0];

    for(int i = 1; i < 7; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    printf(" %d\n", max);
}
int main (){
    max();
    return 0;
}
