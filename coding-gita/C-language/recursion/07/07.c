#include <stdio.h>

int findMax(int arr[], int n) {
    if (n == 1)
        return arr[0];
    int maxRest = findMax(arr, n - 1);
    return (arr[n - 1] > maxRest) ? arr[n - 1] : maxRest;
}
int main() {
    int arr[] = {2, 9, 3, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Maximum = %d", findMax(arr, n));
    return 0;
}
