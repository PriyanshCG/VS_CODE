#include <stdio.h>

int main() {
    int arr1[5] = {4, 5, 7, 9, 10};
    int arr2[5];

    
    for(int i = 0; i < 5; i++) {
    arr2[5 - 1 - i]  =  arr1[i];
    }

    
    for(int i = 0; i < 5; i++) {
        printf("%d ", arr2[i]);
    }
    printf("\n");

    return 0;
}
