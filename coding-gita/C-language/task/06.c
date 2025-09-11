#include <stdio.h>
int main() {
   
    int arr[] = {1, 2, 3, 5}; 
    int n = 5; 
    int expectedSum = n * (n + 1) / 2; 
    int actualSum = 0;
    for (int i = 0; i < n - 1; i++) {
        actualSum += arr[i];
    }
    int missing = expectedSum - actualSum;
    printf("Missing number is: %d\n", missing);

    return 0;
}