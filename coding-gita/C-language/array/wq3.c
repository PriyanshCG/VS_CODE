// Write a program to find all pairs of elements in an array whose sum is equal to a given target number.
// Example:
// Array: [2, 4, 3, 5, 6, 1]
// Target sum: 7
// Output: (2, 5), (4, 3), (6, 1)
    #include<stdio.h>
int main() {
    int arr[] = {2, 4, 3, 5, 6, 1};
    int target ;
    printf("Enter the target sum: ");
    scanf("%d", &target);
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Pairs with sum %d are:\n", target);
    
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                printf("(%d, %d)\n", arr[i], arr[j]);
            }
        }
    }
    return 0;
}