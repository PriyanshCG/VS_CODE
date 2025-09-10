#include <stdio.h>

int main() {
    int arr[] = {4, 5, 7, 9, 10};
    int n = 5;
    int max = arr[0];

    for(int i = 1; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    printf("Largest element: %d\n", max);
    return 0;
}
